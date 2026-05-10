import { AiProvider } from '../enums';

export interface SupportedModel {
  id: string;
  provider: AiProvider;
  name: string;
}

export const SUPPORTED_MODELS: readonly SupportedModel[] = [
  // OpenAI
  { id: 'gpt-5.5', provider: AiProvider.OPENAI, name: 'GPT-5.5' },
  { id: 'gpt-5.4-mini', provider: AiProvider.OPENAI, name: 'GPT-5.4 Mini' },
  { id: 'gpt-5.4-nano', provider: AiProvider.OPENAI, name: 'GPT-5.4 Nano' },
  { id: 'gpt-5', provider: AiProvider.OPENAI, name: 'GPT-5' },
  { id: 'gpt-5-mini', provider: AiProvider.OPENAI, name: 'GPT-5 Mini' },
  { id: 'gpt-4.1', provider: AiProvider.OPENAI, name: 'GPT-4.1' },
  { id: 'gpt-4.1-mini', provider: AiProvider.OPENAI, name: 'GPT-4.1 Mini' },
  { id: 'gpt-4.1-nano', provider: AiProvider.OPENAI, name: 'GPT-4.1 Nano' },
  { id: 'gpt-4o', provider: AiProvider.OPENAI, name: 'GPT-4o' },
  { id: 'gpt-4o-mini', provider: AiProvider.OPENAI, name: 'GPT-4o Mini' },

  // Anthropic
  { id: 'claude-opus-4-7', provider: AiProvider.ANTHROPIC, name: 'Claude Opus 4.7' },
  { id: 'claude-sonnet-4-6', provider: AiProvider.ANTHROPIC, name: 'Claude Sonnet 4.6' },
  { id: 'claude-sonnet-4-5', provider: AiProvider.ANTHROPIC, name: 'Claude Sonnet 4.5' },
  { id: 'claude-haiku-4-5', provider: AiProvider.ANTHROPIC, name: 'Claude Haiku 4.5' },

  // Google Gemini (free-tier available)
  { id: 'gemini-2.5-pro', provider: AiProvider.GEMINI, name: 'Gemini 2.5 Pro' },
  { id: 'gemini-2.5-flash', provider: AiProvider.GEMINI, name: 'Gemini 2.5 Flash' },
  { id: 'gemini-2.5-flash-lite', provider: AiProvider.GEMINI, name: 'Gemini 2.5 Flash-Lite' },
  { id: 'gemini-2.0-flash', provider: AiProvider.GEMINI, name: 'Gemini 2.0 Flash' },
] as const;

export const SUPPORTED_MODEL_IDS = SUPPORTED_MODELS.map((m) => m.id);
