[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RpcService

# Class: RpcService

Defined in: [network/rpc.service.ts:28](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L28)

RpcService
Combines Stellar RPC SDK with configurable transport (timeouts, headers, failover).

## Constructors

### Constructor

> **new RpcService**(`networkConfig`, `rpcConfig?`, `logger?`): `RpcService`

Defined in: [network/rpc.service.ts:36](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L36)

#### Parameters

##### networkConfig

[`NetworkConfig`](../interfaces/NetworkConfig.md)

##### rpcConfig?

[`RpcConfig`](../interfaces/RpcConfig.md)

##### logger?

[`TikkaLogger`](../interfaces/TikkaLogger.md)

#### Returns

`RpcService`

## Methods

### addFailoverEndpoint()

> **addFailoverEndpoint**(`url`): `void`

Defined in: [network/rpc.service.ts:72](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L72)

Add fallback RPC endpoint

#### Parameters

##### url

`string`

#### Returns

`void`

***

### configure()

> **configure**(`config`): `void`

Defined in: [network/rpc.service.ts:59](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L59)

Update RPC config at runtime

#### Parameters

##### config

`Partial`\<[`RpcConfig`](../interfaces/RpcConfig.md)\>

#### Returns

`void`

***

### estimateFee()

> **estimateFee**(`_operation?`): `Promise`\<\{ `minFee`: `number`; `suggestedFee`: `number`; \}\>

Defined in: [network/rpc.service.ts:128](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L128)

Estimate fee using Horizon's fee stats endpoint.

#### Parameters

##### \_operation?

`Operation2`\<`OperationRecord`\>

#### Returns

`Promise`\<\{ `minFee`: `number`; `suggestedFee`: `number`; \}\>

***

### getCircuitState()

> **getCircuitState**(): `"closed"` \| `"open"` \| `"half-open"`

Defined in: [network/rpc.service.ts:147](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L147)

Get the current state of the circuit breaker

#### Returns

`"closed"` \| `"open"` \| `"half-open"`

***

### getLedger()

> **getLedger**(`options?`): `Promise`\<`GetLatestLedgerResponse`\>

Defined in: [network/rpc.service.ts:106](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L106)

Fetch latest ledger from Soroban RPC

#### Parameters

##### options?

`RequestOptions` = `{}`

#### Returns

`Promise`\<`GetLatestLedgerResponse`\>

***

### getServer()

> **getServer**(): `RpcServer`

Defined in: [network/rpc.service.ts:54](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L54)

Get underlying rpc.Server

#### Returns

`RpcServer`

***

### getTransaction()

> **getTransaction**(`hash`): `Promise`\<`GetTransactionResponse`\>

Defined in: [network/rpc.service.ts:119](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L119)

Get a single transaction status from the RPC node (single-shot).
Returns NOT_FOUND if the tx is not yet indexed — caller owns the retry loop.
Transient transport errors (429, 5xx) are still retried by `executeRequest()`.

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`GetTransactionResponse`\>

***

### isDegraded()

> **isDegraded**(): `boolean`

Defined in: [network/rpc.service.ts:163](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L163)

Returns true if the service is operating in a degraded mode:
- Circuit breaker is open or half-open, OR
- Currently experiencing consecutive failures (> 0)

#### Returns

`boolean`

***

### sendTransaction()

> **sendTransaction**(`tx`, `options?`): `Promise`\<`SendTransactionResponse`\>

Defined in: [network/rpc.service.ts:98](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L98)

Send transaction with automatic failover

#### Parameters

##### tx

`any`

##### options?

`RequestOptions` = `{}`

#### Returns

`Promise`\<`SendTransactionResponse`\>

***

### setEndpoint()

> **setEndpoint**(`url`): `void`

Defined in: [network/rpc.service.ts:64](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L64)

Override RPC endpoint

#### Parameters

##### url

`string`

#### Returns

`void`

***

### setFetchClient()

> **setFetchClient**(`client`): `void`

Defined in: [network/rpc.service.ts:80](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L80)

Set custom fetch-compatible client

#### Parameters

##### client

`any`

#### Returns

`void`

***

### setHeaders()

> **setHeaders**(`headers`): `void`

Defined in: [network/rpc.service.ts:85](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L85)

Set default HTTP headers (e.g. API keys)

#### Parameters

##### headers

`Record`\<`string`, `string`\>

#### Returns

`void`

***

### simulateTransaction()

> **simulateTransaction**(`tx`, `options?`): `Promise`\<`SimulateTransactionResponse`\>

Defined in: [network/rpc.service.ts:90](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/rpc.service.ts#L90)

Simulate transaction with automatic failover

#### Parameters

##### tx

`any`

##### options?

`RequestOptions` = `{}`

#### Returns

`Promise`\<`SimulateTransactionResponse`\>
