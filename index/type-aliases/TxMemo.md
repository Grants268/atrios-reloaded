[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / TxMemo

# Type Alias: TxMemo

> **TxMemo** = \{ `type`: `"text"`; `value`: `string`; \} \| \{ `type`: `"id"`; `value`: `string`; \} \| \{ `type`: `"hash"`; `value`: `Buffer`; \}

Defined in: [contract/lifecycle.ts:47](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L47)

Transaction memo — attach tracking data or external references.
Mirrors the three Stellar memo types the protocol supports.
