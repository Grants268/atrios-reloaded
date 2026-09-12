[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / AdminService

# Class: AdminService

Defined in: [modules/admin/admin.service.ts:43](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L43)

## Remarks

Service for managing Tikka raffle contract administration.
Provides methods for pausing/unpausing the contract, transferring admin rights,
and querying admin status.

## Example

```ts
const adminService = app.get(AdminService);

// Pause the contract (admin only)
const pauseResult = await adminService.pause({
  memo: 'Maintenance window - pausing raffles'
});
if (pauseResult.success) {
  console.log('Contract paused at ledger:', pauseResult.ledger);
}

// Check if contract is paused
const isPausedResult = await adminService.isPaused();
console.log('Contract paused:', isPausedResult.value);

// Transfer admin to new address
const transferResult = await adminService.transferAdmin(newAdminAddress, {
  memo: 'Admin transfer'
});

// Accept admin rights (must be called by new admin)
const acceptResult = await adminService.acceptAdmin();
```

## Constructors

### Constructor

> **new AdminService**(`contract`): `AdminService`

Defined in: [modules/admin/admin.service.ts:48](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L48)

Creates an instance of AdminService.

#### Parameters

##### contract

[`ContractService`](../../index.write/classes/ContractService.md)

The contract service used to invoke and simulate contract functions

#### Returns

`AdminService`

## Methods

### acceptAdmin()

> **acceptAdmin**(`options?`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Defined in: [modules/admin/admin.service.ts:173](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L173)

Accepts pending admin rights.
Must be called by the address that was designated as the new admin
via [transferAdmin](#transferadmin).

#### Parameters

##### options?

[`AdminWriteOptions`](../interfaces/AdminWriteOptions.md) = `{}`

Optional configuration for the transaction

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Promise containing the transaction result

#### Throws

Will reject if there are no pending admin rights or if called by wrong address

#### Example

```ts
// After current admin calls transferAdmin(newAddress, ...)
// The new admin account calls:
const result = await adminService.acceptAdmin();
if (result.success) {
  console.log('Admin rights accepted at block:', result.ledger);
}
```

***

### cancelRaffle()

> **cancelRaffle**(`raffleId`, `options?`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Defined in: [modules/admin/admin.service.ts:225](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L225)

Cancels a raffle.
Validates the raffle is in OPEN state and that the caller is the raffle creator
or an admin before proceeding.

#### Parameters

##### raffleId

`number`

The raffle to cancel
 *

##### options?

[`AdminWriteOptions`](../interfaces/AdminWriteOptions.md) = `{}`

Optional transaction configuration
 *

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

#### Throws

with code RaffleEnded if raffle is not OPEN
 *

#### Throws

if the caller is not the raffle creator or admin
 *
 *

#### Example

* ```ts
 * const result = await adminService.cancelRaffle(1);
 * if (result.success) {
 *   console.log('Raffle cancelled at block:', result.ledger);
 * }
 * ```

***

### finalizeRaffle()

> **finalizeRaffle**(`raffleId`, `options?`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Defined in: [modules/admin/admin.service.ts:194](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L194)

Finalizes a raffle by triggering the draw.
Validates the raffle is in OPEN state before proceeding.

#### Parameters

##### raffleId

`number`

The raffle to finalize
 *

##### options?

[`AdminWriteOptions`](../interfaces/AdminWriteOptions.md) = `{}`

Optional transaction configuration
 *

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Promise containing the transaction result
 *

#### Throws

with code RaffleEnded if raffle is not OPEN
 *
 *

#### Example

* ```ts
 * const result = await adminService.finalizeRaffle(1);
 * if (result.success) {
 *   console.log('Raffle finalized at block:', result.ledger);
 * }
 * ```

***

### getAdmin()

> **getAdmin**(): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`string`\>\>

Defined in: [modules/admin/admin.service.ts:123](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L123)

Retrieves the current admin address of the contract.
Read-only operation — no signing required.

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`string`\>\>

Promise with the Stellar public key of the current admin

#### Example

```ts
const result = await adminService.getAdmin();
if (result.success) {
  console.log('Current admin:', result.value);
}
```

***

### isPaused()

> **isPaused**(): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`boolean`\>\>

Defined in: [modules/admin/admin.service.ts:105](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L105)

Checks if the raffle contract is currently paused.
Read-only operation — no signing required.

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`boolean`\>\>

Promise with boolean indicating pause status

#### Example

```ts
const result = await adminService.isPaused();
if (result.success) {
  console.log('Contract is paused:', result.value);
}
```

***

### pause()

> **pause**(`options?`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Defined in: [modules/admin/admin.service.ts:68](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L68)

Pauses the raffle contract, preventing new raffle creation and ticket purchases.
Only callable by the current admin.

#### Parameters

##### options?

[`AdminWriteOptions`](../interfaces/AdminWriteOptions.md) = `{}`

Optional configuration for the transaction

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Promise containing the transaction result with hash and ledger info

#### Throws

Will reject if not called by admin

#### Example

```ts
const result = await adminService.pause({
  memo: 'Emergency pause'
});
if (result.success) {
  console.log('Paused at block:', result.ledger);
}
```

***

### transferAdmin()

> **transferAdmin**(`newAdmin`, `options?`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Defined in: [modules/admin/admin.service.ts:145](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L145)

Initiates a transfer of admin rights to a new address.
The new admin must call [acceptAdmin](#acceptadmin) to complete the transfer.
Only callable by the current admin.

#### Parameters

##### newAdmin

`string`

Stellar public key of the new admin

##### options?

[`AdminWriteOptions`](../interfaces/AdminWriteOptions.md) = `{}`

Optional configuration for the transaction

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Promise containing the transaction result

#### Throws

Will reject if `newAdmin` is invalid or if not called by admin

#### Example

```ts
const newAdminAddress = 'GBIQ...'; // New admin's public key
const result = await adminService.transferAdmin(newAdminAddress, {
  memo: 'Admin transition'
});
```

***

### unpause()

> **unpause**(`options?`): `Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Defined in: [modules/admin/admin.service.ts:87](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/admin/admin.service.ts#L87)

Resumes the raffle contract after being paused.
Only callable by the current admin.

#### Parameters

##### options?

[`AdminWriteOptions`](../interfaces/AdminWriteOptions.md) = `{}`

Optional configuration for the transaction

#### Returns

`Promise`\<[`ContractResponse`](../../index.read/interfaces/ContractResponse.md)\<`void`\>\>

Promise containing the transaction result with hash and ledger info

#### Throws

Will reject if not called by admin

#### Example

```ts
const result = await adminService.unpause({
  memo: 'Resume operations'
});
```
