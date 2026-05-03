import { Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { type Channel, type ChannelModel, connect } from 'amqplib';

import { RmqPublisherOptions } from './interfaces/rmq-publisher-options.interface';

export class RmqPublisher implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RmqPublisher.name);
  private connection!: ChannelModel;
  private channel!: Channel;

  constructor(private readonly options: RmqPublisherOptions) {}

  async onModuleInit(): Promise<void> {
    this.connection = await connect(this.options.url);
    this.channel = await this.connection.createChannel();
    const { name, type } = this.options.exchange;
    await this.channel.assertExchange(name, type, { durable: true });
    this.logger.log(`Publisher connected → exchange "${name}" (${type})`);
  }

  async onModuleDestroy(): Promise<void> {
    await this.channel?.close();
    await this.connection?.close();
  }

  publish(routingKey: string, data: object): void {
    const message = { pattern: routingKey, data };
    this.channel.publish(this.options.exchange.name, routingKey, Buffer.from(JSON.stringify(message)), {
      persistent: true,
      contentType: 'application/json',
    });
  }
}
