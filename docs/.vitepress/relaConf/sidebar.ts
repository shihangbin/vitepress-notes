// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress'
export const sidebar: DefaultTheme.Sidebar = {
	'/notes/': [
		{
			text: 'Vue3',
			items: [{ text: '简介', link: '/notes/Vue3/01-简介.md' }],
		},
		// Nodejs
		{
			text: 'Nodejs',
			collapsed: true,
			items: [
				{ text: '服务器', link: '/notes/Nodejs/01-服务器' },
				{ text: 'nodejs', link: '/notes/Nodejs/02-nodejs' },
				{ text: '异步请求', link: '/notes/Nodejs/03-异步请求' },
				{ text: 'Express', link: '/notes/Nodejs/04-Express' },
				{ text: 'MongoDB', link: '/notes/Nodejs/05-MongoDB' },
				{ text: '结构及封装', link: '/notes/Nodejs/06-结构及封装' },
			],
		},
	],
	'/article/': [
		// 文章杂类
		{
			items: [{ text: 'Git版本管理器', link: '/article/Git/Git常用指令' }],
		},
		{
			items: [{ text: 'npm包管理工具', link: '/article/npm/npm常用指令' }],
		},
		{
			text: '前端常用英语',
			collapsed: true,
			items: [
				{ text: 'HTML', link: '/article/前端常用英语/html' },
				{ text: 'CSS', link: '/article/前端常用英语/css' },
				{ text: 'JavaScript', link: '/article/前端常用英语/js' },
			],
		},
	],
	'/computer/': [
		{
			text: '计算机硬件',
			// collapsed: true,
			items: [
				{ text: '显卡', link: '/computer/计算机硬件/1-显卡' },
				{ text: 'CUP', link: '/computer/计算机硬件/2-CPU' },
				{ text: '主板', link: '/computer/计算机硬件/3-主板' },
				{ text: '内存', link: '/computer/计算机硬件/4-内存' },
				{ text: '硬盘', link: '/computer/计算机硬件/5-硬盘' },
				{ text: '电源', link: '/computer/计算机硬件/6-电源' },
				{ text: '散热器', link: '/computer/计算机硬件/7-散热器' },
				{ text: '机箱', link: '/computer/计算机硬件/8-机箱' },
				{ text: '机箱风扇', link: '/computer/计算机硬件/9-机箱风扇' },
			],
		},
	],
}
