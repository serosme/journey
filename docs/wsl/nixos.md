# NixOS

## 参考文档

[NixOS-WSL](https://github.com/nix-community/NixOS-WSL)

[NixOS-WSL Documentation](https://nix-community.github.io/NixOS-WSL/)

## 命令

安装 NixOS

```shell
wsl --install --from-file nixos.wsl
```

```shell
sudo nix-channel --update
```

```shell
sudo nixos-rebuild switch
```

```nixos
  environment.systemPackages = [
    pkgs.vim
    pkgs.git
    pkgs.wget
    pkgs.docker
  ];

  # Docker
  virtualisation.docker.enable = true;
  users.users.nixos.extraGroups = [ "docker" ];

  # Set up nix-ld
  programs.nix-ld.enable = true;

  wsl.wslConf.interop.appendWindowsPath = false;
  wsl.interop.includePath = false;
```

## Home Manager

```shell
sudo nix-channel --add https://github.com/nix-community/home-manager/archive/release-25.05.tar.gz home-manager
sudo nix-channel --update
sudo nix-channel --list
```
