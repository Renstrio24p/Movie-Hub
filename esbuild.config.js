import * as esbuild from 'esbuild'
import LiveServer from 'alive-server'
import imagePlugin from 'esbuild-plugin-inline-image'
import copy from 'esbuild-copy-static-files'

const Server = ()=>{
    const liveParams = { root: 'dist', port: 4550, host: 'localhost', file: 'index.html'}
    LiveServer.start(liveParams)
}
const EsbuildOptions = {
        entryPoints:['src/index.js','index.html'],
        outdir: 'dist',
        bundle: true,
        minify: true,
        splitting: true,
        format: 'esm',
        chunkNames: 'src/[name]-[hash]',
        // sourcemap: true,
        loader: {
            '.html':'copy',
            '.png':'copy',
            '.svg':'copy'
        },
        plugins: [
            imagePlugin(),
            copy({
                src: './src/images',
                dest: './dist',
                recursive: true,
              })
        ],
        define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'), 'process.env': JSON.stringify(process.env) },
    }

if(process.argv.includes('--build')){
    await esbuild.build(EsbuildOptions).catch(() => {
        process.exit(1)
    });
} else {
    const ctx = await esbuild.context(EsbuildOptions).catch(() => {
        process.exit(1)
    });
    ctx.watch()
    ctx.rebuild()
    Server()
}