# WSL

## 参考文档

[WSL](https://raw.githubusercontent.com/microsoft/WSL/master/distributions/DistributionInfo.json)

## 命令

列出可用的 Linux 发行版

```shell
wsl -l -o
```

列出已安装的 Linux 发行版

```shell
wsl -l -v
```

安装指定的 Linux 发行版

```bash
wsl --install -d Debian
```

手动安装指定的 Linux 发行版

```shell
wsl --install --name k8s --from-file .\Downloads\Debian_WSL_AMD64_v1.22.0.0.wsl
```

注销或卸载 Linux 发行版

```bash
wsl --unregister Debian
```

## 高级配置

使用脚本设置

```shell
bash <(curl -fsSL https://script.seros.me/wsl-config)
```
