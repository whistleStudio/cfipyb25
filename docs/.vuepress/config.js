import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
/* 
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Cache-Control" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
*/
export default defineUserConfig({
  bundler: viteBundler(),
  title: "初中信息科技学科教学仪器-智能实验箱 教程",
  head: [
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}]
  ],
  theme: defaultTheme({
    home: "/getting-started/快速索引.md",
    logo: "/images/cfdsxdoc-icon.png",
    logoAlt: "[当前网络不佳]",
    contributors: "Whistle Wang",

    sidebar: [
      {
        text: "准备工作",
        link: "/getting-started/快速索引.md",
        children: [
          {text: "快速索引", link: "/getting-started/快速索引.md"},
          // {text: "材料清单", link: "/getting-started/材料清单.md"},
          {text: "智能实验箱", link: "/getting-started/智能实验箱.md"},
          {text: "编程星空软件", link: "/getting-started/编程星空软件.md"},
          {text: "注意事项", link: "/getting-started/注意事项.md"},
          // {text: "服务支持", link: "/getting-started/服务支持.md"},
        ]
      },
      {
        text: "物联网的数据采集",
        link: "/物联网的数据采集/声音数据的采集.md",
        collapsible: true,
        children: [
          {text: "声音数据的采集", link: "/物联网的数据采集/声音数据的采集.md"},
          {text: "模拟倒车雷达", link: "/物联网的数据采集/模拟倒车雷达.md"},
          {text: "模拟公交卡计费", link: "/物联网的数据采集/模拟公交卡计费.md"},
        ]
      },
      {
        text: "物联网的数据传输",
        link: "/物联网的数据传输/体验开发板连接Wifi.md",
        collapsible: true,
        children: [
          {text: "体验开发板连接Wifi", link: "/物联网的数据传输/体验开发板连接Wifi.md"},
          {text: "探究蓝牙传输距离",   link: "/物联网的数据传输/探究蓝牙传输距离.md"},
        ]
      },
      {
        text: "物联网的数据处理",
        link: "/物联网的数据处理/模拟本地单灯系统.md",
        collapsible: true,
        children: [
          {text: "模拟本地单灯系统", link: "/物联网的数据处理/模拟本地单灯系统.md"},
          {text: "模拟远程单灯系统",   link: "/物联网的数据处理/模拟远程单灯系统.md"},
          {text: "模拟远程多灯系统",   link: "/物联网的数据处理/模拟远程多灯系统.md"},
        ]
      },
      {
        text: "物联网的综合应用",
        link: "/物联网的综合应用/场馆的人数控制.md",
        collapsible: true,
        children: [
          {text: "场馆的人数控制", link: "/物联网的综合应用/场馆的人数控制.md"},
          {text: "场馆的温湿度控制",   link: "/物联网的综合应用/场馆的温湿度控制.md"},
        ]
      },
      {
        text: "跨学科主题学习",
        link: "/跨学科主题学习/智慧农场.md",
        collapsible: true,
        children: [
          {text: "智慧农场", link: "/跨学科主题学习/智慧农场.md"},
        ]
      },
    ],
    sidebarDepth: 0
  }),

  base: "/tutorial/cfipyb/",

  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
    backToTopPlugin()
  ],
})