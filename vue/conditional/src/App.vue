<template>
  <div id="app">
    <Conditional/>
  </div>
</template>

<script>
import Conditional from './components/Conditional.vue'

export default {
  name: 'app',
  components: {
    Conditional
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
