<template>
  <div>
    <h1>Foo Component</h1>
    <hr>
    <h2>{{ message }}</h2>
    <input type="text" v-model="message">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'hello world'
      }
    }
  }
</script>

<style>
  
</style>
