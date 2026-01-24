# Scoop

## 文档

[Scoop](https://scoop.sh/)

## 快速开始

修改脚本执行策略

```shell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

执行安装脚本

```shell
irm get.scoop.sh | iex
```

设置代理

```shell
scoop config proxy 127.0.0.1:7890
```

从远程导入

```shell
irm https://script.seros.me/restore-scoop | iex
```
