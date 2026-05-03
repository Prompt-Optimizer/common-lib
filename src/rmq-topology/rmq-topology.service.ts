import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { type Channel, type ChannelModel, connect } from 'amqplib';

import type { RmqTopologyModuleOptions } from './interfaces/rmq-topology-options.interface';
import { RMQ_TOPOLOGY_OPTIONS } from './rmq-topology.tokens';

@Injectable()
export class RmqTopologyService implements OnModuleInit {
  private readonly logger = new Logger(RmqTopologyService.name);

  constructor(@Inject(RMQ_TOPOLOGY_OPTIONS) private readonly options: RmqTopologyModuleOptions) {}

  async onModuleInit(): Promise<void> {
    await this.assertTopology();
    this.logger.log('RMQ topology asserted');
  }

  private async assertTopology(): Promise<void> {
    const connectionByUrl = new Map<string, ChannelModel>();
    const channelByUrl = new Map<string, Channel>();

    try {
      for (const { url, exchange, queue, routingKey } of this.options.bindings) {
        if (!channelByUrl.has(url)) {
          const connection = await connect(url);
          connectionByUrl.set(url, connection);
          channelByUrl.set(url, await connection.createChannel());
        }

        const channel = channelByUrl.get(url)!;
        await channel.assertExchange(exchange.name, exchange.type, { durable: true });
        await channel.assertQueue(queue.name, { durable: true, arguments: { 'x-queue-type': queue.type } });
        await channel.bindQueue(queue.name, exchange.name, routingKey);
      }
    } finally {
      await Promise.allSettled([...channelByUrl.values()].map((ch) => ch.close()));
      await Promise.allSettled([...connectionByUrl.values()].map((conn) => conn.close()));
    }
  }
}
