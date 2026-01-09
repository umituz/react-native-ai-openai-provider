/**
 * OpenAI Available Models
 * @description List of available OpenAI models with their capabilities
 */

export const OPENAI_MODELS = {
  // GPT Models
  GPT_4_TURBO_PREVIEW: {
    id: 'gpt-4-turbo-preview',
    name: 'GPT-4 Turbo',
    description: 'Latest GPT-4 model with improved instruction following and capabilities',
    contextLength: 128000,
    maxOutputTokens: 4096,
    inputPricePerToken: 0.01,
    outputPricePerToken: 0.03,
    capabilities: {
      textGeneration: true,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: true,
      functionCalling: true,
      vision: true,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'gpt-vision',
  },
  GPT_4: {
    id: 'gpt-4',
    name: 'GPT-4',
    description: 'Most capable GPT-4 model for complex tasks',
    contextLength: 8192,
    maxOutputTokens: 4096,
    inputPricePerToken: 0.03,
    outputPricePerToken: 0.06,
    capabilities: {
      textGeneration: true,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: true,
      functionCalling: true,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'gpt',
  },
  GPT_4_32K: {
    id: 'gpt-4-32k',
    name: 'GPT-4 32K',
    contextLength: 32768,
    maxOutputTokens: 4096,
    inputPricePerToken: 0.06,
    outputPricePerToken: 0.12,
    capabilities: {
      textGeneration: true,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: true,
      functionCalling: true,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'gpt',
  },
  GPT_3_5_TURBO: {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    description: 'Fast and cost-effective model for most text generation tasks',
    contextLength: 16384,
    maxOutputTokens: 4096,
    inputPricePerToken: 0.0005,
    outputPricePerToken: 0.0015,
    capabilities: {
      textGeneration: true,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: true,
      functionCalling: true,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'gpt',
  },
  GPT_3_5_TURBO_16K: {
    id: 'gpt-3.5-turbo-16k',
    name: 'GPT-3.5 Turbo 16K',
    description: 'GPT-3.5 Turbo with 16K context window',
    contextLength: 16384,
    maxOutputTokens: 4096,
    inputPricePerToken: 0.003,
    outputPricePerToken: 0.004,
    capabilities: {
      textGeneration: true,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: true,
      functionCalling: true,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'gpt',
  },

  // DALL-E Models
  DALL_E_3: {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    description: 'Most advanced image generation model',
    contextLength: 4000,
    maxOutputTokens: 0,
    inputPricePerToken: 0,
    outputPricePerToken: 0.04,
    capabilities: {
      textGeneration: false,
      imageGeneration: true,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'dall-e',
  },
  DALL_E_2: {
    id: 'dall-e-2',
    name: 'DALL-E 2',
    description: 'Previous generation image generation model',
    contextLength: 1000,
    maxOutputTokens: 0,
    inputPricePerToken: 0,
    outputPricePerToken: 0.02,
    capabilities: {
      textGeneration: false,
      imageGeneration: true,
      imageEditing: true,
      imageVariation: true,
      speechToText: false,
      textToSpeech: false,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'dall-e',
  },

  // Whisper Models
  WHISPER_1: {
    id: 'whisper-1',
    name: 'Whisper v1',
    description: 'General-purpose speech recognition model',
    contextLength: 0,
    maxOutputTokens: 0,
    inputPricePerToken: 0,
    outputPricePerToken: 0.006,
    capabilities: {
      textGeneration: false,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: true,
      textToSpeech: false,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'whisper',
  },

  // TTS Models
  TTS_1: {
    id: 'tts-1',
    name: 'TTS v1',
    description: 'Text-to-speech model optimized for speed',
    contextLength: 0,
    maxOutputTokens: 0,
    inputPricePerToken: 0,
    outputPricePerToken: 0.015,
    capabilities: {
      textGeneration: false,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: true,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'tts',
  },
  TTS_1_HD: {
    id: 'tts-1-hd',
    name: 'TTS v1 HD',
    description: 'High-quality text-to-speech model',
    contextLength: 0,
    maxOutputTokens: 0,
    inputPricePerToken: 0,
    outputPricePerToken: 0.03,
    capabilities: {
      textGeneration: false,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: true,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'tts',
  },

  // Embedding Models
  TEXT_EMBEDDING_ADA_002: {
    id: 'text-embedding-ada-002',
    name: 'Text Embedding Ada v2',
    description: 'General purpose text embedding model',
    contextLength: 8191,
    maxOutputTokens: 0,
    inputPricePerToken: 0.0001,
    outputPricePerToken: 0,
    capabilities: {
      textGeneration: false,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: true,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'embedding',
  },
  TEXT_EMBEDDING_3_SMALL: {
    id: 'text-embedding-3-small',
    name: 'Text Embedding v3 Small',
    description: 'Compact embedding model with good performance',
    contextLength: 8191,
    maxOutputTokens: 0,
    inputPricePerToken: 0.00002,
    outputPricePerToken: 0,
    capabilities: {
      textGeneration: false,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: true,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'embedding',
  },
  TEXT_EMBEDDING_3_LARGE: {
    id: 'text-embedding-3-large',
    name: 'Text Embedding v3 Large',
    description: 'High-performance embedding model',
    contextLength: 8191,
    maxOutputTokens: 0,
    inputPricePerToken: 0.00013,
    outputPricePerToken: 0,
    capabilities: {
      textGeneration: false,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: true,
      fineTuning: false,
      moderation: false,
    },
    modelType: 'embedding',
  },

  // Moderation Models
  TEXT_MODERATION_LATEST: {
    id: 'text-moderation-latest',
    name: 'Text Moderation Latest',
    description: 'Latest content moderation model',
    contextLength: 0,
    maxOutputTokens: 0,
    inputPricePerToken: 0,
    outputPricePerToken: 0,
    capabilities: {
      textGeneration: false,
      imageGeneration: false,
      imageEditing: false,
      imageVariation: false,
      speechToText: false,
      textToSpeech: false,
      streaming: false,
      functionCalling: false,
      vision: false,
      embedding: false,
      fineTuning: false,
      moderation: true,
    },
    modelType: 'moderation',
  },
} as const;

/**
 * Default Models
 * @description Default models for different use cases
 */
export const DEFAULT_OPENAI_MODELS = {
  TEXT_GENERATION: OPENAI_MODELS.GPT_4_TURBO_PREVIEW.id,
  FAST_TEXT_GENERATION: OPENAI_MODELS.GPT_3_5_TURBO.id,
  LONG_CONTEXT: OPENAI_MODELS.GPT_4_32K.id,
  VISION_UNDERSTANDING: OPENAI_MODELS.GPT_4_TURBO_PREVIEW.id,
  IMAGE_GENERATION: OPENAI_MODELS.DALL_E_3.id,
  IMAGE_EDITING: OPENAI_MODELS.DALL_E_2.id,
  SPEECH_TO_TEXT: OPENAI_MODELS.WHISPER_1.id,
  TEXT_TO_SPEECH: OPENAI_MODELS.TTS_1.id,
  TEXT_TO_SPEECH_HD: OPENAI_MODELS.TTS_1_HD.id,
  EMBEDDING: OPENAI_MODELS.TEXT_EMBEDDING_3_SMALL.id,
  MODERATION: OPENAI_MODELS.TEXT_MODERATION_LATEST.id,
  FUNCTION_CALLING: OPENAI_MODELS.GPT_4_TURBO_PREVIEW.id,
} as const;

/**
 * Feature Models Configuration
 * @description Models optimized for specific features
 */
export const OPENAI_FEATURE_MODELS = {
  CHAT: {
    model: OPENAI_MODELS.GPT_4_TURBO_PREVIEW.id,
    maxTokens: 2048,
    temperature: 0.7,
    topP: 0.9,
    presencePenalty: 0,
    frequencyPenalty: 0,
  },
  FAST_CHAT: {
    model: OPENAI_MODELS.GPT_3_5_TURBO.id,
    maxTokens: 1024,
    temperature: 0.7,
    topP: 0.9,
    presencePenalty: 0,
    frequencyPenalty: 0,
  },
  LONG_DOCUMENT: {
    model: OPENAI_MODELS.GPT_4_32K.id,
    maxTokens: 4096,
    temperature: 0.3,
    topP: 0.8,
    presencePenalty: 0,
    frequencyPenalty: 0,
  },
  CREATIVE_WRITING: {
    model: OPENAI_MODELS.GPT_4_TURBO_PREVIEW.id,
    maxTokens: 2048,
    temperature: 0.9,
    topP: 0.95,
    presencePenalty: 0.1,
    frequencyPenalty: 0.1,
  },
  CODE_GENERATION: {
    model: OPENAI_MODELS.GPT_4_TURBO_PREVIEW.id,
    maxTokens: 2048,
    temperature: 0.1,
    topP: 0.7,
    presencePenalty: 0,
    frequencyPenalty: 0,
  },
  ANALYSIS: {
    model: OPENAI_MODELS.GPT_4.id,
    maxTokens: 1024,
    temperature: 0.1,
    topP: 0.5,
    presencePenalty: 0,
    frequencyPenalty: 0,
  },
  FUNCTION_CALLING: {
    model: OPENAI_MODELS.GPT_4_TURBO_PREVIEW.id,
    maxTokens: 1024,
    temperature: 0.1,
    topP: 0.7,
    presencePenalty: 0,
    frequencyPenalty: 0,
    toolChoice: 'auto',
  },
  IMAGE_GENERATION: {
    model: OPENAI_MODELS.DALL_E_3.id,
    count: 1,
    size: '1024x1024' as const,
    quality: 'hd' as const,
    style: 'vivid' as const,
    responseFormat: 'url' as const,
  },
  IMAGE_EDITING: {
    model: OPENAI_MODELS.DALL_E_2.id,
    count: 1,
    size: '1024x1024' as const,
    responseFormat: 'url' as const,
  },
  SPEECH_RECOGNITION: {
    model: OPENAI_MODELS.WHISPER_1.id,
    language: 'en',
    responseFormat: 'json' as const,
    temperature: 0.0,
  },
  SPEECH_SYNTHESIS: {
    model: OPENAI_MODELS.TTS_1_HD.id,
    voice: 'alloy' as const,
    speed: 1.0,
    responseFormat: 'mp3' as const,
  },
  FAST_SPEECH_SYNTHESIS: {
    model: OPENAI_MODELS.TTS_1.id,
    voice: 'alloy' as const,
    speed: 1.0,
    responseFormat: 'mp3' as const,
  },
  EMBEDDING: {
    model: OPENAI_MODELS.TEXT_EMBEDDING_3_SMALL.id,
    encodingFormat: 'float' as const,
    dimensions: 1536,
  },
  HIGH_PERFORMANCE_EMBEDDING: {
    model: OPENAI_MODELS.TEXT_EMBEDDING_3_LARGE.id,
    encodingFormat: 'float' as const,
    dimensions: 3072,
  },
} as const;

/**
 * API Configuration Constants
 */
export const OPENAI_API_CONFIG = {
  DEFAULT_BASE_URL: 'https://api.openai.com/v1',
  DEFAULT_TIMEOUT: 60000,
  DEFAULT_MAX_RETRIES: 3,
  DEFAULT_MODEL: OPENAI_MODELS.GPT_4_TURBO_PREVIEW.id,
  DEFAULT_MAX_TOKENS: 4096,
  DEFAULT_TEMPERATURE: 0.7,
  DEFAULT_TOP_P: 0.9,
  DEFAULT_PRESENCE_PENALTY: 0,
  DEFAULT_FREQUENCY_PENALTY: 0,
} as const;

/**
 * Rate Limiting Constants
 */
export const RATE_LIMIT_CONFIG = {
  REQUESTS_PER_MINUTE: 3500, // Varies by tier
  REQUESTS_PER_DAY: 10000, // Varies by tier
  RETRY_DELAY_BASE: 1000,
  RETRY_DELAY_MAX: 30000,
  BACKOFF_FACTOR: 2,
  MAX_RETRY_ATTEMPTS: 5,
} as const;

/**
 * Cache Configuration
 */
export const CACHE_CONFIG = {
  DEFAULT_TTL: 300000, // 5 minutes
  MAX_CACHE_SIZE: 1000,
  MODEL_CACHE_TTL: 3600000, // 1 hour
  EMBEDDING_CACHE_TTL: 86400000, // 24 hours
  FILE_CACHE_TTL: 7200000, // 2 hours
} as const;

/**
 * File Upload Constants
 */
export const FILE_UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 512 * 1024 * 1024, // 512MB
  SUPPORTED_FORMATS: ['.txt', '.pdf', '.docx', '.csv', '.json', '.md'],
  MAX_FILES_PER_REQUEST: 20,
  UPLOAD_CHUNK_SIZE: 8 * 1024 * 1024, // 8MB chunks
} as const;

/**
 * Voice Configuration
 */
export const VOICE_CONFIG = {
  VOICES: ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'] as const,
  DEFAULT_VOICE: 'alloy',
  MAX_SPEED: 4.0,
  MIN_SPEED: 0.25,
  DEFAULT_SPEED: 1.0,
  SUPPORTED_LANGUAGES: ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ko'],
} as const;

/**
 * Content Moderation
 */
export const MODERATION_CONFIG = {
  CATEGORIES: [
    'sexual',
    'hate',
    'harassment',
    'selfHarm',
    'sexualMinors',
    'hateThreatening',
    'violence',
    'selfHarmIntent',
    'selfHarmInstructions',
    'harassmentThreatening',
    'violenceGraphic',
  ] as const,
  THRESHOLDS: {
    LOW: 0.1,
    MEDIUM: 0.5,
    HIGH: 0.9,
  } as const,
} as const;