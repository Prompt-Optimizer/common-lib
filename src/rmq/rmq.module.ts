import { DynamicModule, Module, Provider } from '@nestjs/common';

import type { RmqModuleAsyncOptions } from './interfaces/rmq-module-options.interface';
import { RmqPublisher } from './rmq-publisher';

@Module({})
export class RmqModule {
  static registerAsync(options: RmqModuleAsyncOptions): DynamicModule {
    const provider: Provider = {
      provide: options.token,
      useFactory: async (...args: any[]) => {
        const opts = await options.useFactory(...args);
        return new RmqPublisher(opts);
      },
      inject: options.inject ?? [],
    };

    return {
      module: RmqModule,
      imports: options.imports ?? [],
      providers: [provider],
      exports: [options.token],
    };
  }
}
