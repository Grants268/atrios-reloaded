[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / resolveNetworkConfig

# Function: resolveNetworkConfig()

> **resolveNetworkConfig**(`networkOrConfig`): [`NetworkConfig`](../interfaces/NetworkConfig.md)

Defined in: [network/network.config.ts:409](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L409)

Resolves a NetworkConfig by name, or accepts a custom override.

The result is validated before it is returned (issue #1096), so an invalid
config fails here rather than on the first request.

## Parameters

### networkOrConfig

[`NetworkConfig`](../interfaces/NetworkConfig.md) \| [`TikkaNetwork`](../type-aliases/TikkaNetwork.md) \| `Partial`\<[`NetworkConfig`](../interfaces/NetworkConfig.md)\> & `object`

## Returns

[`NetworkConfig`](../interfaces/NetworkConfig.md)

## Throws
