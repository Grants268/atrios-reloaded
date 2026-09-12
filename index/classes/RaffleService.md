[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RaffleService

# Class: RaffleService

Defined in: [modules/raffle/raffle.service.ts:53](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L53)

RaffleService — high-level API for raffle lifecycle operations.

Write methods (create, cancel) require a WalletAdapter to be set on the
ContractService. Read methods (get, listActive, listAll) are free (simulate).

## Constructors

### Constructor

> **new RaffleService**(`contract`, `feeEstimator`): `RaffleService`

Defined in: [modules/raffle/raffle.service.ts:54](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L54)

#### Parameters

##### contract

[`ContractService`](../../index.write/classes/ContractService.md)

##### feeEstimator

[`FeeEstimatorService`](FeeEstimatorService.md)

#### Returns

`RaffleService`

## Methods

### buildCreateContractParams()

> **buildCreateContractParams**(`params`): `any`[]

Defined in: [modules/raffle/raffle.service.ts:277](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L277)

Builds the `create_raffle` contract parameters for the given raffle.

Public so frontend progress-emission pipelines can reuse the exact scVal
shape instead of hand-rolling a private copy. Accepts the same `RaffleParams`
as [create](#create) / [estimateCreate](#estimatecreate) (endTime in ms).

#### Parameters

##### params

[`RaffleParams`](../interfaces/RaffleParams.md)

#### Returns

`any`[]

***

### cancel()

> **cancel**(`params`): `Promise`\<[`TxResponse`](../type-aliases/TxResponse.md)\<`void`\>\>

Defined in: [modules/raffle/raffle.service.ts:181](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L181)

Cancels an OPEN raffle (must be the raffle creator).
Throws `RaffleStateError` if the raffle is not in the Open state.

#### Parameters

##### params

[`CancelRaffleParams`](../interfaces/CancelRaffleParams.md)

#### Returns

`Promise`\<[`TxResponse`](../type-aliases/TxResponse.md)\<`void`\>\>

***

### create()

> **create**(`params`): `Promise`\<`RaffleTxResponse`\<`number`\>\>

Defined in: [modules/raffle/raffle.service.ts:86](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L86)

Creates a new raffle on-chain.

`params.asset` accepts either a plain code string ("XLM") for backwards
compatibility, or a structured `{ code, issuer? }` descriptor for non-native
SEP-41 tokens such as USDC or yXLM.

#### Parameters

##### params

[`RaffleParams`](../interfaces/RaffleParams.md)

#### Returns

`Promise`\<`RaffleTxResponse`\<`number`\>\>

The on-chain raffle ID, transaction hash, and ledger.

***

### estimateCreate()

> **estimateCreate**(`params`): `Promise`\<[`CreateRaffleEstimate`](../interfaces/CreateRaffleEstimate.md)\>

Defined in: [modules/raffle/raffle.service.ts:67](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L67)

Pre-confirmation fee preview for raffle creation.
Simulates the transaction via [FeeEstimatorService](FeeEstimatorService.md) without submitting.

#### Parameters

##### params

[`RaffleParams`](../interfaces/RaffleParams.md)

#### Returns

`Promise`\<[`CreateRaffleEstimate`](../interfaces/CreateRaffleEstimate.md)\>

***

### get()

> **get**(`raffleId`): `Promise`\<`RaffleTxResponse`\<`any`\>\>

Defined in: [modules/raffle/raffle.service.ts:129](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L129)

Fetches on-chain data for a single raffle (read-only).

#### Parameters

##### raffleId

`number`

#### Returns

`Promise`\<`RaffleTxResponse`\<`any`\>\>

***

### getWinner()

> **getWinner**(`raffleId`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`WinnerResult`](../interfaces/WinnerResult.md) \| `null`\>\>

Defined in: [modules/raffle/raffle.service.ts:242](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L242)

Reads the winner of a finalized raffle (read-only).
Returns `undefined` fields when the raffle has not yet been finalized.

Source of truth: contract RPC (`get_raffle_data`).

#### Parameters

##### raffleId

`number`

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`WinnerResult`](../interfaces/WinnerResult.md) \| `null`\>\>

***

### listActive()

> **listActive**(): `Promise`\<`RaffleTxResponse`\<`number`[]\>\>

Defined in: [modules/raffle/raffle.service.ts:152](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L152)

Returns IDs of all currently active (OPEN) raffles.

#### Returns

`Promise`\<`RaffleTxResponse`\<`number`[]\>\>

***

### listAll()

> **listAll**(): `Promise`\<`RaffleTxResponse`\<`number`[]\>\>

Defined in: [modules/raffle/raffle.service.ts:166](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L166)

Returns IDs of all raffles (any state).

#### Returns

`Promise`\<`RaffleTxResponse`\<`number`[]\>\>

***

### triggerDraw()

> **triggerDraw**(`params`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`TriggerDrawResult`](../interfaces/TriggerDrawResult.md)\>\>

Defined in: [modules/raffle/raffle.service.ts:211](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.service.ts#L211)

Initiates the randomness request for a raffle that has reached its
end time or sold out. Transitions the raffle from `Open` → `Drawing`.

Requires the caller to be authorised (oracle or protocol admin).
Throws `RaffleStateError` if the raffle is not currently Open.

#### Parameters

##### params

[`TriggerDrawParams`](../interfaces/TriggerDrawParams.md)

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<[`TriggerDrawResult`](../interfaces/TriggerDrawResult.md)\>\>
