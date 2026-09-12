[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / subscribeToContractEvents

# Function: subscribeToContractEvents()

> **subscribeToContractEvents**(`server`, `options`): [`EventSubscriptionHandle`](../interfaces/EventSubscriptionHandle.md)

Defined in: [network/event-subscription.ts:180](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/event-subscription.ts#L180)

Convenience wrapper around rpc.Server.getEvents.

## Parameters

### server

`RpcServer`

### options

`Omit`\<[`EventSubscriptionOptions`](../interfaces/EventSubscriptionOptions.md), `"getEvents"`\>

## Returns

[`EventSubscriptionHandle`](../interfaces/EventSubscriptionHandle.md)
