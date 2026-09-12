[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / BuyTicketResult

# Interface: BuyTicketResult

Defined in: [modules/ticket/ticket.types.ts:48](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L48)

Result of a ticket purchase.
Provides transaction confirmation and purchased ticket IDs.

## Properties

### feePaid

> **feePaid**: `string`

Defined in: [modules/ticket/ticket.types.ts:56](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L56)

Transaction fee paid in stroops

***

### ledger

> **ledger**: `number`

Defined in: [modules/ticket/ticket.types.ts:54](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L54)

Ledger number where transaction was confirmed

***

### ticketIds

> **ticketIds**: `number`[]

Defined in: [modules/ticket/ticket.types.ts:50](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L50)

Array of successfully purchased ticket IDs

***

### transactionHash

> **transactionHash**: `string`

Defined in: [modules/ticket/ticket.types.ts:52](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L52)

Transaction hash for confirmation
