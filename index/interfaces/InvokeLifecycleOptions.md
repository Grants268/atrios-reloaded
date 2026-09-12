[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / InvokeLifecycleOptions

# Interface: InvokeLifecycleOptions

Defined in: [contract/lifecycle.ts:102](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L102)

Combined options for a full invoke (simulate + sign + submit + poll).

## Properties

### fee?

> `optional` **fee?**: `string`

Defined in: [contract/lifecycle.ts:106](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L106)

Override the transaction base fee (in stroops). Default: BASE_FEE.

***

### memo?

> `optional` **memo?**: [`TxMemo`](../type-aliases/TxMemo.md)

Defined in: [contract/lifecycle.ts:110](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L110)

Optional memo attached to the transaction envelope.

***

### poll?

> `optional` **poll?**: [`PollConfig`](PollConfig.md)

Defined in: [contract/lifecycle.ts:108](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L108)

Polling configuration.

***

### sourcePublicKey?

> `optional` **sourcePublicKey?**: `string`

Defined in: [contract/lifecycle.ts:104](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L104)

Override the source public key (defaults to wallet.getPublicKey()).
