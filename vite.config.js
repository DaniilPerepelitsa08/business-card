import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],

    optimizeDeps: {
        exclude: ['vue-draggable-next'],
        // include: ['vuex-persistedstate']
    },

    build:{
        rollupOptions: {
            external: '/var/www/buffalo-dev/resources/js/routers/router.js'
        }
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});
