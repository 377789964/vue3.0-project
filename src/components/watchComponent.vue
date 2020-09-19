<template>
  <div class="hello">
    <div>{{ data.message }}</div>
    <button @click="setMessage">changeMessage</button>
    <button @click="setCount">changeCount</button>
    <button @click="setRefCount">changeRefCount</button>
  </div>
</template>

<script>
import { reactive, watchEffect, ref, watch } from 'vue'
export default {
  name: 'WatchComponent',
  setup() {
    const data = reactive({
      message: 'watch',
      count: 0
    })
    // watchEffect默认会执行一次
    // watchEffect(() => {
    //   console.log(data.message)
    // })
    // watchEffect返回一个函数，调用返回值会停止监听
    const stopWatch = watchEffect(() => {
      console.log('data.message', data.message)
    })
    const index = ref(0)
    function setMessage() {
      data.message = data.message + index.value
      index.value++
      if (index.value >= 5) {
        stopWatch()
      }
    }
    function setCount() {
      data.count++
    }
    // watch用法（默认不会执行）
    // 监听单个属性
    // 参数1：函数返回依赖值 参数2：依赖发生变化的回调 参数3：选项对象
    // watch(
    //   () => data.message,
    //   (newMessage, oldMessage) => {
    //     console.log('new: ', newMessage, '   old: ', oldMessage)
    //   },
    //   {
    //     immediate: true, // 是否默认执行（默认执行的时候oldMessage是undefined）
    //     deep: true // 深度监听
    //   }
    // )
    // 监听多个属性 任何一个依赖发生变化都会执行参数2回调函数
    watch(
      [
        () => data.message,
        () => data.count
      ],
      ([newMessage, newCount], [oldMessage, oldCount]) => {
        console.log(newMessage, newCount, oldMessage, oldCount, '监听多个属性')
      }
    )
    // 监听ref对象 参数一可以直接写，不需要使用函数返回的写法
    const refCount = ref(0)
    watch(refCount, (newRefCount, oldRefCount) => {
      console.log('newRefCount:',newRefCount, '    oldRefCount:',oldRefCount)
    })
    function setRefCount() {
      refCount.value++
    }
    return {
      data,
      setMessage,
      setCount,
      setRefCount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
