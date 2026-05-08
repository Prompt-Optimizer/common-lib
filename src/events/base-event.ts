import type { EvaluationType } from '../enums';
import type { OptimizationType } from '../enums';

export interface BaseEvent {
  runId: string;
  userId: string;
  timestamp: string;
}

export interface EventMetadata {
  tokenUsage: {
    input: number;
    output: number;
    cachedInput: number;
  };
  cost: number;
  executionTimeMs: number;
}

export interface OptimizationCriterion {
  type: OptimizationType;
  weight: number;
}

export interface EvaluationConfig {
  type: EvaluationType;
  rules?: Record<string, unknown>;
  description?: string;
  expectedOutput?: string;
}
