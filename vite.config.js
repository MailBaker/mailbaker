import vituum from 'vituum'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import juice from '@vituum/vite-plugin-juice'
import send from '@vituum/vite-plugin-send'

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
            doctype: '<!DOCTYPE html>'
        }),
        send()
    ]
}