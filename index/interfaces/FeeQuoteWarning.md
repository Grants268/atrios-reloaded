[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / FeeQuoteWarning

# Interface: FeeQuoteWarning

Defined in: [fee-estimator/fee-estimator.types.ts:24](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L24)

User-visible warnings attached to a fee quote.
Consumers should surface at least the `message` in their UI.

## Properties

### code

> **code**: `"STALE_QUOTE"` \| `"FALLBACK_ESTIMATE"` \| `"MAX_FEE_EXCEEDED"` \| `"SIMULATION_ERROR"`

Defined in: [fee-estimator/fee-estimator.types.ts:26](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L26)

Machine-readable code for programmatic handling

***

### message

> **message**: `string`

Defined in: [fee-estimator/fee-estimator.types.ts:28](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L28)

Human-readable explanation
