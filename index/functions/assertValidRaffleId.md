[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / assertValidRaffleId

# Function: assertValidRaffleId()

> **assertValidRaffleId**(`raffleId`, `fieldName?`): `void`

Defined in: [modules/ticket/purchase-validation.ts:32](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/purchase-validation.ts#L32)

Validates raffle id is a positive safe integer.
Rejects 0, negative, non-integer, NaN, and Infinity.

## Parameters

### raffleId

`number`

### fieldName?

[`TicketPurchaseField`](../type-aliases/TicketPurchaseField.md) = `'raffleId'`

## Returns

`void`
