[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / buildChallenge

# Function: buildChallenge()

> **buildChallenge**(`options`): `string`

Defined in: [auth/sep10.ts:137](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/auth/sep10.ts#L137)

Build a SEP-10 challenge transaction.

## Parameters

### options

[`BuildChallengeOptions`](../interfaces/BuildChallengeOptions.md)

BuildChallengeOptions

## Returns

`string`

XDR string for the signed challenge transaction

## Example

```ts
const challengeXdr = buildChallenge({
  serverSecret: process.env.SEP10_SERVER_SECRET,
  clientAccount: clientPublicKey,
  anchorDomain: 'example.com',
  webAuthDomain: 'auth.example.com',
  timeout: 300,
  networkPassphrase: Networks.TESTNET,
});
```
