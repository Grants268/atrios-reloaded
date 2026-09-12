[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / NetworkConfigError

# Class: NetworkConfigError

Defined in: [network/network-config.error.ts:9](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network-config.error.ts#L9)

Typed configuration error for network setup (issue #1096).

Distinct from a generic `Error` so callers can branch on it — a malformed
config is a programming mistake to be fixed at the call site, not a
transient network failure to be retried. Throwing plain `Error` forces
callers to string-match the message to tell the two apart.

## Extends

- `Error`

## Constructors

### Constructor

> **new NetworkConfigError**(`field`, `value`, `reason`): `NetworkConfigError`

Defined in: [network/network-config.error.ts:16](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network-config.error.ts#L16)

#### Parameters

##### field

`string`

##### value

`unknown`

##### reason

`string`

#### Returns

`NetworkConfigError`

#### Overrides

`Error.constructor`

## Properties

### field

> `readonly` **field**: `string`

Defined in: [network/network-config.error.ts:11](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network-config.error.ts#L11)

The config field that failed validation, e.g. `rpcUrl`.

***

### value

> `readonly` **value**: `unknown`

Defined in: [network/network-config.error.ts:14](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network-config.error.ts#L14)

The value that was rejected, for the message and for logging.
