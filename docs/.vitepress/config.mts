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
        items: [
          { text: 'Scoop', link: '/setup/scoop' },
          { text: 'Git', link: '/setup/git' },
          { text: 'WSL', link: '/setup/wsl' },
          { text: 'Docker', link: '/setup/docker' },
        ],
      },
      {
        text: '工具',
        items: [
          { text: 'Git', link: '/tool/git' },
          { text: 'Scoop', link: '/tool/scoop' },
          { text: 'Docker', link: '/tool/docker' },
          { text: 'Kubernetes', link: '/tool/kubernetes' },
        ],
      },
      {
        text: 'Linux',
        items: [
          { text: 'Debian', link: '/linux/debian' },
          { text: 'Ubuntu', link: '/linux/ubuntu' },
        ],
      },
      {
        text: 'Java',
        items: [{ text: 'JDK', link: '/java/jdk' }],
      },
      {
        text: '后端',
        items: [
          { text: 'Spring', link: '/spring/' },
          { text: 'Maven', link: '/maven/' },
        ],
      },
      {
        text: '前端',
        items: [{ text: 'pnpm', link: '/pnpm/' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/serosme/journey' },
    ],
  },
})
