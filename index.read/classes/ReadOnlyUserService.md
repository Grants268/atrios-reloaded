[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index.read](../README.md) / ReadOnlyUserService

# Class: ReadOnlyUserService

Defined in: [modules/user/user.read.service.ts:25](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.read.service.ts#L25)

Read-only user queries — no wallet or signing dependencies required.
Suitable for public dashboards and SSR pages.

## Constructors

### Constructor

> **new ReadOnlyUserService**(`rpcService`, `networkConfig`): `ReadOnlyUserService`

Defined in: [modules/user/user.read.service.ts:28](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.read.service.ts#L28)

#### Parameters

##### rpcService

[`RpcService`](../../index/classes/RpcService.md)

##### networkConfig

[`NetworkConfig`](../../index/interfaces/NetworkConfig.md)

#### Returns

`ReadOnlyUserService`

## Methods

### getHistory()

> **getHistory**(`address`): `Promise`\<[`ContractResponse`](../interfaces/ContractResponse.md)\<`number`[]\>\>

Defined in: [modules/user/user.read.service.ts:64](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.read.service.ts#L64)

Fetch the list of raffle IDs a user has participated in.
Alias for participation raffle IDs, suitable for building history views.

#### Parameters

##### address

`string`

#### Returns

`Promise`\<[`ContractResponse`](../interfaces/ContractResponse.md)\<`number`[]\>\>

***

### getProfile()

> **getProfile**(`address`): `Promise`\<[`ContractResponse`](../interfaces/ContractResponse.md)\<[`UserParticipation`](../../index/interfaces/UserParticipation.md)\>\>

Defined in: [modules/user/user.read.service.ts:39](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.read.service.ts#L39)

Fetch on-chain participation profile for a user address.
Alias for `getParticipation`.

#### Parameters

##### address

`string`

#### Returns

`Promise`\<[`ContractResponse`](../interfaces/ContractResponse.md)\<[`UserParticipation`](../../index/interfaces/UserParticipation.md)\>\>
