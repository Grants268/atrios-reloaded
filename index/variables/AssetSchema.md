[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / AssetSchema

# Variable: AssetSchema

> `const` **AssetSchema**: `ZodObject`\<\{ `code`: `ZodString`; `issuer`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>

Defined in: [schemas/raffle-metadata.schema.ts:31](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/schemas/raffle-metadata.schema.ts#L31)

Structured asset descriptor for ticket pricing.
Note: Asset validation (isAllowedTicketAsset) is environment-specific
and should be applied at the application layer, not in this shared schema.
