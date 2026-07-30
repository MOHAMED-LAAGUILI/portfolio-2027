export interface ModelData {
  name: string
  provider: string
  tokens: string
  tier: 'premium' | 'free'
}

export const models: ModelData[] = [
  { name: 'GPT-5.5', provider: 'OpenAI', tier: 'premium', tokens: '1M' },
  { name: 'Claude Opus 4.7', provider: 'Anthropic', tier: 'premium', tokens: '8.2M' },
  { name: 'Gemini 2.5 Pro', provider: 'Google', tier: 'premium', tokens: '2M' },
  { name: 'GPT-5 Mini', provider: 'OpenAI', tier: 'free', tokens: '500K' },
  { name: 'Claude Haiku 4.5', provider: 'Anthropic', tier: 'free', tokens: '1.1M' },
  { name: 'Gemini 2.5 Flash', provider: 'Google', tier: 'free', tokens: '1M' },
]

export const tokenCard = {
  totalTokens: '12.5M',
  period: '28 DAYS',
  progress: 82,
  updated: 'Updated 9h ago',
}
