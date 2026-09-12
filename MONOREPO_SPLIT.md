# Monorepo Split Migration Guide

This document explains the plan to split the `atrios-reloaded` monorepo into two independent
repositories, with `@atrios-reloaded/types` published to npm as the shared contract.

## Target state

```
crackedstudio/atrios-reloaded-platform   — backend, indexer, oracle, infra
crackedstudio/atrios-reloaded-client     — client, sdk
crackedstudio/atrios-reloaded (this repo) — archived / read-only after migration
```

## Why Option A (publish @atrios-reloaded/types)

`@atrios-reloaded/types` has zero runtime dependencies. Publishing it to npm is the cleanest
boundary: neither repo needs to know about the other's source tree. The SDK is already
public (`publishConfig: { access: "public" }`), so the types package follows the same
pattern.

---

## Step-by-step migration

### 1. Publish @atrios-reloaded/types to npm

```bash
# From the monorepo root
pnpm --filter @atrios-reloaded/types build
git tag types-v1.0.0
git push origin types-v1.0.0
# The publish-types.yml workflow will publish it automatically
```

Verify on npm: `npm view @atrios-reloaded/types`

---

### 2. Create the two new GitHub repos

```bash
gh repo create crackedstudio/atrios-reloaded-platform --private
gh repo create crackedstudio/atrios-reloaded-client   --private  # or public
```

---

### 3. Migrate atrios-reloaded-platform (backend + indexer + oracle)

The scaffold already lives at `/home/collins/Desktop/atrios/atrios-reloaded-platform`.

```bash
cd /home/collins/Desktop/atrios/atrios-reloaded-platform
git init
git remote add origin git@github.com:crackedstudio/atrios-reloaded-platform.git

# Copy the actual packages from the monorepo using git-filter-repo
# to preserve commit history for each package (optional but recommended):
cd /home/collins/Desktop/atrios/tikka
git clone --no-local . /tmp/atrios-reloaded-platform-history
cd /tmp/atrios-reloaded-platform-history
git filter-repo --path backend --path indexer --path oracle \
                --path db --path redis --path storage --path k8s \
                --path docker-compose.yml

# Or for a clean cut without history:
cp -r /home/collins/Desktop/atrios/tikka/backend  /home/collins/Desktop/atrios/atrios-reloaded-platform/
cp -r /home/collins/Desktop/atrios/tikka/indexer  /home/collins/Desktop/atrios/atrios-reloaded-platform/
cp -r /home/collins/Desktop/atrios/tikka/oracle   /home/collins/Desktop/atrios/atrios-reloaded-platform/
cp -r /home/collins/Desktop/atrios/tikka/db       /home/collins/Desktop/atrios/atrios-reloaded-platform/
cp -r /home/collins/Desktop/atrios/tikka/redis    /home/collins/Desktop/atrios/atrios-reloaded-platform/
cp -r /home/collins/Desktop/atrios/tikka/storage  /home/collins/Desktop/atrios/atrios-reloaded-platform/
cp -r /home/collins/Desktop/atrios/tikka/k8s      /home/collins/Desktop/atrios/atrios-reloaded-platform/

cd /home/collins/Desktop/atrios/atrios-reloaded-platform
pnpm install
pnpm build
pnpm test
git add .
git commit -m "chore(repo): initial split from atrios-reloaded monorepo"
git push -u origin main
```

**Required secrets in atrios-reloaded-platform:**

| Secret | Used by |
|---|---|
| `RAILWAY_DEPLOY_HOOK_URL` | deploy-backend.yml |
| `SUPABASE_DB_URL` | supabase-backup.yml |
| `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `R2_ENDPOINT_URL` / `R2_BUCKET_NAME` | supabase-backup.yml |
| `SLACK_WEBHOOK_URL` | supabase-backup.yml (optional) |

---

### 4. Migrate atrios-reloaded-client (client + sdk)

The scaffold already lives at `/home/collins/Desktop/atrios/atrios-reloaded-client`.

```bash
cd /home/collins/Desktop/atrios/atrios-reloaded-client
git init
git remote add origin git@github.com:crackedstudio/atrios-reloaded-client.git

# Copy packages (or use git-filter-repo for history):
cp -r /home/collins/Desktop/atrios/tikka/client /home/collins/Desktop/atrios/atrios-reloaded-client/
cp -r /home/collins/Desktop/atrios/tikka/sdk    /home/collins/Desktop/atrios/atrios-reloaded-client/
cp -r /home/collins/Desktop/atrios/tikka/docs   /home/collins/Desktop/atrios/atrios-reloaded-client/

cd /home/collins/Desktop/atrios/atrios-reloaded-client
pnpm install   # @atrios-reloaded/types now resolves from npm, @atrios-reloaded/sdk from workspace:*
pnpm build
pnpm test
git add .
git commit -m "chore(repo): initial split from atrios-reloaded monorepo"
git push -u origin main
```

**Required secrets in atrios-reloaded-client:**

| Secret | Used by |
|---|---|
| `NPM_TOKEN` | release.yml, docs.yml |
| `TIKKA_TESTNET_SECRET_KEY` | testnet-integration.yml |
| `TIKKA_CONTRACT_TESTNET` | testnet-integration.yml |
| `LHCI_GITHUB_APP_TOKEN` | ci.yml (lighthouse, optional) |
| `PLATFORM_GITHUB_TOKEN` | sync-openapi.yml (cross-repo artifact access + PR creation) |

---

### 5. OpenAPI type generation (already done)

`client/package.json` has been updated to read from a local file:

```json
"generate:types": "openapi-typescript openapi.json -o src/types/api.generated.ts"
```

A seed copy of `openapi.json` has been committed to the `atrios-reloaded-client` repo root.

The `sync-openapi.yml` workflow keeps it up to date automatically. It downloads
the `backend-openapi` artifact from the latest successful `atrios-reloaded-platform` CI run
and opens a PR with the updated spec + regenerated `api.generated.ts`.

**Required secret in atrios-reloaded-client:**

| Secret | Value |
|---|---|
| `PLATFORM_GITHUB_TOKEN` | Fine-grained PAT with: `Contents: read` on atrios-reloaded-platform, `Contents: write` + `Pull requests: write` on atrios-reloaded-client |

You can create the PAT at: Settings → Developer settings → Fine-grained tokens.
Alternatively use a GitHub App and exchange its installation token.

---

### 6. Update CODEOWNERS and branch protection

- `atrios-reloaded-platform`: protect `main`, require CI + deploy checks
- `atrios-reloaded-client`: protect `main`, require CI + Playwright + Lighthouse checks

---

### 7. Archive the monorepo

Once both repos are live and CI is green:

1. Update `atrios-reloaded/README.md` with a deprecation notice pointing to the two new repos
2. Go to GitHub repo settings → **Archive this repository**

---

## Dependency graph after split

```
npm registry
  └── @atrios-reloaded/types@1.x.x  ◄── consumed by both repos

atrios-reloaded-platform
  ├── atrios-reloaded-backend   → @atrios-reloaded/types (npm)
  ├── atrios-reloaded-indexer   → @atrios-reloaded/types (npm)
  └── atrios-reloaded-oracle    → @atrios-reloaded/types (npm)

atrios-reloaded-client
  ├── @atrios-reloaded/sdk      → @atrios-reloaded/types (npm)
  └── atrios-reloaded (client)  → @atrios-reloaded/types (npm), @atrios-reloaded/sdk (workspace:*)
```

## Updating @atrios-reloaded/types going forward

Any type change needs a PR to the monorepo's `packages/types` (or the new standalone
types repo if you extract it further), a version bump, and a `types-v*` tag to publish.
Then bump the `^1.x.x` range in both `atrios-reloaded-platform` and `atrios-reloaded-client` packages.

For urgent changes, pin the exact version (`1.1.0`) rather than a range to avoid
accidental drift between the two repos.
