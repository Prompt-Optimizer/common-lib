import type { BaseNotificationEvent } from './base-notification-event';

export interface OptimizationSuccessEmailEvent extends BaseNotificationEvent {
  runId: string;
}
