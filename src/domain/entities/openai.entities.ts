/**
 * OpenAI Config Entity
 * @description Configuration for OpenAI provider
 */
export interface OpenAIConfig {
  readonly apiKey: string;
  readonly organizationId?: string;
  readonly baseURL?: string;
  readonly timeout?: number;
  readonly maxRetries?: number;
  readonly defaultModel?: string;
  readonly defaultImageModel?: string;
  readonly defaultSpeechModel?: string;
}

/**
 * OpenAI Model Entity
 * @description Available OpenAI models
 */
export interface OpenAIModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly contextLength: number;
  readonly maxOutputTokens: number;
  readonly inputPricePerToken: number;
  readonly outputPricePerToken: number;
  readonly capabilities: OpenAIModelCapabilities;
  readonly modelType: OpenAIModelType;
}

/**
 * OpenAI Model Capabilities
 * @description What the model can do
 */
export interface OpenAIModelCapabilities {
  readonly textGeneration: boolean;
  readonly imageGeneration: boolean;
  readonly imageEditing: boolean;
  readonly imageVariation: boolean;
  readonly speechToText: boolean;
  readonly textToSpeech: boolean;
  readonly streaming: boolean;
  readonly functionCalling: boolean;
  readonly vision: boolean;
  readonly embedding: boolean;
  readonly fineTuning: boolean;
  readonly moderation: boolean;
}

/**
 * OpenAI Model Types
 * @description Different categories of OpenAI models
 */
export type OpenAIModelType = 
  | 'gpt'
  | 'gpt-vision'
  | 'dall-e'
  | 'whisper'
  | 'tts'
  | 'embedding'
  | 'moderation'
  | 'fine-tuning';

/**
 * OpenAI Message Entity
 * @description Chat message structure
 */
export interface OpenAIMessage {
  readonly role: 'system' | 'user' | 'assistant' | 'function';
  readonly content: string | OpenAIMessageContent[];
  readonly name?: string;
  readonly functionCall?: {
    readonly name: string;
    readonly arguments: string;
  };
  readonly timestamp?: number;
}

/**
 * OpenAI Message Content
 * @description Message content (text or multimodal)
 */
export interface OpenAIMessageContent {
  readonly type: 'text' | 'image_url' | 'image_file';
  readonly text?: string;
  readonly imageUrl?: {
    readonly url: string;
    readonly detail?: 'low' | 'high' | 'auto';
  };
  readonly imageFile?: {
    readonly fileId: string;
  };
}

/**
 * OpenAI Chat Completion Request
 * @description Request for text generation
 */
export interface OpenAIChatCompletionRequest {
  readonly model: string;
  readonly messages: OpenAIMessage[];
  readonly maxTokens?: number;
  readonly temperature?: number;
  readonly topP?: number;
  readonly frequencyPenalty?: number;
  readonly presencePenalty?: number;
  readonly stop?: string | string[];
  readonly stream?: boolean;
  readonly logitBias?: Record<string, number>;
  readonly logprobs?: boolean;
  readonly topLogprobs?: number;
  readonly user?: string;
  readonly seed?: number;
  readonly responseFormat?: {
    readonly type: 'text' | 'json_object' | 'json_schema';
    readonly jsonSchema?: any;
  };
  readonly tools?: OpenAITool[];
  readonly toolChoice?: 'none' | 'auto' | OpenAIToolChoice;
}

/**
 * OpenAI Chat Completion Response
 * @description Response from text generation
 */
export interface OpenAIChatCompletionResponse {
  readonly id: string;
  readonly object: 'chat.completion' | 'chat.completion.chunk';
  readonly created: number;
  readonly model: string;
  readonly choices: OpenAIChatCompletionChoice[];
  readonly usage?: OpenAIUsage;
  readonly systemFingerprint?: string;
}

/**
 * OpenAI Chat Completion Choice
 * @description Generated choice in response
 */
export interface OpenAIChatCompletionChoice {
  readonly index: number;
  readonly message?: OpenAIMessage;
  readonly delta?: {
    readonly role?: string;
    readonly content?: string;
    readonly functionCall?: {
      readonly name?: string;
      readonly arguments?: string;
    };
    readonly toolCalls?: Partial<OpenAIToolCall>[];
  };
  readonly finishReason?: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call';
  readonly logprobs?: {
    readonly tokenLogprobs: OpenAITokenLogprob[];
    readonly topLogprobs: OpenAITopLogprob[];
    readonly textOffset: number[];
  };
}

/**
 * OpenAI Token Logprob
 * @description Token probability information
 */
export interface OpenAITokenLogprob {
  readonly token: string;
  readonly logprob: number;
  readonly bytes: number[];
  readonly topLogprobs?: Array<{
    readonly token: string;
    readonly logprob: number;
    readonly bytes: number[];
  }>;
}

/**
 * OpenAI Top Logprob
 * @description Top token probabilities
 */
export interface OpenAITopLogprob {
  readonly token: string;
  readonly logprob: number;
  readonly bytes: number[];
}

/**
 * OpenAI Usage Entity
 * @description Token usage information
 */
export interface OpenAIUsage {
  readonly promptTokens: number;
  readonly completionTokens: number;
  readonly totalTokens: number;
  readonly promptTokensDetails?: {
    readonly cachedTokens: number;
    readonly audioTokens: number;
  };
  readonly completionTokensDetails?: {
    readonly reasoningTokens: number;
    readonly audioTokens: number;
    readonly acceptedPredictionTokens: number;
    readonly rejectedPredictionTokens: number;
  };
}

/**
 * OpenAI Image Generation Request
 * @description Request for image generation
 */
export interface OpenAIImageGenerationRequest {
  readonly model?: string;
  readonly prompt: string;
  readonly n?: number;
  readonly size?: OpenAIImageSize;
  readonly quality?: 'standard' | 'hd';
  readonly style?: 'vivid' | 'natural';
  readonly responseFormat?: 'url' | 'b64_json';
  readonly user?: string;
}

/**
 * OpenAI Image Edit Request
 * @description Request for image editing
 */
export interface OpenAIImageEditRequest {
  readonly image: string | File; // Base64 or File
  readonly mask?: string | File; // Optional mask
  readonly prompt: string;
  readonly n?: number;
  readonly size?: OpenAIImageSize;
  readonly responseFormat?: 'url' | 'b64_json';
  readonly user?: string;
}

/**
 * OpenAI Image Variation Request
 * @description Request for image variations
 */
export interface OpenAIImageVariationRequest {
  readonly image: string | File; // Base64 or File
  readonly n?: number;
  readonly size?: OpenAIImageSize;
  readonly responseFormat?: 'url' | 'b64_json';
  readonly user?: string;
}

/**
 * OpenAI Image Generation Response
 * @description Response from image generation
 */
export interface OpenAIImageGenerationResponse {
  readonly created: number;
  readonly data: OpenAIImageData[];
}

/**
 * OpenAI Image Data Entity
 * @description Generated image data
 */
export interface OpenAIImageData {
  readonly url?: string;
  readonly b64Json?: string;
  readonly revisedPrompt?: string;
  readonly prompt?: string;
}

/**
 * OpenAI Image Size Type
 * @description Available image sizes
 */
export type OpenAIImageSize = 
  | '256x256' 
  | '512x512' 
  | '1024x1024' 
  | '1792x1024' 
  | '1024x1792'
  | '1024x768'
  | '768x1024';

/**
 * OpenAI Tool Definition
 * @description Tool definition for function calling
 */
export interface OpenAITool {
  readonly type: 'function';
  readonly function: {
    readonly name: string;
    readonly description?: string;
    readonly parameters: any;
    readonly strict?: boolean;
  };
}

/**
 * OpenAI Tool Choice
 * @description Specific tool choice
 */
export interface OpenAIToolChoice {
  readonly type: 'function';
  readonly function: {
    readonly name: string;
  };
}

/**
 * OpenAI Tool Call
 * @description Tool call in response
 */
export interface OpenAIToolCall {
  readonly id: string;
  readonly type: 'function';
  readonly function: {
    readonly name: string;
    readonly arguments: string;
  };
}

/**
 * OpenAI Speech to Text Request
 * @description Request for speech-to-text (Whisper)
 */
export interface OpenAISpeechToTextRequest {
  readonly file: string | File; // Base64 or File
  readonly model?: 'whisper-1';
  readonly language?: string;
  readonly prompt?: string;
  readonly responseFormat?: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt';
  readonly temperature?: number;
  readonly timestampGranularities?: ('word' | 'segment')[];
}

/**
 * OpenAI Speech to Text Response
 * @description Response from speech-to-text
 */
export interface OpenAISpeechToTextResponse {
  readonly text: string;
  readonly language?: string;
  readonly duration?: number;
  readonly words?: OpenAIWordSegment[];
  readonly segments?: OpenAISpeechSegment[];
}

/**
 * OpenAI Word Segment
 * @description Word timing information
 */
export interface OpenAIWordSegment {
  readonly word: string;
  readonly start: number;
  readonly end: number;
}

/**
 * OpenAI Speech Segment
 * @description Speech segment information
 */
export interface OpenAISpeechSegment {
  readonly id: number;
  readonly seek: number;
  readonly start: number;
  readonly end: number;
  readonly text: string;
  readonly tokens: number[];
  readonly temperature: number;
  readonly avgLogprob: number;
  readonly compressionRatio: number;
  readonly noSpeechProb: number;
}

/**
 * OpenAI Text to Speech Request
 * @description Request for text-to-speech (TTS)
 */
export interface OpenAITextToSpeechRequest {
  readonly model: 'tts-1' | 'tts-1-hd';
  readonly input: string;
  readonly voice: OpenAIVoice;
  readonly responseFormat?: 'mp3' | 'opus' | 'aac' | 'flac';
  readonly speed?: number; // 0.25 to 4.0
  readonly instructions?: string;
}

/**
 * OpenAI Text to Speech Response
 * @description Response from text-to-speech
 */
export interface OpenAITextToSpeechResponse {
  readonly audioData: string; // Base64 encoded audio
  readonly duration: number;
  readonly format: string;
  readonly model: string;
  readonly voice: OpenAIVoice;
  readonly characters: number;
}

/**
 * OpenAI Voice Types
 * @description Available TTS voices
 */
export type OpenAIVoice = 
  | 'alloy'
  | 'echo'
  | 'fable'
  | 'onyx'
  | 'nova'
  | 'shimmer';

/**
 * OpenAI Embedding Request
 * @description Request for text embedding
 */
export interface OpenAIEmbeddingRequest {
  readonly model: string;
  readonly input: string | string[];
  readonly encodingFormat?: 'float' | 'base64';
  readonly dimensions?: number;
  readonly user?: string;
}

/**
 * OpenAI Embedding Response
 * @description Response from embedding
 */
export interface OpenAIEmbeddingResponse {
  readonly object: 'list';
  readonly data: Array<{
    readonly object: 'embedding';
    readonly embedding: number[] | string; // Float array or base64 string
    readonly index: number;
  }>;
  readonly model: string;
  readonly usage: {
    readonly promptTokens: number;
    readonly totalTokens: number;
  };
}

/**
 * OpenAI Moderation Request
 * @description Request for content moderation
 */
export interface OpenAIModerationRequest {
  readonly input: string | string[];
  readonly model?: 'text-moderation-latest' | 'text-moderation-stable';
}

/**
 * OpenAI Moderation Response
 * @description Response from content moderation
 */
export interface OpenAIModerationResponse {
  readonly id: string;
  readonly model: string;
  readonly results: OpenAIModerationResult[];
}

/**
 * OpenAI Moderation Result
 * @description Individual moderation result
 */
export interface OpenAIModerationResult {
  readonly flagged: boolean;
  readonly categories: {
    readonly sexual: boolean;
    readonly hate: boolean;
    readonly harassment: boolean;
    readonly selfHarm: boolean;
    readonly sexualMinors: boolean;
    readonly hateThreatening: boolean;
    readonly violence: boolean;
    readonly selfHarmIntent: boolean;
    readonly selfHarmInstructions: boolean;
    readonly harassmentThreatening: boolean;
    readonly violenceGraphic: boolean;
  };
  readonly categoryScores: {
    readonly sexual: number;
    readonly hate: number;
    readonly harassment: number;
    readonly selfHarm: number;
    readonly sexualMinors: number;
    readonly hateThreatening: number;
    readonly violence: number;
    readonly selfHarmIntent: number;
    readonly selfHarmInstructions: number;
    readonly harassmentThreatening: number;
    readonly violenceGraphic: number;
  };
}

/**
 * OpenAI Error Entity
 * @description Error information from OpenAI API
 */
export interface OpenAIError {
  readonly type: OpenAIErrorType;
  readonly message: string;
  readonly code?: string;
  readonly param?: string;
  readonly statusCode?: number;
  readonly timestamp: number;
}

/**
 * OpenAI Error Types
 * @description Possible error types
 */
export enum OpenAIErrorType {
  INVALID_API_KEY = 'invalid_api_key',
  RATE_LIMIT = 'rate_limit',
  INVALID_REQUEST = 'invalid_request',
  MODEL_NOT_FOUND = 'model_not_found',
  CONTENT_POLICY = 'content_policy',
  INSUFFICIENT_QUOTA = 'insufficient_quota',
  TIMEOUT = 'timeout',
  NETWORK_ERROR = 'network_error',
  UNKNOWN = 'unknown'
}

/**
 * OpenAI Create Input Types
 */
export type OpenAIConfigCreateInput = Omit<OpenAIConfig, 'apiKey'> & { apiKey: string };
export type OpenAIMessageCreateInput = Omit<OpenAIMessage, 'timestamp'>;
export type OpenAIChatCompletionRequestCreateInput = Omit<OpenAIChatCompletionRequest, 'stream'> & { stream?: boolean };
export type OpenAIImageGenerationRequestCreateInput = Omit<OpenAIImageGenerationRequest, 'responseFormat'> & { responseFormat?: 'url' | 'b64_json' };