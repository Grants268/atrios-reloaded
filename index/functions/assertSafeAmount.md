[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / assertSafeAmount

# Function: assertSafeAmount()

> **assertSafeAmount**(`amount`, `name`, `maxDecimals?`): `void`

Defined in: [utils/formatting.ts:24](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/formatting.ts#L24)

Validates that the input amount is safe to prevent precision loss:
1. Must be passed as a string (or a safe integer number).
2. Floating-point numbers are strictly rejected to avoid inherent JS float precision loss.
3. Must be a valid positive/zero decimal.
4. Must not exceed the specified maximum decimal places (default 18).

## Parameters

### amount

`any`

### name

`string`

### maxDecimals?

`number` = `18`

## Returns

`void`
