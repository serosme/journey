# Git

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
