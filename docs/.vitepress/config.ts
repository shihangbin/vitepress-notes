import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	// base:'/vitepress-notes/',
	lang: 'zh-CN',
	title: '冬三九 Study Notes',
	lastUpdated: true,
	appearance: 'dark',
	markdown: {
		lineNumbers: true,
	},

	themeConfig: {
		logo: '/images/logo.png',
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

		sidebar: sidebar,

		search: {
			provider: 'local',
		},

		socialLinks: [{ icon: 'github', link: 'https://github.com/shihangbin' }],

		editLink: {
			pattern: 'https://github.com/shihangbin/blog/edit/main/docs/:path',
			text: '在Github上编辑页面',
		},
	},
})
