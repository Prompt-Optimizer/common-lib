import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';
import type { Channel, ConsumeMessage } from 'amqplib';
import { EMPTY, Observable, catchError, tap } from 'rxjs';

@Injectable()
export class RmqAckInterceptor implements NestInterceptor {
  private readonly logger = new Logger(RmqAckInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToRpc().getContext<RmqContext>();

    if (!(ctx instanceof RmqContext)) {
      return next.handle();
    }

    const channel = ctx.getChannelRef() as Channel;
    const message = ctx.getMessage() as ConsumeMessage;

    return next.handle().pipe(
      tap(() => {
        channel.ack(message);
      }),
      catchError((error: Error) => {
        if (error instanceof BadRequestException) {
          this.logger.warn(`Validation failed — acking invalid event: ${error.message}`);
          channel.ack(message);
        } else {
          this.logger.error(`Handler failed — nacking event: ${error.message}`, error.stack);
          channel.nack(message, false, false);
        }

        return EMPTY;
      }),
    );
  }
}
