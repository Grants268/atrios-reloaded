[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RetryConfig

# Interface: RetryConfig

Defined in: [network/network.config.ts:67](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L67)

First-class retry / backoff policy for `RpcService`.

Sane defaults are provided by [DEFAULT\_RETRY\_CONFIG](../variables/DEFAULT_RETRY_CONFIG.md); a consumer only
overrides what it needs. The `classifyError` predicate is what decides
whether a given failure is retryable (and whether it needs a sequence
refresh), which keeps the retry loop unaware of Soroban-specific error shapes.

## Properties

### baseDelayMs?

> `optional` **baseDelayMs?**: `number`

Defined in: [network/network.config.ts:71](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L71)

Initial backoff in ms; doubles each attempt (default: 300).

***

### classifyError?

> `optional` **classifyError?**: (`error`) => [`RetryDecision`](RetryDecision.md)

Defined in: [network/network.config.ts:85](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L85)

Classifies an error into a [RetryDecision](RetryDecision.md). Defaults to
[classifySorobanRpcError](../functions/classifySorobanRpcError.md), which understands Soroban RPC failures.

#### Parameters

##### error

`unknown`

#### Returns

[`RetryDecision`](RetryDecision.md)

***

### jitter?

> `optional` **jitter?**: [`RetryJitter`](../type-aliases/RetryJitter.md)

Defined in: [network/network.config.ts:80](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L80)

Jitter applied to the capped backoff:
- `'full'`  delay = random(0, cap)               (default, see "full jitter")
- `'equal'` delay = cap/2 + random(0, cap/2)
- `number` j in [0,1] delay = cap*(1-j) + cap*j*random()

***

### maxAttempts?

> `optional` **maxAttempts?**: `number`

Defined in: [network/network.config.ts:69](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L69)

Maximum attempts including the initial one (default: 3).

***

### maxDelayMs?

> `optional` **maxDelayMs?**: `number`

Defined in: [network/network.config.ts:73](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L73)

Upper bound for a single backoff delay in ms (default: 8000).

***

### onRetry?

> `optional` **onRetry?**: (`info`) => `void`

Defined in: [network/network.config.ts:87](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L87)

Invoked before each retry sleep (e.g. for logging).

#### Parameters

##### info

[`RetryAttemptInfo`](RetryAttemptInfo.md)

#### Returns

`void`
