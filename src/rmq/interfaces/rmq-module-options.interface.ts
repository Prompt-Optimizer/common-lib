import type { RmqPublisherOptions } from './rmq-publisher-options.interface';

export interface RmqModuleAsyncOptions {
  token: string | symbol;
  imports?: any[];
  useFactory: (...args: any[]) => RmqPublisherOptions | Promise<RmqPublisherOptions>;
  inject?: any[];
}
