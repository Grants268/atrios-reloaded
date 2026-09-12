[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / FeeQuoteSource

# Type Alias: FeeQuoteSource

> **FeeQuoteSource** = `"simulation"` \| `"fallback"`

Defined in: [fee-estimator/fee-estimator.types.ts:10](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.types.ts#L10)

How the fee estimate was derived.
- `simulation` — live `simulateTransaction` RPC call (most accurate)
- `fallback`   — static heuristic used when simulation is unavailable
