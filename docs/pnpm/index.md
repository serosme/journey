# pnpm

## 镜像

### 临时使用镜像

可以在安装命令中直接通过 `--registry` 参数指定镜像地址。例如：

```shell
pnpm install --registry https://registry.npmmirror.com
```

### 全局配置镜像

如果希望每次使用 `pnpm` 时都默认走国内镜像，可以修改全局配置：

```shell
pnpm config set registry https://registry.npmmirror.com
```

验证修改是否成功：

```shell
pnpm config get registry
```

### 项目级配置镜像

在项目根目录下创建或修改 `.npmrc` 文件，添加：

```ini
registry=https://registry.npmmirror.com
```
