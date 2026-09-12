[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / assertValidTicketQuantity

# Function: assertValidTicketQuantity()

> **assertValidTicketQuantity**(`quantity`, `fieldName?`): `void`

Defined in: [modules/ticket/purchase-validation.ts:51](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/purchase-validation.ts#L51)

Validates ticket quantity / count against module constraints.
Covers 0, negative, non-integer, and max boundary.

## Parameters

### quantity

`number`

### fieldName?

`"quantity"` \| `"count"`

## Returns

`void`
