import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Journal',
  description: 'A VitePress Site',
  cleanUrls: true,
  base: '/journey/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: '初始化',
        collapsed: true,
        items: [
          { text: 'Scoop', link: '/setup/scoop' },
          { text: 'Git', link: '/setup/git' },
          { text: 'WSL', link: '/setup/wsl' },
          { text: 'Docker', link: '/setup/docker' },
        ],
      },
      {
        text: '工具',
        collapsed: true,
        items: [
          { text: 'Git', link: '/tool/git' },
          { text: 'Scoop', link: '/tool/scoop' },
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
      { icon: 'github', link: 'https://github.com/serosme/journey' },
    ],
  },
})
