import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "VirPrologue - AI Writer",
  description: "AI Writer",
  srcDir: 'src',
  head : [
    ['link',{rel:'icon',href:'./bg.png'}]
  ],
  //base: '/vitepress-carbon-template/', if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.md'},
      { text: 'Novel', link: '/novel/chapter1' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'Novel',
        items: [
          { text: 'Chapter1', link: '/novel/chapter1' },
          { text: 'Chapter2', link: '/novel/chapter2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon' }
    ]
  }
})
