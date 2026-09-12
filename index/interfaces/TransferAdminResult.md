[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / TransferAdminResult

# Interface: TransferAdminResult

Defined in: [modules/admin/admin.types.ts:55](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L55)

Result returned from initiating admin transfer.
The new admin must call [AdminService.acceptAdmin](../classes/AdminService.md#acceptadmin) to complete the transfer.

## Example

```ts
const result = await adminService.transferAdmin(newAdminAddress);
if (result.success) {
  console.log(`Transfer initiated at ledger ${result.ledger}`);
  console.log('New admin must call acceptAdmin() to complete');
}
```

## Properties

### ledger

> **ledger**: `number`

Defined in: [modules/admin/admin.types.ts:59](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L59)

Ledger number where the transaction was confirmed

***

### txHash

> **txHash**: `string`

Defined in: [modules/admin/admin.types.ts:57](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L57)

Transaction hash on the Stellar network
