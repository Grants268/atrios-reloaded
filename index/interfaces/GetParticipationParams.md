[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / GetParticipationParams

# Interface: GetParticipationParams

Defined in: [modules/user/user.types.ts:36](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L36)

Parameters for querying user participation statistics.

## Example

```ts
const params: GetParticipationParams = {
  address: userAddress
};
const result = await userService.getParticipation(params);
```

## Properties

### address

> **address**: `string`

Defined in: [modules/user/user.types.ts:38](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/user/user.types.ts#L38)

User's Stellar public key address to query
