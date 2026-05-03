import type { AiProvider } from '../../enums';
import type { BaseEvent, EvaluationConfig, EventMetadata } from '../base-event';

export interface PromptGeneratedEvent extends BaseEvent {
  promptId: string;
  generatedPrompt: string;
  provider: AiProvider;
  model: string;
  evaluation: EvaluationConfig;
  metadata: EventMetadata;
}
