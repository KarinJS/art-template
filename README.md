# @karinjs/art-template

[![NPM Version](https://img.shields.io/npm/v/@karinjs/art-template.svg)](https://npmjs.org/package/@karinjs/art-template)
[![Node.js Version](https://img.shields.io/node/v/@karinjs/art-template.svg)](http://nodejs.org/download/)

art-template 是一个简约、超快的模板引擎。它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。

本项目是对原 art-template 的重新打包优化版本，使用 tsup 进行构建，大幅减小了包体积和依赖数量。

## 特性

1. 拥有接近 JavaScript 渲染极限的的性能
2. 调试友好：语法、运行时错误日志精确到模板所在行
3. 支持 Express、Koa、Webpack
4. 支持模板继承与子模板
5. 浏览器版本仅 6KB 大小
6. 零依赖，包体积小（从原版的 8.3MB 减小到 327KB）
7. 对源代码无任何修改，发布到`npm`上的所有操作均由`github actions`自动完成

## 安装

```bash
# npm
npm install @karinjs/art-template

# yarn
yarn add @karinjs/art-template

# pnpm
pnpm add @karinjs/art-template
```

### 使用别名安装（兼容旧版本）

如果你正在从原版 art-template 升级，可以使用包别名方式安装，这样无需修改任何代码：

```bash
# npm 别名安装
npm install art-template@npm:@karinjs/art-template

# yarn 别名安装
yarn add art-template@npm:@karinjs/art-template

# pnpm 别名安装
pnpm add art-template@npm:@karinjs/art-template
```

或者在 `package.json` 中配置别名：

```json
{
  "dependencies": {
    "art-template": "npm:@karinjs/art-template"
  }
}
```

然后执行安装命令：

```bash
npm install
# 或
yarn
# 或
pnpm install
```

## 优化对比

| 指标     | 原版 art-template | @karinjs/art-template |
| -------- | ----------------- | --------------------- |
| 包体积   | 8.3MB             | 327KB                 |
| 依赖数量 | 33个              | 0个                   |

数据来源：[pkg-size.dev/art-template](https://pkg-size.dev/art-template)

## 版本更新 (2025-03-29)

- 使用 tsup 重新打包
- 移除所有外部依赖
- 减小包体积
- 优化类型定义
- 升级多个依赖包版本
- 将 html-minifier 替换为 html-minifier-terser，解决高危安全警告
