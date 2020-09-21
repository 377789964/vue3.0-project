<template>
  <div class="hello">
    <p ref="root">Ref</p>
    <p>countRef.count: {{ countRef.count }}</p>
    <button @click="addCount">++</button>
    <br>
    <p>readonly: {{ copy.count }}</p>
  </div>
</template>

<script>
import { ref, onMounted, isRef, unref, shallowRef, readonly, isReadonly, shallowReadonly } from 'vue'
export default {
  name: 'Ref',
  setup() {
    const root = ref()
    onMounted(() => {
      console.log(root.value) // 输出dom对象
    })
    const count = 10
    // isRef判断属性是否是ref对象
    console.log(isRef(root))
    console.log(isRef(count))
    const count1 = ref(1000)
    // 一个语法糖 root.value ? root.value : undefined
    console.log(unref(count1)) // 输出1000
    console.log(unref(100)) // 输出100
    console.log(root, unref(root)) // 输出undefined DOM此时还没有

    // shallowRef 只代理一层
    const countRef = shallowRef({count: 666})
    function addCount() {
      countRef.value.count++
      console.log(countRef.value.count) // 值变化了但是模板并没有跟着更新数据重新渲染
    }

    // 只读
    const copy = readonly(countRef)
    // copy.value.count = 999 // eslint会报警告readony数据赋值失败
    console.log(isReadonly(copy), isReadonly(countRef))

    // 浅只读 深层次的属性可以被修改
    const shallowCopy = shallowReadonly({
      count: {
        a: 111,
        b: 222
      }
    })
    shallowCopy.count.a = 111111
    console.log(shallowCopy.count.a) // 输出111111
    return {
      root,
      countRef,
      addCount,
      copy
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
