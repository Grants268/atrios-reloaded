[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / verifyResponse

# Function: verifyResponse()

> **verifyResponse**(`options`): `Promise`\<`string`\>

Defined in: [auth/sep10.ts:204](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/auth/sep10.ts#L204)

Verify a signed SEP-10 response transaction and return the client public key on success.

## Parameters

### options

[`VerifyResponseOptions`](../interfaces/VerifyResponseOptions.md)

VerifyResponseOptions

## Returns

`Promise`\<`string`\>

verified client account

## Example

```ts
const verifiedClient = await verifyResponse({
  signedChallenge: responseXdr,
  serverAccount: serverPublicKey,
  clientAccount: clientPublicKey,
  anchorDomain: 'example.com',
  networkPassphrase: Networks.TESTNET,
  nonceValidator: async (nonce) => { return !nonceExists(nonce); },
});
```
