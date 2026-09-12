[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RpcConfig

# Interface: RpcConfig

Defined in: [network/network.config.ts:248](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L248)

Low-level RPC configuration (customization layer)

## Properties

### circuitBreakerFailureThreshold?

> `optional` **circuitBreakerFailureThreshold?**: `number`

Defined in: [network/network.config.ts:278](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L278)

Consecutive failures to trip the circuit breaker (default: 5)

***

### circuitBreakerResetTimeoutMs?

> `optional` **circuitBreakerResetTimeoutMs?**: `number`

Defined in: [network/network.config.ts:280](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L280)

Cooldown time in ms before transitioning from open to half-open (default: 10_000)

***

### enableRetries?

> `optional` **enableRetries?**: `boolean`

Defined in: [network/network.config.ts:260](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L260)

Enable retry strategy for transient errors

***

### endpoint?

> `optional` **endpoint?**: `string`

Defined in: [network/network.config.ts:250](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L250)

Primary RPC endpoint URL

***

### failoverEndpoints?

> `optional` **failoverEndpoints?**: `string`[]

Defined in: [network/network.config.ts:254](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L254)

Ordered list of fallback endpoints

***

### fetchClient?

> `optional` **fetchClient?**: (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: [network/network.config.ts:256](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L256)

Custom fetch-compatible client (e.g. node-fetch, undici)

#### Parameters

##### input

`string` \| `URL` \| `Request`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

***

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Defined in: [network/network.config.ts:252](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L252)

Custom HTTP headers (e.g. API keys)

***

### ~~maxRetryAttempts?~~

> `optional` **maxRetryAttempts?**: `number`

Defined in: [network/network.config.ts:268](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L268)

#### Deprecated

use `retry.maxAttempts`

***

### ~~maxRetryDelayMs?~~

> `optional` **maxRetryDelayMs?**: `number`

Defined in: [network/network.config.ts:274](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L274)

#### Deprecated

use `retry.maxDelayMs`

***

### retry?

> `optional` **retry?**: [`RetryConfig`](RetryConfig.md)

Defined in: [network/network.config.ts:266](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L266)

First-class retry / backoff policy. When provided, this takes precedence
over the legacy flat `maxRetryAttempts` / `retryBaseDelayMs` / `maxRetryDelayMs`
fields below (which are retained only for backwards compatibility).

***

### ~~retryableStatusCodes?~~

> `optional` **retryableStatusCodes?**: (`string` \| `number`)[]

Defined in: [network/network.config.ts:276](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L276)

#### Deprecated

superseded by the `retry.classifyError` predicate

***

### ~~retryBackoffFactor?~~

> `optional` **retryBackoffFactor?**: `number`

Defined in: [network/network.config.ts:272](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L272)

#### Deprecated

unused — backoff factor is fixed at 2 in the retry loop

***

### ~~retryBaseDelayMs?~~

> `optional` **retryBaseDelayMs?**: `number`

Defined in: [network/network.config.ts:270](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L270)

#### Deprecated

use `retry.baseDelayMs`

***

### timeoutMs?

> `optional` **timeoutMs?**: `number`

Defined in: [network/network.config.ts:258](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L258)

Per-request timeout in ms (default: 30_000)
