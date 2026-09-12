[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / multiplyAmountByQuantity

# Function: multiplyAmountByQuantity()

> **multiplyAmountByQuantity**(`amount`, `quantity`, `decimals?`): `string`

Defined in: [utils/formatting.ts:91](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/formatting.ts#L91)

Multiplies an XLM/token amount by an integer quantity safely.

## Parameters

### amount

`string` \| `number`

Amount string (or safe integer). Decimal strings are required for fractional values.

### quantity

`number`

Positive safe integer multiplier.

### decimals?

`number` = `7`

Number of decimal places in the result (default: 7 for XLM).
                 Pass a higher value (e.g. 18) for tokens with higher precision.

## Returns

`string`

## Example

```ts
multiplyAmountByQuantity('1.5', 3)          // '4.5000000'  (XLM, 7 dp)
multiplyAmountByQuantity('1.5', 3, 18)       // '4.500000000000000000' (18 dp token)
```
