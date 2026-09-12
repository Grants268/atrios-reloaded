[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / DEFAULT\_RETRY\_CONFIG

# Variable: DEFAULT\_RETRY\_CONFIG

> `const` **DEFAULT\_RETRY\_CONFIG**: [`RetryConfig`](../interfaces/RetryConfig.md)

Defined in: [network/network.config.ts:99](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L99)

Default retry policy. Classifies Soroban RPC failures so that TRY_AGAIN_LATER
and 5xx are retried, TX_BAD_SEQ is retried after a sequence refresh, and
malformed XDR is treated as fatal.
