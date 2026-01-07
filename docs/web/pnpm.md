# pnpm

## 参考文档

- [官方文档](https://pnpm.io/zh/)

## 安装

从 `v16.13` 开始，`Node.js` 附带 `Corepack` 用于管理包管理器：

```shell
corepack enable pnpm
```

通过下列命令固定项目所用的 `pnpm` 版本：

```shell
corepack use pnpm@latest
```

## 镜像

如果希望每次使用 `pnpm` 时都默认使用国内镜像，可以修改全局配置：

```shell
pnpm config set registry https://registry.npmmirror.com
```

验证修改是否成功：

```shell
pnpm config get registry
```
