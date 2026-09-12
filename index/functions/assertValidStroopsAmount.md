[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / assertValidStroopsAmount

# Function: assertValidStroopsAmount()

> **assertValidStroopsAmount**(`amount`, `fieldName?`): `void`

Defined in: [modules/ticket/purchase-validation.ts:85](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/purchase-validation.ts#L85)

Validates a price expressed in stroops (integer asset amount).
Rejects decimals / wrong asset precision, empty, negative, and non-numeric values.

## Parameters

### amount

`string`

### fieldName?

[`TicketPurchaseField`](../type-aliases/TicketPurchaseField.md) = `'maxPricePerTicket'`

## Returns

`void`
