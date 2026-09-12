[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index.write](../README.md) / UnsignedTxResult

# Interface: UnsignedTxResult\<T\>

Defined in: [contract/contract.service.ts:56](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L56)

Result of buildUnsigned — everything needed for offline / cold-wallet signing.

Workflow:
  1. Call buildUnsigned() on an online machine → hand `unsignedXdr` to the signer
  2. Signer signs offline and returns `signedXdr`
  3. Call submitSigned(signedXdr) on the online machine to broadcast

## Type Parameters

### T

`T` = `any`

## Properties

### fee

> **fee**: `string`

Defined in: [contract/contract.service.ts:62](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L62)

Estimated fee in stroops

***

### networkPassphrase

> **networkPassphrase**: `string`

Defined in: [contract/contract.service.ts:64](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L64)

Network passphrase — must be passed to the signer so it signs the right network

***

### simulatedResult

> **simulatedResult**: [`TxResponse`](../../index/type-aliases/TxResponse.md)\<`T`\>

Defined in: [contract/contract.service.ts:60](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L60)

Simulated return value — lets the caller review the outcome before signing

***

### unsignedXdr

> **unsignedXdr**: `string`

Defined in: [contract/contract.service.ts:58](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/contract.service.ts#L58)

Base64-encoded unsigned (but fee-bumped & auth-populated) transaction XDR
