[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / TikkaSdkError

# Class: TikkaSdkError

Defined in: [utils/errors.ts:91](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L91)

Structured SDK error (high-level, used across SDK)
Allows consumers to handle failures predictably.

## Extends

- `Error`

## Extended by

- [`InvalidTicketPurchaseError`](InvalidTicketPurchaseError.md)
- [`RpcTimeoutError`](RpcTimeoutError.md)
- [`RateLimitError`](RateLimitError.md)
- [`UnavailableError`](UnavailableError.md)
- [`InvalidResponseError`](InvalidResponseError.md)
- [`ContractFailureError`](ContractFailureError.md)
- [`NetworkError`](NetworkError.md)
- [`TransactionRejectedError`](TransactionRejectedError.md)
- [`AuthError`](AuthError.md)
- [`RaffleNotFoundError`](RaffleNotFoundError.md)
- [`RaffleEndedError`](RaffleEndedError.md)
- [`RaffleFullError`](RaffleFullError.md)
- [`InsufficientFundsError`](InsufficientFundsError.md)
- [`UnauthorizedError`](UnauthorizedError.md)

## Constructors

### Constructor

> **new TikkaSdkError**(`code`, `message`, `cause?`): `TikkaSdkError`

Defined in: [utils/errors.ts:92](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L92)

#### Parameters

##### code

[`TikkaSdkErrorCode`](../enumerations/TikkaSdkErrorCode.md)

##### message

`string`

##### cause?

`unknown`

#### Returns

`TikkaSdkError`

#### Overrides

`Error.constructor`

## Methods

### wrap()

> `static` **wrap**(`error`, `defaultCode?`): `TikkaSdkError`

Defined in: [utils/errors.ts:107](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L107)

Static helper to wrap unknown errors into TikkaSdkError.
Useful in service-level catch blocks.

#### Parameters

##### error

`unknown`

##### defaultCode?

[`TikkaSdkErrorCode`](../enumerations/TikkaSdkErrorCode.md) = `TikkaSdkErrorCode.Unknown`

#### Returns

`TikkaSdkError`

## Properties

### cause?

> `readonly` `optional` **cause?**: `unknown`

Defined in: [utils/errors.ts:95](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L95)

***

### code

> `readonly` **code**: [`TikkaSdkErrorCode`](../enumerations/TikkaSdkErrorCode.md)

Defined in: [utils/errors.ts:93](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L93)
