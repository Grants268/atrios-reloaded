[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / getRetryDecision

# Function: getRetryDecision()

> **getRetryDecision**(`error`): [`RetryDecision`](../interfaces/RetryDecision.md) \| `undefined`

Defined in: [utils/retry.ts:17](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/retry.ts#L17)

Reads the [RetryDecision](../interfaces/RetryDecision.md) attached by `withRetry` to a previously thrown
error. Higher-level callers use this to detect e.g. a `refreshSequence`
failure and refresh the account sequence before re-submitting.

## Parameters

### error

`unknown`

## Returns

[`RetryDecision`](../interfaces/RetryDecision.md) \| `undefined`
