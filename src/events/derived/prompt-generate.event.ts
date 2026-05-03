import type { AiProvider } from '../../enums';
import type { BaseEvent, EvaluationConfig, OptimizationCriterion } from '../base-event';

export interface PromptGenerateEvent extends BaseEvent {
  inputPrompt: string;
  provider: AiProvider;
  promptsPerProvider: number;
  optimizationCriteria: OptimizationCriterion[];
  evaluation: EvaluationConfig;
}
