import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    base: '/portfolio-ed/',
    server: {
        host: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
        },
    },
    build: {
        rolldownOptions: {
            output: {
                codeSplitting: {
                    maxSize: 1000000,
                    groups: [
                        {
                            name: 'vendor',
                            test: /node_modules/,
                        },
                    ],
                },
            },
        },
    },
});
