# npm

## 镜像

如果希望每次使用 `npm` 时都默认使用国内镜像，可以修改全局配置：

```shell
npm config set registry https://registry.npmmirror.com
```

验证修改是否成功：

```shell
npm config get registry
```
