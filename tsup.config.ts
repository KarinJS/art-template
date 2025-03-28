import { defineConfig } from 'tsup'
import { builtinModules } from 'node:module'

/**
 * @description `tsup` 配置选项
 */
export default defineConfig({
  entry: ['src/index.js'], // 入口文件
  format: 'cjs', // 输出格式
  target: 'node16', // 目标环境
  splitting: false, // 是否拆分文件
  sourcemap: false, // 是否生成 sourcemap
  clean: true, // 是否清理输出目录
  outDir: 'dist', // 输出目录
  treeshake: true, // 树摇优化
  minify: true, // 压缩代码
  removeNodeProtocol: false, // 是否删除 node: 协议
  ignoreWatch: [], // 忽略监视
  shims: true, // 是否启用 shims
  external: [
    ...builtinModules, 
    ...builtinModules.map((node) => `node:${node}`), 
  ],
  noExternal: ['uglify-js'],
  dts: false,
  esbuildOptions: (options) => {
    /**
     * 配置 esbuild 以处理动态导入
     * 将 uglify-js 相关模块添加到打包中
     */
    options.bundle = true
    options.loader = {
      ...options.loader,
      '.js': 'js'
    }
    options.resolveExtensions = ['.js', '.json']
    options.metafile = true
    options.define = {
      ...options.define,
      '__require.resolve': 'require.resolve'
    }
  },
})
