# Corepack

## 参考文档

[Corepack](https://github.com/nodejs/corepack)

从 `v16.13` 开始，`Node.js` 附带 `Corepack` 用于管理包管理器。

## 使用

添加 `shim` 至安装目录

```shell
# corepack enable [...name]
corepack enable pnpm
```

从安装目录移除 `shim`

```shell
# corepack disable [...name]
corepack disable pnpm
```

指定当前项目使用的包管理器

```shell
corepack use pnpm@latest
```

更新当前项目使用的包管理器

```shell
corepack up
```
