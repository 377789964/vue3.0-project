<template>
  <div class="hello">
    <p>life-cycle</p>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'
export default {
  name: 'LifeCycle',
  // 声明周期函数
  setup() {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
