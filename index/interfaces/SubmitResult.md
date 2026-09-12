[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / SubmitResult

# Interface: SubmitResult\<T\>

Defined in: [contract/lifecycle.ts:65](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L65)

Result returned after a transaction is confirmed on-chain.

## Type Parameters

### T

`T` = `unknown`

## Properties

### ledger

> **ledger**: `number`

Defined in: [contract/lifecycle.ts:71](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L71)

Ledger sequence in which the transaction was included.

***

### resultXdr?

> `optional` **resultXdr?**: `string`

Defined in: [contract/lifecycle.ts:73](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L73)

Base64-encoded transaction result XDR (safe to surface in responses).

***

### returnValue

> **returnValue**: `T` \| `null`

Defined in: [contract/lifecycle.ts:67](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L67)

Decoded on-chain return value (may differ from simulation if contract state changed).

***

### txHash

> **txHash**: `string`

Defined in: [contract/lifecycle.ts:69](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L69)

Transaction hash.
