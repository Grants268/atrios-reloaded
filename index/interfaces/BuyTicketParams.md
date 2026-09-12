[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / BuyTicketParams

# Interface: BuyTicketParams

Defined in: [modules/ticket/ticket.types.ts:16](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L16)

Parameters for purchasing tickets.
Quantity must be a positive integer between 1 and 1000.

## Properties

### memo?

> `optional` **memo?**: [`TxMemo`](../type-aliases/TxMemo.md)

Defined in: [modules/ticket/ticket.types.ts:25](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L25)

Optional transaction memo for tracking or external integrations.
Supports text (≤28 bytes), numeric id, or 32-byte hash.

***

### quantity

> **quantity**: `number`

Defined in: [modules/ticket/ticket.types.ts:20](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L20)

Number of tickets to purchase (1-1000)

***

### raffleId

> **raffleId**: `number`

Defined in: [modules/ticket/ticket.types.ts:18](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.types.ts#L18)

Raffle ID (must be positive integer)
