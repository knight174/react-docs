import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'React 学习文档',
  description: '系统化的 React 学习指南',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'React 学习文档',
      description: '系统化的 React 学习指南',
      link: '/',
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'React 學習文檔',
      description: '系統化的 React 學習指南',
      link: '/zh-TW/',
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      title: 'Documentação React',
      description: 'Guia sistemático de aprendizado React',
      link: '/pt/',
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.png',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '基础概念', link: '/basics/' },
      { text: 'Hooks', link: '/hooks/' },
      { text: '状态管理', link: '/state/' },
      { text: '路由', link: '/router/' },
      { text: '性能优化', link: '/performance/' },
      { text: '实践案例', link: '/examples/' },
    ],

    // 侧边栏
    sidebar: {
      '/': [
        {
          text: '基础概念',
          items: [
            { text: '介绍', link: '/basics/' },
            { text: 'JSX', link: '/basics/jsx' },
            { text: '组件', link: '/basics/components' },
            { text: 'Props', link: '/basics/props' },
            { text: 'State', link: '/basics/state' },
            { text: '生命周期', link: '/basics/lifecycle' },
            { text: '事件处理', link: '/basics/events' },
            { text: '条件渲染', link: '/basics/conditional-rendering' },
            { text: '列表和键', link: '/basics/lists-keys' },
          ],
        },
        {
          text: 'Hooks 教程',
          items: [
            { text: 'Hooks 介绍', link: '/hooks/' },
            { text: 'useState', link: '/hooks/useState' },
            { text: 'useEffect', link: '/hooks/useEffect' },
            { text: 'useContext', link: '/hooks/useContext' },
            { text: 'useReducer', link: '/hooks/useReducer' },
            { text: 'useCallback', link: '/hooks/useCallback' },
            { text: 'useMemo', link: '/hooks/useMemo' },
            { text: 'useRef', link: '/hooks/useRef' },
            { text: '自定义 Hooks', link: '/hooks/custom-hooks' },
          ],
        },
      ],
      '/zh-TW/': [
        {
          text: '基础概念',
          items: [
            { text: '介绍', link: '/zh-TW/basics/' },
            { text: 'JSX', link: '/zh-TW/basics/jsx' },
            { text: '组件', link: '/zh-TW/basics/components' },
            { text: 'Props', link: '/zh-TW/props' },
            { text: 'State', link: '/zh-TW/state' },
            { text: '生命周期', link: '/zh-TW/lifecycle' },
            { text: '事件处理', link: '/zh-TW/events' },
            { text: '条件渲染', link: '/zh-TW/conditional-rendering' },
            { text: '列表和键', link: '/zh-TW/lists-keys' },
          ],
        },
      ],
      '/pt/': [
        {
          text: 'Conceitos Básicos',
          items: [
            { text: 'Introdução', link: '/pt/basics/' },
            { text: 'JSX', link: '/pt/basics/jsx' },
            { text: 'Componentes', link: '/pt/basics/components' },
            { text: 'Props', link: '/pt/props' },
            { text: 'State', link: '/pt/state' },
            { text: '生命周期', link: '/pt/lifecycle' },
            { text: '事件处理', link: '/pt/events' },
            { text: '条件渲染', link: '/pt/conditional-rendering' },
            { text: '列表和键', link: '/pt/lists-keys' },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/knight174/react-docs' },
    ],

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2025-${new Date().getFullYear()} 菠萝的蜜`,
    },

    // 搜索
    search: {
      provider: 'local',
    },

    // 大纲配置
    outline: {
      level: 'deep',
      label: '本页目录',
    },
  },
});
