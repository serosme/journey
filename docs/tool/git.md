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

## 命令

在保留当前代码内容不变的情况下，重置提交历史为一个新的 `初始化` 提交

```shell
git reset $(git commit-tree HEAD^{tree} -m "feat: 初始化")
```

从 `暂存区` 删除所有文件，让 `Git` 停止追踪它们，但不删除本地文件

```shell
git rm -rf --cached .
```

把 `工作区` 和 `暂存区` 都恢复到最后一次提交的状态，丢弃所有未提交的修改

```shell
git reset --hard HEAD
```

获取当前 `HEAD` 所指向提交的短哈希值

```shell
git rev-parse --short HEAD
```
