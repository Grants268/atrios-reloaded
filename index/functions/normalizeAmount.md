[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / normalizeAmount

# Function: normalizeAmount()

> **normalizeAmount**(`amount`, `decimals?`): `string`

Defined in: [utils/formatting.ts:232](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/formatting.ts#L232)

Normalizes an amount to a fixed-decimal string without converting to stroops.
Useful for logging, display, or metadata.

## Parameters

### amount

`string` \| `number`

Amount string or safe integer.

### decimals?

`number` = `7`

Number of decimal places (default: 7 for XLM).

## Returns

`string`
