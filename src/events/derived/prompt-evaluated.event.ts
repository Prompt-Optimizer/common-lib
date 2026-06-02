import type { BaseEvent, EventMetadata } from '../base-event';

export interface PromptEvaluatedEvent extends BaseEvent {
  testId: string;
  promptId: string;
  evaluationModel?: string;
  quality: number;
  metadata: EventMetadata;
}
