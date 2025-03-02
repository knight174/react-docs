# React 学习文档

这是一个使用 VitePress 构建的 React 学习文档网站，用于系统化记录 React 的学习内容。

## 内容概览

本文档包含以下主要内容：

- **基础概念**：JSX、组件、Props、State 等
- **Hooks**：useState、useEffect、自定义 Hooks 等
- **状态管理**：Context API、Redux、Zustand 等
- **路由**：React Router 的使用方法
- **性能优化**：代码分割、懒加载、缓存等
- **实践案例**：常见功能的实现示例

## 本地开发

### 环境要求

- Node.js 16+
- pnpm/npm

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm run docs:dev
```

### 构建静态网站

```bash
pnpm run docs:build
```

### 预览构建结果

```bash
pnpm run docs:preview
```

## 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。每当代码推送到 master 分支时，会自动触发构建和部署流程。

## 许可证

MIT
