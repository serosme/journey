# JDK

## Ubuntu

### jdk

安装 `JDK`

```shell
sudo apt install openjdk-25-jdk-headless
```

### update-alternatives

查看安装的 `JRE`

```shell
sudo update-alternatives --list java
```

查看安装的 `JDK`

```shell
sudo update-alternatives --list javac
```

交互式选择 `JRE` 版本

```shell
sudo update-alternatives --config java
```

交互式选择 `JDK` 版本

```shell
sudo update-alternatives --config javac
```
