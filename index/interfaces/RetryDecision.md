[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RetryDecision

# Interface: RetryDecision

Defined in: [network/network.config.ts:31](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L31)

Outcome of running an error through the retry classifier.

## Properties

### message?

> `optional` **message?**: `string`

Defined in: [network/network.config.ts:42](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L42)

Optional human-readable note describing the classification.

***

### reason?

> `optional` **reason?**: [`RetryFailureClass`](../type-aliases/RetryFailureClass.md)

Defined in: [network/network.config.ts:40](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L40)

Classification used for logging / observability.

***

### refreshSequence?

> `optional` **refreshSequence?**: `boolean`

Defined in: [network/network.config.ts:38](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L38)

When true, the caller MUST refresh its account sequence number before the
next attempt. Only meaningful when `retry` is true.

***

### retry

> **retry**: `boolean`

Defined in: [network/network.config.ts:33](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L33)

Whether the operation may be retried at all.
