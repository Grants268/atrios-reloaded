[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RaffleMetadataSchema

# Variable: RaffleMetadataSchema

> `const` **RaffleMetadataSchema**: `ZodObject`\<\{ `asset`: `ZodOptional`\<`ZodObject`\<\{ `code`: `ZodString`; `issuer`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>\>; `category`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: `ZodOptional`\<`ZodString`\>; `image_url`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `image_urls`: `ZodOptional`\<`ZodNullable`\<`ZodArray`\<`ZodString`\>\>\>; `metadata_cid`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `title`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>

Defined in: [schemas/raffle-metadata.schema.ts:47](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/schemas/raffle-metadata.schema.ts#L47)

Shared raffle metadata schema.
Used by both client and backend for consistent validation.
