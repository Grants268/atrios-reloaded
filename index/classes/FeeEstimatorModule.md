[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / FeeEstimatorModule

# Class: FeeEstimatorModule

Defined in: [fee-estimator/fee-estimator.module.ts:27](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/fee-estimator/fee-estimator.module.ts#L27)

FeeEstimatorModule

Import this module wherever you need pre-signature fee estimation.
Requires `NetworkModule.forRoot(...)` to be imported upstream.

## Example

```ts
@Module({
  imports: [
    NetworkModule.forRoot('testnet'),
    FeeEstimatorModule,
  ],
})
export class AppModule {}
```

## Constructors

### Constructor

> **new FeeEstimatorModule**(): `FeeEstimatorModule`

#### Returns

`FeeEstimatorModule`
