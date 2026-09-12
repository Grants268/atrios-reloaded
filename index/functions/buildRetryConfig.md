[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / buildRetryConfig

# Function: buildRetryConfig()

> **buildRetryConfig**(`rpcConfig?`, `hooks?`): [`RetryConfig`](../interfaces/RetryConfig.md)

Defined in: [network/network.config.ts:210](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L210)

Resolves the effective [RetryConfig](../interfaces/RetryConfig.md) for an [RpcConfig](../interfaces/RpcConfig.md).

Preference order:
1. `rpcConfig.retry` (the first-class policy),
2. the deprecated flat legacy fields (`maxRetryAttempts`, `retryBaseDelayMs`,
   `maxRetryDelayMs`),
3. [DEFAULT\_RETRY\_CONFIG](../variables/DEFAULT_RETRY_CONFIG.md).

`hooks.onRetry` is merged on top so each RPC service can supply its own
logging without affecting the shared classification.

## Parameters

### rpcConfig?

[`RpcConfig`](../interfaces/RpcConfig.md)

### hooks?

#### onRetry?

(`info`) => `void`

## Returns

[`RetryConfig`](../interfaces/RetryConfig.md)
