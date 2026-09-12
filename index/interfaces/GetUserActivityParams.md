[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / GetUserActivityParams

# Interface: GetUserActivityParams

Defined in: [modules/user/user.types.ts:114](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L114)

Parameters for fetching the aggregated user activity summary.

## Properties

### address

> **address**: `string`

Defined in: [modules/user/user.types.ts:115](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L115)

***

### includeIndexerData?

> `optional` **includeIndexerData?**: `boolean`

Defined in: [modules/user/user.types.ts:121](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L121)

When true, the SDK will also attempt to fetch indexer-backed data
(refunds, purchase timestamps). Requires `indexerUrl` to be configured.
Defaults to false.
