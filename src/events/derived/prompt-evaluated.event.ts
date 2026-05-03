import type { BaseEvent, EventMetadata } from '../base-event';

export interface PromptEvaluatedEvent extends BaseEvent {
  promptId: string;
  score: number;
  metadata: EventMetadata;
}
