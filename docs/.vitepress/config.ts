import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base:'/vitepress-notes/',
  lang: 'zh-CN',
  title: '三九 Study Notes',
  lastUpdated: true,
  appearance: 'dark',
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/images/logo2.png',
    outlineTitle: '目录',
    sidebarMenuLabel: '菜单',
    lastUpdatedText: '最近更新时间',
    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    // sidebar: sidebar,
    sidebar: generateSidebar([
      {
        documentRootPath: 'docs',
        collapseDepth: 1,
        rootGroupText: '前端笔记',
        resolvePath: '/notes/',
        scanStartPath: 'notes',
        sortByFileName: ['Vue3', 'TypeScript', 'Nodejs'],
      },
      {
        documentRootPath: 'docs',
        collapseDepth: 1,
        rootGroupText: '文章杂类',
        resolvePath: '/article/',
        scanStartPath: 'article',
      },
      {
        documentRootPath: 'docs',
        collapseDepth: 1,
        rootGroupText: '项目文档',
        resolvePath: '/document/',
        scanStartPath: 'document',
      },
      {
        documentRootPath: 'docs',
        collapseDepth: 1,
        rootGroupText: '计算机基础',
        resolvePath: '/computer/',
        scanStartPath: 'computer',
      },
    ]),

    search: {
      provider: 'local',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/shihangbin' }],

    editLink: {
      pattern:
        'https://github.com/shihangbin/vitepress-notes/edit/maindocs/:path',
      text: '在Github上编辑页面',
    },
  },
})
