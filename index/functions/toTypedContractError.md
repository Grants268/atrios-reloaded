[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / toTypedContractError

# Function: toTypedContractError()

> **toTypedContractError**(`message`, `rawError`): [`TikkaSdkError`](../classes/TikkaSdkError.md) \| `null`

Defined in: [utils/errors.ts:315](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L315)

Attempts to convert a raw contract failure (message + raw error/XDR string)
into a typed SDK error based on the embedded Soroban contract error code.

## Parameters

### message

`string`

Human-readable message to attach to the typed error.

### rawError

`string`

Raw error string (e.g. simulation error or resultXdr) to parse.

## Returns

[`TikkaSdkError`](../classes/TikkaSdkError.md) \| `null`

a typed `TikkaSdkError` subclass instance, or `null` if the code
         is unrecognized (callers should fall back to a generic error).
