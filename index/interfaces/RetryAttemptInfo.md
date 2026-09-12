[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RetryAttemptInfo

# Interface: RetryAttemptInfo

Defined in: [network/network.config.ts:49](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L49)

Detail passed to [RetryConfig.onRetry](RetryConfig.md#onretry) before each wait.

## Properties

### attempt

> **attempt**: `number`

Defined in: [network/network.config.ts:51](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L51)

1-based index of the attempt that just failed.

***

### decision

> **decision**: [`RetryDecision`](RetryDecision.md)

Defined in: [network/network.config.ts:56](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L56)

Classification of the failure that triggered this retry.

***

### delayMs

> **delayMs**: `number`

Defined in: [network/network.config.ts:54](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L54)

Milliseconds the loop will sleep before the next attempt.

***

### error

> **error**: `unknown`

Defined in: [network/network.config.ts:52](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L52)
