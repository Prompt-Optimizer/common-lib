import type { BaseEvent } from '../base-event';

export interface OptimizationInitEvent extends BaseEvent {
  totalPrompts: number;
}
