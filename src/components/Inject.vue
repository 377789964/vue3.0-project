<template>
  <div>
    <p>inject</p>
  </div>
</template>

<script>
import useStore from '../hooks/useStore'
export default {
  name: 'Inject',
  setup() {
    const data = useStore()
    console.log(data, 'inject-data')
  }
}
</script>

<style scoped>

</style>