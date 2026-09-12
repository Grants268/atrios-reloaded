[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / validateNetworkConfig

# Function: validateNetworkConfig()

> **validateNetworkConfig**(`config`): [`NetworkConfig`](../interfaces/NetworkConfig.md)

Defined in: [network/network.config.ts:345](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L345)

Validate a fully-resolved network config (issue #1096).

Runs at construction rather than at first request. A malformed RPC URL
previously surfaced as a fetch failure on the first call — far from the line
that actually caused it, and indistinguishable from the endpoint being down.

Every failure names the offending field, so the message points at the fix.

## Parameters

### config

[`NetworkConfig`](../interfaces/NetworkConfig.md)

## Returns

[`NetworkConfig`](../interfaces/NetworkConfig.md)

## Throws
