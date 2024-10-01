/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/TDD-lotto-game/',
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/setup-test.js'],
    },
});
