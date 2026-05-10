import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'enums/index': 'src/enums/index.ts',
    'events/index': 'src/events/index.ts',
    'models/index': 'src/models/index.ts',
    'rmq/index': 'src/rmq/index.ts',
    'rmq-topology/index': 'src/rmq-topology/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
});
