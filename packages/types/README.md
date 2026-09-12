# @atrios-reloaded/types

Shared domain types for the Tikka raffle platform. Published to npm as a standalone
package so that `atrios-reloaded-platform` and `atrios-reloaded-client` can depend on it independently.

## Install

```bash
npm install @atrios-reloaded/types
# or
pnpm add @atrios-reloaded/types
```

## Usage

```typescript
import { Raffle, RaffleStatus, Ticket, User } from '@atrios-reloaded/types';

const raffle: Raffle = {
  id: 1,
  creator: 'GABCDE...',
  status: RaffleStatus.OPEN,
  // ...
};
```

## Exports

| Symbol | Kind | Description |
|---|---|---|
| `RaffleStatus` | enum | `open`, `drawing`, `finalized`, `cancelled` |
| `Raffle` | interface | Full raffle entity |
| `Ticket` | interface | Ticket entity |
| `User` | interface | Participant entity |
| `RaffleCreatedEvent` | interface | On-chain event payload |
| `TicketPurchasedEvent` | interface | On-chain event payload |
| `RaffleEndedEvent` | interface | On-chain event payload |
| `RaffleCancelledEvent` | interface | On-chain event payload |

## Releasing

Tags of the form `types-v*` trigger the `publish-types.yml` workflow, which builds
and publishes this package to npm with provenance.

```bash
# bump version in packages/types/package.json, commit, then:
git tag types-v1.1.0
git push origin types-v1.1.0
```

## License

Apache-2.0
