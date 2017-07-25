// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 加载 bootstrap.css 样式文件
import 'bootstrap/dist/css/bootstrap.css'

// 加载字体图标样式文件
import 'font-awesome/css/font-awesome.css'

// 导入自己的样式文件
import './assets/less/index.css'

/* eslint-disable no-new */
new Vue({ // 整个单页中的根实例，用来管理组件和路由等
  el: '#app', // 指定被该实例管理的入口节点，也就是说只有该节点及内部的节点才可以使用 Vue 相关功能
  router, // 配置实例的路由，根据不同的请求路径渲染不同的组件
  template: '<App/>', // 当实例配置了 template 之后，template 中的内容会将指定节点替换掉，也就是说最终的渲染结果不包含 el 选项指定的节点
  components: {
    App: App
  }
})
