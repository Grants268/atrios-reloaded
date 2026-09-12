[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / classifySorobanRpcError

# Function: classifySorobanRpcError()

> **classifySorobanRpcError**(`error`): [`RetryDecision`](../interfaces/RetryDecision.md)

Defined in: [network/network.config.ts:125](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L125)

Classifies a Soroban RPC failure into a [RetryDecision](../interfaces/RetryDecision.md).

Covers both the full SDK (which throws typed [TikkaSdkError](../classes/TikkaSdkError.md) subclasses)
and the light SDK (which throws `TikkaSdkError` with a `code`), since both
embed the original RPC message/status, so the same logic applies to each.

Decision matrix:
| Failure                              | Decision                   |
|--------------------------------------|----------------------------|
| TRY_AGAIN_LATER (Soroban)            | retryable                 |
| 5xx / 429                            | retryable                 |
| Transport errors (ECONNRESET, etc.)  | retryable                 |
| TX_BAD_SEQ                           | retryable + refreshSequence|
| Malformed XDR                        | fatal                     |
| Contract / validation failures       | fatal                     |
| Other 4xx                            | fatal                     |

## Parameters

### error

`unknown`

## Returns

[`RetryDecision`](../interfaces/RetryDecision.md)
