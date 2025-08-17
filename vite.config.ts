import {defineConfig} from "vite"
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
    plugins:[
        nodePolyfills({
            // "include":["os","buffer","process"],
            "include": ["path"],
            // globals: {
            //     "Buffer": false,
            //     "global": false,
            //     "process": true
            // },
            protocolImports: true
        })
    ]
})