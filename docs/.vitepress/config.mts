import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Guide',
  description: 'A VitePress Site',
  cleanUrls: true,
  base: '/guide/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: '首页', link: '/' }],

    sidebar: [
      {
        text: '初始化',
        collapsed: true,
        items: [
          { text: 'Git', link: '/setup/git' },
          { text: 'Scoop', link: '/setup/scoop' },
          { text: 'WinGet', link: '/setup/winget' },
          { text: 'Docker', link: '/setup/docker' },
        ],
      },
      {
        text: 'WSL',
        collapsed: true,
        items: [
          { text: 'Start', link: '/wsl/start' },
          { text: 'NixOS', link: '/wsl/nixos' },
        ],
      },
      {
        text: '工具',
        collapsed: true,
        items: [
          { text: 'Git', link: '/tool/git' },
          { text: 'Scoop', link: '/tool/scoop' },
          { text: 'WinGet', link: '/tool/winget' },
          { text: 'Docker', link: '/tool/docker' },
          { text: 'Kubernetes', link: '/tool/kubernetes' },
        ],
      },
      {
        text: 'Linux',
        collapsed: true,
        items: [
          { text: 'Debian', link: '/linux/debian' },
          { text: 'Ubuntu', link: '/linux/ubuntu' },
        ],
      },
      {
        text: 'Java',
        collapsed: true,
        items: [
          { text: 'Maven', link: '/java/maven' },
          { text: 'Spring', link: '/java/spring' },
        ],
      },
      {
        text: '前端',
        collapsed: true,
        items: [
          { text: 'npm', link: '/web/npm' },
          { text: 'pnpm', link: '/web/pnpm' },
          { text: 'corepack', link: '/web/corepack' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/serosme/guide' },
    ],
  },
})
