<template>
  <div class="hello">
    <p>count: {{ data.count }}</p>
    <button @click="addCount">++</button>
    <p>count: {{ data.count1 }}</p>
    <hr>
    <p>count3: {{ count3 }}</p>
    <button @click="addCount3">++</button>
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue'
export default {
  name: 'Child1',
  setup() {
    const data = reactive({
      count: 1,
      count1: computed(() => {
        return data.count * 2
      })
    })
    function addCount() {
      data.count++
    }
    const count = ref(0)
    // computed返回ref对象
    const count3 = computed({
      get() {
        return count.value * 2
      },
      set(val) {
        count.value = val
      }
    })
    function addCount3() {
      count3.value++
    }
    // return中返回的ref对象在模板中使用不需要.value访问其值
    return {
      data,
      addCount,
      count3,
      addCount3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
