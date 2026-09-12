[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / UnavailableError

# Class: UnavailableError

Defined in: [utils/errors.ts:140](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L140)

Thrown when the RPC node or transport is unavailable (502, 503, 504, or network issues).

## Extends

- [`TikkaSdkError`](TikkaSdkError.md)

## Constructors

### Constructor

> **new UnavailableError**(`message`, `cause?`): `UnavailableError`

Defined in: [utils/errors.ts:141](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L141)

#### Parameters

##### message

`string`

##### cause?

`unknown`

#### Returns

`UnavailableError`

#### Overrides

[`TikkaSdkError`](TikkaSdkError.md).[`constructor`](TikkaSdkError.md#constructor)

## Methods

### wrap()

> `static` **wrap**(`error`, `defaultCode?`): [`TikkaSdkError`](TikkaSdkError.md)

Defined in: [utils/errors.ts:107](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L107)

Static helper to wrap unknown errors into TikkaSdkError.
Useful in service-level catch blocks.

#### Parameters

##### error

`unknown`

##### defaultCode?

[`TikkaSdkErrorCode`](../enumerations/TikkaSdkErrorCode.md) = `TikkaSdkErrorCode.Unknown`

#### Returns

[`TikkaSdkError`](TikkaSdkError.md)

#### Inherited from

[`TikkaSdkError`](TikkaSdkError.md).[`wrap`](TikkaSdkError.md#wrap)

## Properties

### cause?

> `readonly` `optional` **cause?**: `unknown`

Defined in: [utils/errors.ts:95](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L95)

#### Inherited from

[`TikkaSdkError`](TikkaSdkError.md).[`cause`](TikkaSdkError.md#cause)

***

### code

> `readonly` **code**: [`TikkaSdkErrorCode`](../enumerations/TikkaSdkErrorCode.md)

Defined in: [utils/errors.ts:93](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L93)

#### Inherited from

[`TikkaSdkError`](TikkaSdkError.md).[`code`](TikkaSdkError.md#code)
