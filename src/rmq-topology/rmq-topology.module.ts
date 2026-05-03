import { DynamicModule, Module, Provider } from '@nestjs/common';

import type {
  RmqTopologyModuleAsyncOptions,
  RmqTopologyModuleOptions,
} from './interfaces/rmq-topology-options.interface';
import { RmqTopologyService } from './rmq-topology.service';
import { RMQ_TOPOLOGY_OPTIONS } from './rmq-topology.tokens';

@Module({})
export class RmqTopologyModule {
  static forRoot(options: RmqTopologyModuleOptions): DynamicModule {
    return {
      module: RmqTopologyModule,
      providers: [{ provide: RMQ_TOPOLOGY_OPTIONS, useValue: options }, RmqTopologyService],
      exports: [RmqTopologyService],
    };
  }

  static forRootAsync(options: RmqTopologyModuleAsyncOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: RMQ_TOPOLOGY_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject ?? [],
    };

    return {
      module: RmqTopologyModule,
      imports: options.imports ?? [],
      providers: [optionsProvider, RmqTopologyService],
      exports: [RmqTopologyService],
    };
  }
}
