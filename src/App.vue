<template>
  <div id="app">
    <h4>Welcome to Vue3.0</h4>
    <!-- <HelloWorld/> -->
    <!-- <Child childMsg="child-component"/> -->
    <!-- <Child1/> -->
    <watch-component/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Child from "./components/child"
// import Child1 from "./components/child1"
import WatchComponent from "./components/watchComponent"

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Child,
    // Child1,
    WatchComponent

  }
}
</script>

<style>
#app {
}
</style>
