[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / ConsoleLogger

# Class: ConsoleLogger

Defined in: [utils/logger.ts:28](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L28)

Console-based logger that writes to stdout/stderr.
Useful for development and debugging.

## Implements

- [`TikkaLogger`](../interfaces/TikkaLogger.md)

## Constructors

### Constructor

> **new ConsoleLogger**(): `ConsoleLogger`

#### Returns

`ConsoleLogger`

## Methods

### debug()

> **debug**(`message`, ...`args`): `void`

Defined in: [utils/logger.ts:29](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L29)

#### Parameters

##### message

`string`

##### args

...`any`[]

#### Returns

`void`

#### Implementation of

[`TikkaLogger`](../interfaces/TikkaLogger.md).[`debug`](../interfaces/TikkaLogger.md#debug)

***

### error()

> **error**(`message`, ...`args`): `void`

Defined in: [utils/logger.ts:41](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L41)

#### Parameters

##### message

`string`

##### args

...`any`[]

#### Returns

`void`

#### Implementation of

[`TikkaLogger`](../interfaces/TikkaLogger.md).[`error`](../interfaces/TikkaLogger.md#error)

***

### info()

> **info**(`message`, ...`args`): `void`

Defined in: [utils/logger.ts:33](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L33)

#### Parameters

##### message

`string`

##### args

...`any`[]

#### Returns

`void`

#### Implementation of

[`TikkaLogger`](../interfaces/TikkaLogger.md).[`info`](../interfaces/TikkaLogger.md#info)

***

### warn()

> **warn**(`message`, ...`args`): `void`

Defined in: [utils/logger.ts:37](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L37)

#### Parameters

##### message

`string`

##### args

...`any`[]

#### Returns

`void`

#### Implementation of

[`TikkaLogger`](../interfaces/TikkaLogger.md).[`warn`](../interfaces/TikkaLogger.md#warn)
