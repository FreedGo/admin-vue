<template>
  <div id="app">
    <!-- header 组件 -->
    <app-header></app-header>

    <!-- 侧边栏组件 -->
    <app-sidebar></app-sidebar>
    
    <!-- 主体 -->
    <div class="main">
      
      <!-- 其它页面自已调整吧 -->
      <div class="container-fluid">

        <!-- 路由匹配渲染组件 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'

// 如果想要在 Vue 单文件组件中操作 DOM ，则必须写到 Vue 的生命周期中
export default {
  name: 'app',

  components: {
    'app-header': Header,
    'app-sidebar': Sidebar
  }
}

</script>
<style>


</style>
