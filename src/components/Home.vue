<template>
  <div class="hello">
    <h4>home-page-content</h4>
    <button @click="push('/use')">toUse</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'Homme',
  setup() {
    const { push } = useRouter()
    const currentRoute = useRoute()
    console.log(currentRoute, 'currentRoute')
    return {
      push
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
