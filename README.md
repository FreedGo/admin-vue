# 在线教育项目串讲

## 反馈

## SPA 版本的管理系统

- Node.js
- Vue.js
- MongoDB
- Express

## 开始

### 下载模板

```bash
$ git clone https://github.com/lipengzhou/admin-template.git
$ cd admin-template

# 安装依赖
$ npm install

# 预览模板
$ npm start
```

### 使用 vue-cli 脚手架快速启动一个 SPA 项目

[https://github.com/vuejs/vue-cli](vue-cli)(Command Line Interface) 是一个基于 Node.js 开发的一个生成 vue 单文件组件项目的命令行工具。


安装：

```bash
$ npm install -g vue-cli
```

查看使用帮助：

```

  Usage: vue <command> [options]


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    init        generate a new project from a template
    list        list available official templates 列出可用的官方模板
    build       prototype a new project
    help [cmd]  display help for [cmd]
```

生成项目：

```bash
$ vue init webpack admin-vue
$ cd admin-vue
$ npm install
$ npm run dev
```

### vue init webpack admin-vue 目录结构介绍

```
├── .babelrc babel的配置文件，用来配置 EcmaScript 6 转码规则的
├── build webpack 打包相关目录文件
├── config webpack 打包相关目录文件
├── .editorconfig 编辑器基本编码风格配置文件
├── .eslintignore 配置 eslink 忽略校验的文件规则
├── .eslintrc.js 配置 eslink 编码风格校验规则
├── .gitignore   配置 git 忽略的目录文件
├── index.html   SPA 中的单页
├── node_modules 第三方包
├── package.json 项目的包说明文件
├── .postcssrc.js css 预处理器 postcss 的一些规则
├── README.md  项目基本说明文档
├── src        源码存放目录
└── static     可以用来存放一些静态资源
```

src 目录结构：

```
├── App.vue     SPA 中的根组件
├── assets      项目中的一些静态资源，例如 css、img 等
├── components  所有业务组件存储的目录
├── main.js     模块系统打包入口
└── router      SPA 中的路由模块
```

### 项目预热

需求：在 App.vue 中方两个链接：/foo /bar

当点击 /foo 链接的时候，可用看到 foo 组件
当点击 /bar 链接的时候，可以看到 bar 组件




















## 其他

### 使用淘宝镜像源代替 npm 国外镜像源

```bash
$ npm i -g nrm --registry=https://registry.npm.taobao.org
# 查看可用镜像源
$ nrm ls

# 将镜像源切换到淘宝
$ nrm use taobao
```

接下来再使用 `npm install` 安装任何包就都默认使用淘宝镜像源了。



