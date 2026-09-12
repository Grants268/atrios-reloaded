[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / WinningEntry

# Interface: WinningEntry

Defined in: [modules/user/user.types.ts:125](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L125)

A claimable prize entry returned by UserService.getWinnings.

## Properties

### claimed

> **claimed**: `boolean`

Defined in: [modules/user/user.types.ts:133](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L133)

Whether this prize has already been claimed on-chain.

***

### prizeAmount

> **prizeAmount**: `string`

Defined in: [modules/user/user.types.ts:129](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L129)

Prize amount as a string (e.g. "500").

***

### prizeAsset

> **prizeAsset**: `string`

Defined in: [modules/user/user.types.ts:131](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L131)

Asset symbol for the prize (e.g. "XLM").

***

### raffleId

> **raffleId**: `number`

Defined in: [modules/user/user.types.ts:127](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L127)

The raffle ID this prize belongs to.
