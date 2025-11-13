import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        minify: 'esbuild',
        cssMinify: 'lightningcss',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            },
            treeshake: {
                moduleSideEffects: false,
            },
        },
        reportCompressedSize: true,
        chunkSizeWarningLimit: 1000,
    },
})
