import vituum from 'vituum'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import juice from '@vituum/vite-plugin-juice'
import send from '@vituum/vite-plugin-send'
import beautify from 'vite-plugin-beautify'
import postcssMergeLonghand from 'posthtml-postcss-merge-longhand'
import posthtmlComponent from 'posthtml-component'

export default {
    build: {
        rollupOptions: {
            input: [
                './src/templates/**/*.{json,html}',
                '!./src/templates/**/*.{html}.json'
            ],
        },
    },
    plugins: [
        vituum({
            pages: {
                dir: './src/templates'
            }
        }),
        tailwindcss(),
        posthtml({
            root: './src',
            include: '**/*.html',
            plugins: [
                posthtmlComponent({
                    root: './src',
                    folders: ['components', 'layouts', 'templates'],
                    tagPrefix: 'mb-'
                }),
                postcssMergeLonghand()
                // Add other posthtml plugins here as needed
            ],
            // exclude: ['posthtml-extend', 'posthtml-include'],
        }),
        juice({
            paths: ['src/templates'],
            doctype: '<!DOCTYPE html>',
            options: {
                preserveImportant: true, // false
            }
        }),
        send(),
        beautify({
            inDir: 'dist',
            html: {
                enabled: true,
                options: {
                    indent_size: 4,
                },
            },
            js: {
                enabled: false,
            },
            css: {
                enabled: false,
            },
        })
    ]
}