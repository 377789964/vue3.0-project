<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <p>{{ count }}</p>
    <button @click="addCount">++</button>
  </div>
</template>

<script>
// 使用自定义的hooks
import useCounter from '../hooks/useCounter'
export default {
  name: 'HelloWorld',
  // vue3.0写法
  setup() {
    const msg = 'Welcome to Vue3.0'
    // // data不能结构返回，解构返回会失去响应式
    // // return {
    // //   ...data
    // // }
    console.log(useCounter(), 'useCounter')
    //这里解构data依然具有响应式，因为在hooks文件内使用了toRefs方法
    const { data: {count}, addCount } = useCounter()
    return {
      msg,
      count,
      addCount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
