<template>
  <div class="hello">
    <h4>use-page-content</h4>
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
import {  useRoute } from 'vue-router'
// import HelloWorld from './HelloWorld.vue'
// import Child from "./child"
// import Child1 from "./child1"
// import WatchComponent from "./watchComponent"
// import LifeCycle from "./lifeCycle"
// import Ref from "./Ref"
import Provide from "./Provide"
export default {
  name: 'Use',
  components: {
    // HelloWorld,
    // Child,
    // Child1,
    // WatchComponent,
    // LifeCycle,
    // Ref,
    Provide
  },
  setup() {
    const currentRoute = useRoute()
    // currentRoute是一个proxy对象，包含hash/meta/name/path/query等路由属性
    // console.log(currentRoute, 'currentRoute')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
