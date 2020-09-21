<template>
  <div id="app">
    <h4>Welcome to Vue3.0</h4>
    <!-- <HelloWorld/> -->
    <!-- <Child childMsg="child-component"/> -->
    <!-- <Child1/> -->
    <!-- <watch-component/> -->
    <!-- <life-cycle/> -->
    <!-- <Ref/> -->
    <Provide/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Child from "./components/child"
// import Child1 from "./components/child1"
// import WatchComponent from "./components/watchComponent"
// import LifeCycle from "./components/lifeCycle"
// import Ref from "./components/Ref"
import Provide from "./components/Provide"

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Child,
    // Child1,
    // WatchComponent,
    // LifeCycle,
    // Ref,
    Provide
  }
}
</script>

<style>
#app {
}
</style>
