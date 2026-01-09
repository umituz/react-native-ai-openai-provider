/**
 * OpenAI Provider Interface
 * @description Interface for OpenAI provider implementation
 */
export interface IOpenAIProvider {
  /**
   * Initialize the provider with configuration
   */
  initialize(config: import('../entities').OpenAIConfig): Promise<void>;
  
  /**
   * Check if provider is initialized
   */
  isInitialized(): boolean;
  
  /**
   * Generate text using OpenAI models
   */
  generateText(request: import('../entities').OpenAIChatCompletionRequest): Promise<import('../entities').OpenAIChatCompletionResponse>;
  
  /**
   * Generate streaming text
   */
  generateTextStream(
    request: import('../entities').OpenAIChatCompletionRequest,
    onChunk: (chunk: import('../entities').OpenAIChatCompletionResponse) => void
  ): Promise<void>;
  
  /**
   * Generate images using DALL-E models
   */
  generateImages(request: import('../entities').OpenAIImageGenerationRequest): Promise<import('../entities').OpenAIImageGenerationResponse>;
  
  /**
   * Edit images
   */
  editImages(request: import('../entities').OpenAIImageEditRequest): Promise<import('../entities').OpenAIImageGenerationResponse>;
  
  /**
   * Create image variations
   */
  createImageVariations(request: import('../entities').OpenAIImageVariationRequest): Promise<import('../entities').OpenAIImageGenerationResponse>;
  
  /**
   * Convert speech to text (Whisper)
   */
  speechToText(request: import('../entities').OpenAISpeechToTextRequest): Promise<import('../entities').OpenAISpeechToTextResponse>;
  
  /**
   * Convert text to speech (TTS)
   */
  textToSpeech(request: import('../entities').OpenAITextToSpeechRequest): Promise<import('../entities').OpenAITextToSpeechResponse>;
  
  /**
   * Generate text embeddings
   */
  generateEmbeddings(request: import('../entities').OpenAIEmbeddingRequest): Promise<import('../entities').OpenAIEmbeddingResponse>;
  
  /**
   * Moderate content
   */
  moderateContent(request: import('../entities').OpenAIModerationRequest): Promise<import('../entities').OpenAIModerationResponse>;
  
  /**
   * Get available models
   */
  getModels(): Promise<import('../entities').OpenAIModel[]>;
  
  /**
   * Get model by ID
   */
  getModel(id: string): Promise<import('../entities').OpenAIModel | null>;
  
  /**
   * Estimate tokens for text
   */
  estimateTokens(text: string): number;
  
  /**
   * Validate API key
   */
  validateApiKey(apiKey: string): Promise<boolean>;
  
  /**
   * Cancel ongoing requests
   */
  cancelRequest(requestId: string): void;
}

/**
 * OpenAI HTTP Client Interface
 * @description HTTP client for OpenAI API communication
 */
export interface IOpenAIHttpClient {
  /**
   * Make HTTP request
   */
  request<T>(config: OpenAIHttpRequestConfig): Promise<T>;
  
  /**
   * Make streaming request
   */
  stream(config: OpenAIHttpRequestConfig, onChunk: (chunk: string) => void): Promise<void>;
  
  /**
   * Upload file
   */
  uploadFile(file: File, purpose?: string): Promise<any>;
  
  /**
   * List files
   */
  listFiles(purpose?: string): Promise<any>;
  
  /**
   * Delete file
   */
  deleteFile(fileId: string): Promise<any>;
  
  /**
   * Set authentication
   */
  setAuth(apiKey: string, organizationId?: string): void;
  
  /**
   * Set base URL
   */
  setBaseURL(url: string): void;
  
  /**
   * Set timeout
   */
  setTimeout(timeout: number): void;
}

/**
 * OpenAI HTTP Request Config
 * @description Configuration for HTTP requests
 */
export interface OpenAIHttpRequestConfig {
  readonly url: string;
  readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  readonly headers?: Record<string, string>;
  readonly data?: any;
  readonly timeout?: number;
  readonly signal?: AbortSignal;
  readonly isFileUpload?: boolean;
}

/**
 * OpenAI Function Executor Interface
 * @description Interface for executing functions
 */
export interface IOpenAIFunctionExecutor {
  /**
   * Execute a function call
   */
  execute(toolCall: import('../entities').OpenAIToolCall): Promise<import('../entities').OpenAIToolCallResult>;
  
  /**
   * Get available functions
   */
  getFunctions(): import('../entities').OpenAITool[];
  
  /**
   * Register a new function
   */
  registerFunction(name: string, func: OpenAIFunctionImplementation): void;
  
  /**
   * Unregister a function
   */
  unregisterFunction(name: string): void;
}

/**
 * OpenAI Function Implementation
 * @description Implementation of a function
 */
export interface OpenAIFunctionImplementation {
  /**
   * Execute function
   */
  execute(parameters: any): Promise<any>;
  
  /**
   * Function definition
   */
  definition: import('../entities').OpenAITool;
  
  /**
   * Optional validation
   */
  validate?(parameters: any): boolean | string;
}

/**
 * OpenAI Cache Interface
 * @description Cache for API responses
 */
export interface IOpenAICache {
  /**
   * Get cached value
   */
  get<T>(key: string): Promise<T | null>;
  
  /**
   * Set cache value
   */
  set<T>(key: string, value: T, ttl?: number): Promise<void>;
  
  /**
   * Delete cache entry
   */
  delete(key: string): Promise<void>;
  
  /**
   * Clear all cache
   */
  clear(): Promise<void>;
  
  /**
   * Check if key exists
   */
  has(key: string): Promise<boolean>;
}

/**
 * OpenAI Telemetry Interface
 * @description Interface for telemetry and analytics
 */
export interface IOpenAITelemetry {
  /**
   * Track event
   */
  track(event: string, properties?: Record<string, any>): void;
  
  /**
   * Track error
   */
  trackError(error: Error, properties?: Record<string, any>): void;
  
  /**
   * Track performance
   */
  trackPerformance(name: string, duration: number, properties?: Record<string, any>): void;
}

/**
 * OpenAI Logger Interface
 * @description Logger interface for debugging
 */
export interface IOpenAILogger {
  /**
   * Log debug message
   */
  debug(message: string, data?: any): void;
  
  /**
   * Log info message
   */
  info(message: string, data?: any): void;
  
  /**
   * Log warning message
   */
  warn(message: string, data?: any): void;
  
  /**
   * Log error message
   */
  error(message: string, error?: Error | any): void;
}

/**
 * OpenAI Tool Call Result
 * @description Result of executing a tool call
 */
export interface OpenAIToolCallResult {
  readonly toolCallId: string;
  readonly result: any;
  readonly error?: string;
  readonly duration?: number;
}

/**
 * OpenAI Retry Options
 * @description Configuration for retry logic
 */
export interface OpenAIRetryOptions {
  readonly maxRetries: number;
  readonly baseDelay: number;
  readonly maxDelay: number;
  readonly backoffFactor: number;
  readonly retryableErrors: string[];
}