[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / AssetDescriptor

# Interface: AssetDescriptor

Defined in: [modules/raffle/raffle.types.ts:8](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L8)

Structured asset descriptor for ticket pricing.
Use `{ code: 'XLM' }` for native lumens, or provide `issuer` for SEP-41 tokens.

## Properties

### code

> **code**: `string`

Defined in: [modules/raffle/raffle.types.ts:10](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L10)

Asset code, e.g. "XLM", "USDC", "yXLM"

***

### issuer?

> `optional` **issuer?**: `string`

Defined in: [modules/raffle/raffle.types.ts:12](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L12)

Issuer account for non-native assets. Omit for XLM.
