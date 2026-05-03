import type { BaseEvent } from '../base-event';

export interface OptimizationCompletedEvent extends BaseEvent {
  status: 'completed' | 'failed';
  error?: string;
}
