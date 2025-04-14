import { resolve } from 'path'
import { defineConfig } from 'vite'
import { builtinModules } from 'node:module'
import type { LibraryFormats } from 'vite'

const getOptions = (): {
  outDir: string
  entry: string
  formats: LibraryFormats[]
  include: string[]
  minify: boolean | 'terser' | 'esbuild'
} => {
  /** 第一步: 打包成cjs */
  if (process.argv[4] !== 'esm') {
    return {
      minify: 'terser',
      outDir: 'dist/cjs',
      entry: 'src/index.js',
      formats: ['cjs'],
      include: [
        resolve(__dirname, 'src/**/*.js'),
        resolve(__dirname, 'node_modules/**'),
      ],
    }
  }

  /** 第二步: 打包成esm */
  return {
    minify: 'terser',
    outDir: 'dist/esm',
    entry: 'dist/cjs/index.js',
    formats: ['es'],
    include: [
      resolve(__dirname, 'dist/cjs/**/*.js'),
    ],

  }
}

const { minify, entry, formats, include, outDir } = getOptions()
console.log('minify', minify)

export default defineConfig({
  build: {
    target: 'es2022',
    lib: {
      formats,
      fileName: 'index',
      entry,
    },
    emptyOutDir: true,
    outDir,
    rollupOptions: {
      external: [
        ...builtinModules,
        ...builtinModules.map((mod) => `node:${mod}`),
      ],
      output: {
        inlineDynamicImports: true,
      },
      cache: false,
    },
    minify,
    commonjsOptions: {
      include
    },
  }
})
