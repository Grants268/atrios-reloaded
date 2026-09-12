[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / FeeQuoteConfidence

# Type Alias: FeeQuoteConfidence

> **FeeQuoteConfidence** = `"high"` \| `"medium"` \| `"low"`

Defined in: [fee-estimator/fee-estimator.types.ts:18](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L18)

Confidence level of the fee estimate.
- `high`   — live simulation succeeded; safe to present to the user
- `medium` — simulation data is stale (past `staleAfterMs`) but usable
- `low`    — fallback estimate; actual fee may differ significantly
