# Git

## 初始化

使用脚本初始化

```shell
bash <(curl -fsSL https://script.seros.me/git-setup)
```

## 配置

配置列表

```bash
git config --list
```

设置代理

```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

取消代理

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```
