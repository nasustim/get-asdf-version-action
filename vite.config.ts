/// <reference types="vitest" />
import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
  },
})