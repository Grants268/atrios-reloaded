[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / TicketReadService

# Class: TicketReadService

Defined in: [modules/ticket/ticket.read.service.ts:14](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.read.service.ts#L14)

Read-only ticket queries — no wallet or signing dependencies required.
Suitable for public dashboards, SSR pages, and anywhere tickets need to be queried without a wallet.

## Constructors

### Constructor

> **new TicketReadService**(`contractService`): `TicketReadService`

Defined in: [modules/ticket/ticket.read.service.ts:15](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.read.service.ts#L15)

#### Parameters

##### contractService

[`ContractService`](../../index.write/classes/ContractService.md)

#### Returns

`TicketReadService`

## Methods

### getUserTicketCount()

> **getUserTicketCount**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`number`\>\>

Defined in: [modules/ticket/ticket.read.service.ts:50](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.read.service.ts#L50)

Gets the count of tickets owned by a user for a specific raffle.
Read-only operation (no signing required).

Convenience method that returns the count instead of the full ticket ID array.

#### Parameters

##### params

[`GetUserTicketsParams`](../interfaces/GetUserTicketsParams.md)

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`number`\>\>

#### Throws

TikkaSdkError if validation fails or query fails

***

### getUserTickets()

> **getUserTickets**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`number`[]\>\>

Defined in: [modules/ticket/ticket.read.service.ts:23](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.read.service.ts#L23)

Gets all ticket IDs owned by a user for a specific raffle.
Read-only operation (no signing required).

#### Parameters

##### params

[`GetUserTicketsParams`](../interfaces/GetUserTicketsParams.md)

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`number`[]\>\>

#### Throws

TikkaSdkError if validation fails or query fails
