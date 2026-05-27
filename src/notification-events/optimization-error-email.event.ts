import type { BaseNotificationEvent } from './base-notification-event';

export interface OptimizationErrorEmailEvent extends BaseNotificationEvent {
  runId: string;
  error: string;
}
