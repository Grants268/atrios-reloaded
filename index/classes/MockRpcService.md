[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / MockRpcService

# Class: MockRpcService

Defined in: [network/mock-rpc.service.ts:13](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/mock-rpc.service.ts#L13)

## Constructors

### Constructor

> **new MockRpcService**(): `MockRpcService`

#### Returns

`MockRpcService`

## Methods

### configure()

> **configure**(`behavior`): `void`

Defined in: [network/mock-rpc.service.ts:16](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/mock-rpc.service.ts#L16)

#### Parameters

##### behavior

[`MockRpcBehavior`](../interfaces/MockRpcBehavior.md)

#### Returns

`void`

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<`any`\>

Defined in: [network/mock-rpc.service.ts:39](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/mock-rpc.service.ts#L39)

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`any`\>

***

### sendTransaction()

> **sendTransaction**(`_tx`): `Promise`\<`any`\>

Defined in: [network/mock-rpc.service.ts:28](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/mock-rpc.service.ts#L28)

#### Parameters

##### \_tx

`any`

#### Returns

`Promise`\<`any`\>

***

### simulateTransaction()

> **simulateTransaction**(`_tx`): `Promise`\<`any`\>

Defined in: [network/mock-rpc.service.ts:20](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/mock-rpc.service.ts#L20)

#### Parameters

##### \_tx

`any`

#### Returns

`Promise`\<`any`\>
