import vituum from 'vituum'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import juice from '@vituum/vite-plugin-juice'
import send from '@vituum/vite-plugin-send'

export default {
    plugins: [
        vituum(),
        tailwindcss(),
        posthtml({
            root: './src/emails'
        }),
        juice(),
        send()
    ]
}