# Kubernetes

## kubectl

## 学习环境

### kind

[文档](https://kind.sigs.k8s.io/)

#### 安装

```shell
curl -Lo ./kind https://github.com/kubernetes-sigs/kind/releases/download/v0.31.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
```

#### 离线工作

[Working Offline](https://kind.sigs.k8s.io/docs/user/working-offline/)

```shell
docker pull kindest/node:v1.35.0
```

#### 命令

创建集群

```shell
kind create cluster
```
