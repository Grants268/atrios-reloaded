[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / TikkaLogger

# Interface: TikkaLogger

Defined in: [utils/logger.ts:6](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L6)

Minimal logger interface for SDK consumers.
Provides debug/info/warn/error methods that can be routed to pino, winston,
or any other logging system. Default implementation is a no-op.

## Methods

### debug()

> **debug**(`message`, ...`args`): `void`

Defined in: [utils/logger.ts:7](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L7)

#### Parameters

##### message

`string`

##### args

...`any`[]

#### Returns

`void`

***

### error()

> **error**(`message`, ...`args`): `void`

Defined in: [utils/logger.ts:10](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L10)

#### Parameters

##### message

`string`

##### args

...`any`[]

#### Returns

`void`

***

### info()

> **info**(`message`, ...`args`): `void`

Defined in: [utils/logger.ts:8](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L8)

#### Parameters

##### message

`string`

##### args

...`any`[]

#### Returns

`void`

***

### warn()

> **warn**(`message`, ...`args`): `void`

Defined in: [utils/logger.ts:9](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/logger.ts#L9)

#### Parameters

##### message

`string`

##### args

...`any`[]

#### Returns

`void`
