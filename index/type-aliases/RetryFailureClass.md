[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RetryFailureClass

# Type Alias: RetryFailureClass

> **RetryFailureClass** = `"retryable"` \| `"refresh-sequence"` \| `"fatal"`

Defined in: [network/network.config.ts:28](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/network/network.config.ts#L28)

Classification bucket a failure falls into, from the perspective of retrying.
- `retryable`        — transient; safe to retry the exact same request.
- `refresh-sequence` — recoverable, but only after the caller refreshes the
                       account sequence number (e.g. `TX_BAD_SEQ`).
- `fatal`            — never retry; the request itself is the problem.
