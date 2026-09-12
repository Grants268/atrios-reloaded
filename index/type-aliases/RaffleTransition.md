[**Atrios Reloaded SDK v0.1.0**](../../README.md)

***

[Atrios Reloaded SDK](../../modules.md) / [index](../README.md) / RaffleTransition

# Type Alias: RaffleTransition

> **RaffleTransition** = `"open→drawing"` \| `"drawing→finalized"` \| `"open→cancelled"`

Defined in: [modules/raffle/raffle.types.ts:90](https://github.com/Grants268/atrios-reloaded/blob/241a365e8b7ca6b9ca80b6a1a45de575067cb7fa/sdk/src/modules/raffle/raffle.types.ts#L90)

Valid state transitions in the raffle contract state machine:

 Open ──► Drawing  (trigger_draw)
 Drawing ──► Finalized (receive_randomness → internal finalization)
 Open ──► Cancelled (cancel_raffle)

Any other transition is rejected by the contract and surfaced as
`RaffleStateError`.
