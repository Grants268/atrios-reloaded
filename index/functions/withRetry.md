[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / withRetry

# Function: withRetry()

> **withRetry**\<`T`\>(`fn`, `config?`): `Promise`\<`T`\>

Defined in: [utils/retry.ts:58](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/retry.ts#L58)

Executes an async function with exponential backoff and jitter, retrying only
when the configured [RetryConfig.classifyError](../interfaces/RetryConfig.md#classifyerror) predicate allows it.

The default policy ([DEFAULT\_RETRY\_CONFIG](../variables/DEFAULT_RETRY_CONFIG.md)) retries Soroban RPC
transient failures (TRY_AGAIN_LATER, 5xx, rate limits, transport errors) and
treats malformed XDR / contract failures as fatal.

When retries are exhausted (or the error is non-retryable), the last error is
re-thrown with its [RetryDecision](../interfaces/RetryDecision.md) attached via [getRetryDecision](getRetryDecision.md).

## Type Parameters

### T

`T`

## Parameters

### fn

() => `Promise`\<`T`\>

Async operation to attempt.

### config?

[`RetryConfig`](../interfaces/RetryConfig.md) = `DEFAULT_RETRY_CONFIG`

Retry / backoff policy. Defaults to [DEFAULT\_RETRY\_CONFIG](../variables/DEFAULT_RETRY_CONFIG.md).

## Returns

`Promise`\<`T`\>
