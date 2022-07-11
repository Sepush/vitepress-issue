import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'

export default defineConfig({
  lang: 'en-US',
  lastUpdated: true,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'envd',
      description: 'AI/ML Development Environment'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'envd',
      description: 'AI/ML 开发环境'
    },
  },
  title: 'envd',
  
  head:[
    ['link', { rel: 'icon', href: '/logo.svg'}],
  ],

  themeConfig: {
    logo: '/logo.svg',

    localeLinks: {
      text: '',
      items: [
        { text: 'English', link: '/guide/' },
        { text: '简体中文', link: '/zh/guide/' },
      ],
    },

    sidebar,

    footer: {
      message: 'Released under the Apache-2.0 License. Built with VitePress.',
      copyright: 'Copyright © 2022 TensorChord, Inc.'
    }
  }
 
})