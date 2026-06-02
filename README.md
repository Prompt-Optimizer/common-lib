# common-lib

Shared TypeScript library for all prompt-optimizer services. Provides types, enums, event definitions, and RabbitMQ infrastructure (publisher/consumer wrappers, queue topology) to keep all services consistent.

**NPM package:** `@prompt-optimizer/common-lib`

## Exports

| Entry point | Contents |
|---|---|
| `./enums` | Shared enumerations |
| `./events` | Event payload types |
| `./models` | Data model types |
| `./rmq` | RabbitMQ publisher / consumer classes |
| `./rmq-topology` | Exchange and queue definitions |
| `./notification-events` | Notification event payloads |

## Build

```bash
npm install
npm run build   # outputs ESM + CJS to dist/
```

## Usage in services

The library is installed as a local dependency via `file:../common-lib` in each service's `package.json`. After changing common-lib, rebuild it and reinstall in the consuming service:

```bash
# in common-lib/
npm run build

# in the consuming service/
npm install
```
