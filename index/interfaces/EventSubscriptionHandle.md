[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / EventSubscriptionHandle

# Interface: EventSubscriptionHandle

Defined in: [network/event-subscription.ts:34](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/event-subscription.ts#L34)

## Methods

### getLastProcessedEventId()

> **getLastProcessedEventId**(): `string` \| `undefined`

Defined in: [network/event-subscription.ts:39](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/event-subscription.ts#L39)

Id of the last event delivered to `onEvent`.

#### Returns

`string` \| `undefined`

***

### getResumeCursor()

> **getResumeCursor**(): `string`

Defined in: [network/event-subscription.ts:37](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/event-subscription.ts#L37)

Cursor that will be used on the next getEvents call.

#### Returns

`string`

***

### stop()

> **stop**(): `void`

Defined in: [network/event-subscription.ts:35](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/event-subscription.ts#L35)

#### Returns

`void`

## Properties

### done

> **done**: `Promise`\<`void`\>

Defined in: [network/event-subscription.ts:41](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/event-subscription.ts#L41)

Resolves when the poll loop exits after `stop()`.
