[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / ContractErrorType

# Variable: ContractErrorType

> `const` **ContractErrorType**: `object`

Defined in: [utils/errors.ts:215](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/utils/errors.ts#L215)

Contract-level error identifiers.
Values are aliases of the corresponding `TikkaSdkErrorCode` members so
`err.code` comparisons work against either enum interchangeably.

## Type Declaration

### INSUFFICIENT\_FUNDS

> `readonly` **INSUFFICIENT\_FUNDS**: [`InsufficientFunds`](../enumerations/TikkaSdkErrorCode.md#insufficientfunds) = `TikkaSdkErrorCode.InsufficientFunds`

### RAFFLE\_ENDED

> `readonly` **RAFFLE\_ENDED**: [`RaffleEnded`](../enumerations/TikkaSdkErrorCode.md#raffleended) = `TikkaSdkErrorCode.RaffleEnded`

### RAFFLE\_FULL

> `readonly` **RAFFLE\_FULL**: [`RaffleFull`](../enumerations/TikkaSdkErrorCode.md#rafflefull) = `TikkaSdkErrorCode.RaffleFull`

### RAFFLE\_NOT\_FOUND

> `readonly` **RAFFLE\_NOT\_FOUND**: [`RaffleNotFound`](../enumerations/TikkaSdkErrorCode.md#rafflenotfound) = `TikkaSdkErrorCode.RaffleNotFound`

### UNAUTHORIZED

> `readonly` **UNAUTHORIZED**: [`Unauthorized`](../enumerations/TikkaSdkErrorCode.md#unauthorized) = `TikkaSdkErrorCode.Unauthorized`
