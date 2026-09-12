[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / NoOpLogger

# Class: NoOpLogger

Defined in: [utils/logger.ts:17](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L17)

No-op logger that silences all output.
Used as the default when consumers don't provide their own logger.

## Implements

- [`TikkaLogger`](../interfaces/TikkaLogger.md)

## Constructors

### Constructor

> **new NoOpLogger**(): `NoOpLogger`

#### Returns

`NoOpLogger`

## Methods

### debug()

> **debug**(): `void`

Defined in: [utils/logger.ts:18](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L18)

#### Returns

`void`

#### Implementation of

[`TikkaLogger`](../interfaces/TikkaLogger.md).[`debug`](../interfaces/TikkaLogger.md#debug)

***

### error()

> **error**(): `void`

Defined in: [utils/logger.ts:21](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L21)

#### Returns

`void`

#### Implementation of

[`TikkaLogger`](../interfaces/TikkaLogger.md).[`error`](../interfaces/TikkaLogger.md#error)

***

### info()

> **info**(): `void`

Defined in: [utils/logger.ts:19](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L19)

#### Returns

`void`

#### Implementation of

[`TikkaLogger`](../interfaces/TikkaLogger.md).[`info`](../interfaces/TikkaLogger.md#info)

***

### warn()

> **warn**(): `void`

Defined in: [utils/logger.ts:20](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L20)

#### Returns

`void`

#### Implementation of

[`TikkaLogger`](../interfaces/TikkaLogger.md).[`warn`](../interfaces/TikkaLogger.md#warn)
