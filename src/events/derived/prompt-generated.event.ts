import type { BaseEvent, EvaluationConfig, EventMetadata } from '../base-event';

export interface PromptGeneratedEvent extends BaseEvent {
  testId: string;
  promptId: string;
  generatedPrompt: string;
  model: string;
  evaluation: EvaluationConfig;
  metadata: EventMetadata;
  evaluationModel?: string;
}
