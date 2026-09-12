[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / FeeEstimateResult

# Interface: FeeEstimateResult

Defined in: [fee-estimator/fee-estimator.types.ts:131](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L131)

Full result returned by `FeeEstimatorService.estimateFee()`.

## Properties

### resources

> **resources**: [`FeeResourceBreakdown`](FeeResourceBreakdown.md)

Defined in: [fee-estimator/fee-estimator.types.ts:145](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L145)

Detailed per-component breakdown.

***

### stroops

> **stroops**: `string`

Defined in: [fee-estimator/fee-estimator.types.ts:142](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L142)

Total estimated fee in stroops (as a string to avoid integer overflow).
Equal to `baseFeeStroops + resourceFeeStroops`.

***

### xlm

> **xlm**: `string`

Defined in: [fee-estimator/fee-estimator.types.ts:136](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L136)

Total estimated fee in human-readable XLM (7 decimal places).
Equal to `(baseFee + resourceFee)` converted from stroops.
