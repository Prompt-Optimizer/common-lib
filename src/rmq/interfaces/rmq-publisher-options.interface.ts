export interface RmqPublisherOptions {
  url: string;
  exchange: {
    name: string;
    type: string;
  };
}
