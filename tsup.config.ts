import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'enums/index': 'src/enums/index.ts',
    'events/index': 'src/events/index.ts',
    'rmq/index': 'src/rmq/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
});
