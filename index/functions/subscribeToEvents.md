[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / subscribeToEvents

# Function: subscribeToEvents()

> **subscribeToEvents**(`options`): [`EventSubscriptionHandle`](../interfaces/EventSubscriptionHandle.md)

Defined in: [network/event-subscription.ts:94](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/event-subscription.ts#L94)

Polls Soroban contract events with automatic reconnect (exponential backoff)
and resume from the last processed cursor/event id.

## Parameters

### options

[`EventSubscriptionOptions`](../interfaces/EventSubscriptionOptions.md)

## Returns

[`EventSubscriptionHandle`](../interfaces/EventSubscriptionHandle.md)
