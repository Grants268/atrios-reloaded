[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / TicketService

# Class: TicketService

Defined in: [modules/ticket/ticket.service.ts:40](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.service.ts#L40)

TicketService — high-level API for ticket write operations.

All write methods (buy, buyTickets, buyBatch, refund, claimPrize) require a
WalletAdapter to be set on the ContractService.

For read operations (getUserTickets, getUserTicketCount), use TicketReadService.

## Constructors

### Constructor

> **new TicketService**(`contractService`, `readService`): `TicketService`

Defined in: [modules/ticket/ticket.service.ts:43](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.service.ts#L43)

#### Parameters

##### contractService

[`ContractService`](../../index.write/classes/ContractService.md)

##### readService

[`TicketReadService`](TicketReadService.md)

#### Returns

`TicketService`

## Methods

### buy()

> **buy**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`BuyTicketResult`](../interfaces/BuyTicketResult.md)\>\>

Defined in: [modules/ticket/ticket.service.ts:112](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.service.ts#L112)

Purchases tickets for a raffle.
Requires wallet signature and submission.

Validates the raffle is in OPEN state before simulating/submitting —
see issue #929.

Token transfer failures (e.g. malicious SEP-41 token rejecting the call)
are surfaced as `ExternalContractError` so callers can handle them
separately from generic network/contract errors.

#### Parameters

##### params

[`BuyTicketParams`](../interfaces/BuyTicketParams.md)

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`BuyTicketResult`](../interfaces/BuyTicketResult.md)\>\>

#### Throws

TikkaSdkError if validation fails, raffle is not OPEN, or submission is duplicate

***

### buyBatch()

> **buyBatch**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`BuyBatchResult`](../interfaces/BuyBatchResult.md)\>\>

Defined in: [modules/ticket/ticket.service.ts:352](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.service.ts#L352)

Purchases tickets for multiple raffles in a single operation.

This method handles batch ticket purchases with individual validation for each raffle.
Returns individual success/failure results for each purchase, allowing partial failures.

Constraints:
- Maximum 100 purchases per batch
- Each purchase quantity: 1-1000 tickets
- Follows same duplicate submission detection as single purchase

#### Parameters

##### params

[`BuyBatchParams`](../interfaces/BuyBatchParams.md)

Batch purchase parameters containing array of raffle purchases

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`BuyBatchResult`](../interfaces/BuyBatchResult.md)\>\>

Individual results for each raffle purchase attempt

#### Throws

If validation fails or all purchases fail

#### Example

```typescript
const result = await ticketService.buyBatch({
  purchases: [
    { raffleId: 1, quantity: 5 },
    { raffleId: 2, quantity: 3 },
  ],
  memo: { type: 'text', value: 'Batch purchase' }
});
```

***

### buyTickets()

> **buyTickets**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`BuyTicketResult`](../interfaces/BuyTicketResult.md)\>\>

Defined in: [modules/ticket/ticket.service.ts:177](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.service.ts#L177)

Purchases multiple tickets for a raffle in a single transaction.
Uses the batch purchase contract entry point.

Validates the raffle is in OPEN state before simulating/submitting —
see issue #929.

#### Parameters

##### params

[`BuyTicketsParams`](../interfaces/BuyTicketsParams.md)

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`BuyTicketResult`](../interfaces/BuyTicketResult.md)\>\>

#### Throws

TikkaSdkError if validation fails, raffle is not OPEN, or submission is duplicate

***

### claimPrize()

> **claimPrize**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`ClaimPrizeResult`](../interfaces/ClaimPrizeResult.md)\>\>

Defined in: [modules/ticket/ticket.service.ts:285](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.service.ts#L285)

Claims the prize for a finalized raffle.
Requires wallet signature and submission.

#### Parameters

##### params

[`ClaimPrizeParams`](../interfaces/ClaimPrizeParams.md)

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`ClaimPrizeResult`](../interfaces/ClaimPrizeResult.md)\>\>

#### Throws

TikkaSdkError if validation fails or prize claim fails

***

### ~~getUserTickets()~~

> **getUserTickets**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`number`[]\>\>

Defined in: [modules/ticket/ticket.service.ts:319](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.service.ts#L319)

Gets all ticket IDs owned by a user for a specific raffle.
Read-only operation (no signing required).

#### Parameters

##### params

[`GetUserTicketsParams`](../interfaces/GetUserTicketsParams.md)

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`number`[]\>\>

#### Deprecated

Use TicketReadService.getUserTickets() for read-only operations.
This method delegates to the read service for backward compatibility.

#### Throws

TikkaSdkError if validation fails or query fails

***

### refund()

> **refund**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`RefundTicketResult`](../interfaces/RefundTicketResult.md)\>\>

Defined in: [modules/ticket/ticket.service.ts:238](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/ticket/ticket.service.ts#L238)

Refunds a ticket (when raffle is cancelled).
Requires wallet signature and submission.

Token transfer failures during refund are surfaced as `ExternalContractError`.

#### Parameters

##### params

[`RefundTicketParams`](../interfaces/RefundTicketParams.md)

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`RefundTicketResult`](../interfaces/RefundTicketResult.md)\>\>

#### Throws

TikkaSdkError if validation fails or refund fails
