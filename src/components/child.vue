<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <p>{{ data.count }}</p>
    <button @click="addCount">++</button>
    <p>{{ childMsg }}</p>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Child',
  // props中的属性不需要在setup函数中返回，模板中可以直接访问属性 与2.0用法一致
  props: {
    childMsg: String
  },
  setup(props, context) {
    console.log(props) // Proxy对象 是响应式对象，解构会失去响应式
    // context: 代替vue2.0的this
    console.log(context) // 只有attr emit slots三个属性
    const msg = 'Welcome to Vue3.0'
    const data = reactive({
      count: 0
    })
    function addCount() {
      data.count++
    }
    return {
      msg,
      data,
      addCount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
