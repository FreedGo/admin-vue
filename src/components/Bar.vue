<template>
  <div>
    <h1>Bar Component</h1>
    <hr>
    <h2>{{ count }}</h2>
    <button @click="increment">点击+1</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },

    methods: {
      increment () {
        this.count++
      }
    }
  }
</script>

<style>
  
</style>
