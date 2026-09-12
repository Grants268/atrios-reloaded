[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index.write](../README.md) / ContractService

# Class: ContractService

Defined in: [contract/contract.service.ts:83](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L83)

## Constructors

### Constructor

> **new ContractService**(`rpc`, `horizon`, `networkConfig`, `wallet?`, `contractId?`): `ContractService`

Defined in: [contract/contract.service.ts:87](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L87)

#### Parameters

##### rpc

[`RpcService`](../../index/classes/RpcService.md)

##### horizon

[`HorizonService`](../../index/classes/HorizonService.md)

##### networkConfig

[`NetworkConfig`](../../index/interfaces/NetworkConfig.md)

##### wallet?

[`WalletAdapter`](../../index/classes/WalletAdapter.md)

##### contractId?

`string`

#### Returns

`ContractService`

## Methods

### batchBuyTickets()

> **batchBuyTickets**(`raffleId`, `count`, `options?`): `Promise`\<[`TxResponse`](../../index/type-aliases/TxResponse.md)\<`number`[]\>\>

Defined in: [contract/contract.service.ts:332](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L332)

#### Parameters

##### raffleId

`number`

##### count

`number`

##### options?

[`InvokeOptions`](../interfaces/InvokeOptions.md) = `{}`

#### Returns

`Promise`\<[`TxResponse`](../../index/type-aliases/TxResponse.md)\<`number`[]\>\>

***

### buildUnsigned()

> **buildUnsigned**\<`T`\>(`method`, `params`, `sourcePublicKey`, `feeOverride?`): `Promise`\<[`UnsignedTxResult`](../interfaces/UnsignedTxResult.md)\<`T`\>\>

Defined in: [contract/contract.service.ts:289](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L289)

Builds a fully-prepared (simulated + auth-populated) unsigned transaction XDR.

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### method

`string`

##### params

`any`[]

##### sourcePublicKey

`string`

##### feeOverride?

`number`

#### Returns

`Promise`\<[`UnsignedTxResult`](../interfaces/UnsignedTxResult.md)\<`T`\>\>

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [contract/contract.service.ts:118](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L118)

Returns the public key of the currently connected wallet.

#### Returns

`Promise`\<`string`\>

#### Throws

TikkaSdkError(WalletNotConnected) if no wallet is connected

***

### invoke()

> **invoke**\<`T`\>(`method`, `params`, `options?`): `Promise`\<[`TxResponse`](../../index/type-aliases/TxResponse.md)\<`T`\>\>

Defined in: [contract/contract.service.ts:240](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L240)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### method

`string`

##### params

`any`[]

##### options?

[`InvokeOptions`](../interfaces/InvokeOptions.md) = `{}`

#### Returns

`Promise`\<[`TxResponse`](../../index/type-aliases/TxResponse.md)\<`T`\>\>

***

### poll()

> **poll**\<`T`\>(`txHash`, `config?`): `Promise`\<[`SubmitResult`](../../index/interfaces/SubmitResult.md)\<`T`\>\>

Defined in: [contract/contract.service.ts:169](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L169)

Phase 4 — Poll for transaction confirmation.
Returns the on-chain return value, tx hash, and ledger.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### txHash

`string`

##### config?

[`PollConfig`](../../index/interfaces/PollConfig.md)

#### Returns

`Promise`\<[`SubmitResult`](../../index/interfaces/SubmitResult.md)\<`T`\>\>

***

### setContractId()

> **setContractId**(`id`): `void`

Defined in: [contract/contract.service.ts:104](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L104)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### setWallet()

> **setWallet**(`adapter`): `void`

Defined in: [contract/contract.service.ts:109](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L109)

#### Parameters

##### adapter

[`WalletAdapter`](../../index/classes/WalletAdapter.md)

#### Returns

`void`

***

### sign()

> **sign**(`assembledXdr`, `networkPassphrase?`): `Promise`\<`string`\>

Defined in: [contract/contract.service.ts:150](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L150)

Phase 2 — Sign an assembled transaction XDR via the connected wallet.
Returns the signed XDR string.

#### Parameters

##### assembledXdr

`string`

##### networkPassphrase?

`string`

#### Returns

`Promise`\<`string`\>

***

### simulate()

> **simulate**\<`T`\>(`method`, `params`, `options?`): `Promise`\<[`SimulateResult`](../../index/interfaces/SimulateResult.md)\<`T`\>\>

Defined in: [contract/contract.service.ts:135](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L135)

Phase 1 — Build and simulate a transaction.
Returns the assembled XDR, decoded return value, fee, and network passphrase.
Safe to call without a wallet (uses anonymous fallback key).

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### method

`string`

##### params

`any`[]

##### options?

`Pick`\<[`InvokeLifecycleOptions`](../../index/interfaces/InvokeLifecycleOptions.md), `"sourcePublicKey"` \| `"fee"` \| `"memo"`\> = `{}`

#### Returns

`Promise`\<[`SimulateResult`](../../index/interfaces/SimulateResult.md)\<`T`\>\>

***

### simulateReadOnly()

> **simulateReadOnly**\<`T`\>(`method`, `params`): `Promise`\<[`TxResponse`](../../index/type-aliases/TxResponse.md)\<`T`\>\>

Defined in: [contract/contract.service.ts:178](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L178)

#### Type Parameters

##### T

`T`

#### Parameters

##### method

`string`

##### params

`any`[]

#### Returns

`Promise`\<[`TxResponse`](../../index/type-aliases/TxResponse.md)\<`T`\>\>

***

### submit()

> **submit**(`signedXdr`): `Promise`\<`string`\>

Defined in: [contract/contract.service.ts:161](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L161)

Phase 3 — Submit a signed transaction XDR to the network.
Returns the transaction hash.

#### Parameters

##### signedXdr

`string`

#### Returns

`Promise`\<`string`\>

***

### submitSigned()

> **submitSigned**\<`T`\>(`signedXdr`): `Promise`\<[`TxResponse`](../../index/type-aliases/TxResponse.md)\<`T`\>\>

Defined in: [contract/contract.service.ts:317](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L317)

Submits a signed transaction XDR that was previously built with buildUnsigned().

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### signedXdr

`string`

#### Returns

`Promise`\<[`TxResponse`](../../index/type-aliases/TxResponse.md)\<`T`\>\>
