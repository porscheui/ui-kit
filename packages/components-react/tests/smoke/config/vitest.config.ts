import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/tests/smoke/specs/*.smoke.{ts,tsx}'],
  },
});
