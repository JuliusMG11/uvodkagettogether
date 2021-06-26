<template>
  <div id="app">
    <navigation />

    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/nav/navigation.vue'

export default {
  components: {
    Navigation,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
