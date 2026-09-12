[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / PollConfig

# Interface: PollConfig

Defined in: [contract/lifecycle.ts:77](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L77)

Configures the polling loop that waits for transaction confirmation.

## Properties

### backoffFactor?

> `optional` **backoffFactor?**: `number`

Defined in: [contract/lifecycle.ts:93](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L93)

Exponential backoff factor applied to `intervalMs` after each retry.
1.0 = no backoff (constant interval). 1.5 = 50% longer each time.

#### Default

```ts
1.5
```

***

### intervalMs?

> `optional` **intervalMs?**: `number`

Defined in: [contract/lifecycle.ts:87](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L87)

Initial interval (ms) between poll attempts.

#### Default

```ts
2_000
```

***

### maxIntervalMs?

> `optional` **maxIntervalMs?**: `number`

Defined in: [contract/lifecycle.ts:98](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L98)

Maximum interval (ms) between poll attempts — caps the backoff growth.

#### Default

```ts
10_000
```

***

### timeoutMs?

> `optional` **timeoutMs?**: `number`

Defined in: [contract/lifecycle.ts:82](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/contract/lifecycle.ts#L82)

Maximum time (ms) to wait for the transaction to leave NOT_FOUND status.

#### Default

```ts
60_000
```
