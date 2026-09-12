[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RaffleStateError

# Class: RaffleStateError

Defined in: [modules/raffle/raffle.types.ts:99](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L99)

Thrown when an operation is attempted in an invalid state.
E.g. calling `triggerDraw` on an already-finalized raffle.

## Extends

- `Error`

## Constructors

### Constructor

> **new RaffleStateError**(`raffleId`, `currentStatus`, `attempted`): `RaffleStateError`

Defined in: [modules/raffle/raffle.types.ts:100](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L100)

#### Parameters

##### raffleId

`number`

##### currentStatus

`RaffleStatus`

##### attempted

[`RaffleTransition`](../type-aliases/RaffleTransition.md)

#### Returns

`RaffleStateError`

#### Overrides

`Error.constructor`

## Properties

### attempted

> `readonly` **attempted**: [`RaffleTransition`](../type-aliases/RaffleTransition.md)

Defined in: [modules/raffle/raffle.types.ts:103](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L103)

***

### currentStatus

> `readonly` **currentStatus**: `RaffleStatus`

Defined in: [modules/raffle/raffle.types.ts:102](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L102)

***

### raffleId

> `readonly` **raffleId**: `number`

Defined in: [modules/raffle/raffle.types.ts:101](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L101)
