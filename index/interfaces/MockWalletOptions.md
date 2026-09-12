[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / MockWalletOptions

# Interface: MockWalletOptions

Defined in: [wallet/mock-wallet.adapter.ts:24](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/wallet/mock-wallet.adapter.ts#L24)

Configuration options for the mock wallet adapter.

## Example

```ts
const adapter = new MockWalletAdapter({
  publicKey: 'GBJCHUKZMTFSLOMNC7P4TS4VJJBTCYL3OIDJGA4J34XIXDLMTJ5YVBQ',
  delayMs: 100,  // Simulate network latency
});
```

## Extends

- [`WalletAdapterOptions`](WalletAdapterOptions.md)

## Properties

### delayMs?

> `optional` **delayMs?**: `number`

Defined in: [wallet/mock-wallet.adapter.ts:26](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/wallet/mock-wallet.adapter.ts#L26)

Artificial delay in milliseconds to simulate network latency

***

### failGetPublicKey?

> `optional` **failGetPublicKey?**: `boolean`

Defined in: [wallet/mock-wallet.adapter.ts:30](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/wallet/mock-wallet.adapter.ts#L30)

If true, getPublicKey() will throw an error

***

### failSignMessage?

> `optional` **failSignMessage?**: `boolean`

Defined in: [wallet/mock-wallet.adapter.ts:34](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/wallet/mock-wallet.adapter.ts#L34)

If true, signMessage() will throw an error

***

### failSignTransaction?

> `optional` **failSignTransaction?**: `boolean`

Defined in: [wallet/mock-wallet.adapter.ts:32](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/wallet/mock-wallet.adapter.ts#L32)

If true, signTransaction() will throw an error

***

### networkPassphrase?

> `optional` **networkPassphrase?**: `string`

Defined in: [wallet/wallet.interface.ts:25](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/wallet/wallet.interface.ts#L25)

Stellar network passphrase (e.g. Networks.TESTNET)

#### Inherited from

[`WalletAdapterOptions`](WalletAdapterOptions.md).[`networkPassphrase`](WalletAdapterOptions.md#networkpassphrase)

***

### publicKey?

> `optional` **publicKey?**: `string`

Defined in: [wallet/mock-wallet.adapter.ts:28](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/wallet/mock-wallet.adapter.ts#L28)

Public key to return from getPublicKey()
