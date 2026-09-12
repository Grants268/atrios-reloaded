[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / UnpauseResult

# Interface: UnpauseResult

Defined in: [modules/admin/admin.types.ts:34](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L34)

Result returned from resuming the raffle contract.

## Example

```ts
const result = await adminService.unpause();
if (result.success) {
  console.log(`Resume confirmed at ledger ${result.ledger} - tx: ${result.txHash}`);
}
```

## Properties

### ledger

> **ledger**: `number`

Defined in: [modules/admin/admin.types.ts:38](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L38)

Ledger number where the transaction was confirmed

***

### txHash

> **txHash**: `string`

Defined in: [modules/admin/admin.types.ts:36](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L36)

Transaction hash on the Stellar network
