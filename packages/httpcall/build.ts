import esbuild from 'esbuild'

// see https://zenn.dev/junkor/articles/2bcd22ca08d21d
await esbuild.build({
  bundle: true,
  entryPoints: [
    './src/cli.ts',
  ],
  outdir: './dist',
  platform: 'node',
  format: 'esm',
})
