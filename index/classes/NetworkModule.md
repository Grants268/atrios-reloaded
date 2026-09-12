[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / NetworkModule

# Class: NetworkModule

Defined in: [network/network.module.ts:13](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.module.ts#L13)

## Constructors

### Constructor

> **new NetworkModule**(): `NetworkModule`

#### Returns

`NetworkModule`

## Methods

### forRoot()

> `static` **forRoot**(`networkOrConfig`, `rpcConfig?`): `DynamicModule`

Defined in: [network/network.module.ts:14](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.module.ts#L14)

#### Parameters

##### networkOrConfig

[`NetworkConfig`](../interfaces/NetworkConfig.md) \| [`TikkaNetwork`](../type-aliases/TikkaNetwork.md) \| `Partial`\<[`NetworkConfig`](../interfaces/NetworkConfig.md)\> & `object`

##### rpcConfig?

[`RpcConfig`](../interfaces/RpcConfig.md)

#### Returns

`DynamicModule`
