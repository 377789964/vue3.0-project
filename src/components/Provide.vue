<template>
  <div>
    <p>provide</p>
    <Child />
  </div>
</template>

<script>
import Child from './child'
import { provideStore } from '../hooks/useStore'
import { reactive } from 'vue'
export default {
  name: 'Provide',
  components: {
    Child
  },
  setup() {
    const data = reactive({
      count: 100
    })
    provideStore(data)
  }
}
</script>

<style scoped>

</style>