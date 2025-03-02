import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'React 学习文档',
  description: '系统化的 React 学习指南',
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
      '/basics/': [
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
      ],
      '/hooks/': [
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
      '/state/': [
        {
          text: '状态管理',
          items: [
            { text: '状态管理介绍', link: '/state/' },
            { text: 'Context API', link: '/state/context-api' },
            { text: 'Redux', link: '/state/redux' },
            { text: 'Redux Toolkit', link: '/state/redux-toolkit' },
            { text: 'Zustand', link: '/state/zustand' },
            { text: 'Recoil', link: '/state/recoil' },
            { text: 'Jotai', link: '/state/jotai' },
            { text: '方案对比', link: '/state/comparison' },
          ],
        },
      ],
      '/router/': [
        {
          text: 'React Router',
          items: [
            { text: '路由介绍', link: '/router/' },
            { text: '基础路由', link: '/router/basic-routing' },
            { text: '嵌套路由', link: '/router/nested-routes' },
            { text: '路由参数', link: '/router/route-parameters' },
            { text: '编程式导航', link: '/router/programmatic-navigation' },
            { text: '受保护路由', link: '/router/protected-routes' },
          ],
        },
      ],
      '/performance/': [
        {
          text: '性能优化',
          items: [
            { text: '性能优化介绍', link: '/performance/' },
            { text: '代码分割', link: '/performance/code-splitting' },
            { text: '懒加载', link: '/performance/lazy-loading' },
            { text: 'React.memo', link: '/performance/memo' },
            { text: '虚拟化', link: '/performance/virtualization' },
            { text: '打包优化', link: '/performance/bundle-optimization' },
            { text: '性能分析', link: '/performance/profiling' },
          ],
        },
      ],
      '/examples/': [
        {
          text: '实践案例',
          items: [
            { text: '案例介绍', link: '/examples/' },
            { text: 'Todo 应用', link: '/examples/todo-app' },
            { text: '表单处理', link: '/examples/form-handling' },
            { text: '身份验证', link: '/examples/authentication' },
            { text: '数据获取', link: '/examples/data-fetching' },
            { text: '暗黑模式', link: '/examples/dark-mode' },
            { text: '响应式设计', link: '/examples/responsive-design' },
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
