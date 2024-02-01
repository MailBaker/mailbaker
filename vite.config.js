import vituum from 'vituum'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import juice from '@vituum/vite-plugin-juice'
import send from '@vituum/vite-plugin-send'

export default {
    build: {
        rollupOptions: {
            input: [
                './src/emails/*.{json,latte,twig,liquid,njk,hbs,pug,html}',
                './src/templates/**/*.{json,latte,twig,liquid,njk,hbs,pug,html}',
                '!./src/templates/**/*.{latte,twig,liquid,njk,hbs,pug,html}.json'
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
            root: './src/emails'
        }),
        juice({
            paths: ['src/templates']
        }),
        send()
    ]
}