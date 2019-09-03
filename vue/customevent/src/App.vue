<template>
  <div id="app">
    <CustomEventHandler/>
  </div>
</template>

<script>
import CustomEventHandler from './components/CustomEventHandler.vue'

export default {
  name: 'app',
  components: {
    CustomEventHandler
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
