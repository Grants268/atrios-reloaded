[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / validateBuyTicketInputs

# Function: validateBuyTicketInputs()

> **validateBuyTicketInputs**(`params`): `void`

Defined in: [modules/ticket/purchase-validation.ts:114](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/purchase-validation.ts#L114)

Module-boundary validation for a single `buy` purchase.
Must run before any simulate/invoke so invalid inputs never build transactions.

## Parameters

### params

#### quantity

`number`

#### raffleId

`number`

## Returns

`void`
