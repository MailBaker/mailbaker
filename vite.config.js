import vituum from 'vituum'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import juice from '@vituum/vite-plugin-juice'
import send from '@vituum/vite-plugin-send'
import beautify from 'vite-plugin-beautify'



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
            root: './src'
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