[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / formatContractResponse

# Function: formatContractResponse()

> **formatContractResponse**(`value`, `decimals?`): `string`

Defined in: [utils/formatting.ts:178](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/formatting.ts#L178)

Formats a raw balance or ticket count for display.

Only accepts string values or **safe integers** — JS float numbers are
rejected because they may already be precision-corrupted before BigNumber
can process them (e.g. `0.1 + 0.2 === 0.30000000000000004`).

## Parameters

### value

`string` \| `number`

Raw value from the contract (string, or safe integer number).

### decimals?

`number` = `7`

Number of decimal places to show (default 7 for XLM).

## Returns

`string`
