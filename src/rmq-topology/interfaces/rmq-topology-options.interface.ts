export interface RmqBinding {
  url: string;
  exchange: {
    name: string;
    type: string;
  };
  queue: {
    name: string;
    type: string;
  };
  routingKey: string;
}

export interface RmqTopologyModuleOptions {
  bindings: RmqBinding[];
}

export interface RmqTopologyModuleAsyncOptions {
  imports?: any[];
  useFactory: (...args: any[]) => RmqTopologyModuleOptions | Promise<RmqTopologyModuleOptions>;
  inject?: any[];
}
