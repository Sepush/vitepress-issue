import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/':[
    {
      text: 'Guide',
      collapsible: true,
      items:[
        { text: 'Why envd', link: '/guide/why' },
        { text: 'Getting Started', link: '/guide/' },
      ],
    }
  ],
  '/zh/':[
    {
      text: '开始了解',
      collapsible: true,
      items:[
          { text: '为何选择 envd', link: '/zh/guide/why' },
          { text: '快速开始', link: '/zh/guide/' },
      ],
    }
  ],
}
