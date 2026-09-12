[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / SimulateResult

# Interface: SimulateResult\<T\>

Defined in: [contract/lifecycle.ts:53](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L53)

Successful simulation result — everything needed to decide whether to sign.

## Type Parameters

### T

`T` = `unknown`

## Properties

### assembledXdr

> **assembledXdr**: `string`

Defined in: [contract/lifecycle.ts:59](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L59)

Assembled (fee-bumped + auth-populated) transaction XDR, ready to sign.

***

### minResourceFee

> **minResourceFee**: `string`

Defined in: [contract/lifecycle.ts:57](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L57)

Minimum resource fee in stroops, as a string.

***

### networkPassphrase

> **networkPassphrase**: `string`

Defined in: [contract/lifecycle.ts:61](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L61)

Network passphrase — must be passed to the wallet so it signs the right network.

***

### returnValue

> **returnValue**: `T` \| `null`

Defined in: [contract/lifecycle.ts:55](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L55)

Decoded return value of the simulated call (null for void functions).
