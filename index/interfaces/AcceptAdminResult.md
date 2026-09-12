[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / AcceptAdminResult

# Interface: AcceptAdminResult

Defined in: [modules/admin/admin.types.ts:75](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L75)

Result returned from accepting admin rights.
Must be called by the address designated as the new admin.

## Example

```ts
const result = await adminService.acceptAdmin();
if (result.success) {
  console.log(`Admin rights accepted at ledger ${result.ledger}`);
}
```

## Properties

### ledger

> **ledger**: `number`

Defined in: [modules/admin/admin.types.ts:79](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L79)

Ledger number where the transaction was confirmed

***

### txHash

> **txHash**: `string`

Defined in: [modules/admin/admin.types.ts:77](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.types.ts#L77)

Transaction hash on the Stellar network
