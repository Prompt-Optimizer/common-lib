import type { BaseEvent, EventMetadata } from '../base-event';

export interface PromptEvaluatedEvent extends BaseEvent {
  promptId: string;
  evaluationModel?: string;
  quality: number;
  metadata: EventMetadata;
}
