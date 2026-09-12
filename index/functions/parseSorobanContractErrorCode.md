[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / parseSorobanContractErrorCode

# Function: parseSorobanContractErrorCode()

> **parseSorobanContractErrorCode**(`raw`): `number` \| `undefined`

Defined in: [utils/errors.ts:289](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L289)

Extracts a numeric Soroban contract error code from a raw error string.
Recognizes the common formats surfaced by the Stellar RPC / SDK:
  - "Error(Contract, #35)"
  - "ScError::Contract(4)"
  - "contract error code 5"

## Parameters

### raw

`string` \| `null` \| `undefined`

## Returns

`number` \| `undefined`

the parsed code, or `undefined` if no recognizable pattern is found.
