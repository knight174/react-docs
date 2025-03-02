# JSX

JSX 是 JavaScript 的语法扩展，它允许你在 JavaScript 文件中编写类似 HTML 的代码。

## 什么是 JSX

JSX 是 React 中用来描述用户界面的语法。它看起来像 HTML，但实际上是 JavaScript 的语法扩展。

```jsx
const element = <h1>Hello, world!</h1>;
```

上面的代码就是一个简单的 JSX 表达式。

## JSX 的特点

### 1. 在 JSX 中嵌入表达式

你可以在 JSX 中使用花括号 {} 嵌入任何 JavaScript 表达式：

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

### 2. JSX 也是表达式

编译后，JSX 表达式会变成普通的 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。

### 3. JSX 属性

你可以使用引号来指定字符串字面量作为属性：

```jsx
const element = <a href="https://www.reactjs.org"> link </a>;
```

也可以使用花括号来在属性中插入一个 JavaScript 表达式：

```jsx
const element = <img src={user.avatarUrl}></img>;
```

### 4. JSX 防注入攻击

React DOM 在渲染所有输入内容之前，默认会进行转义。这样可以防止 XSS（跨站脚本）攻击。

## JSX 转换

JSX 会被 Babel 等工具转换为 React.createElement() 调用：

```jsx
// JSX 代码
const element = <h1 className="greeting">Hello, world!</h1>;

// 转换后的代码
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

## 为什么使用 JSX

JSX 让你可以在 JavaScript 中编写 UI 代码，充分利用 JavaScript 的强大功能，如条件渲染、循环等。它也提供了良好的开发体验和错误提示。
