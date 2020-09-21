<template>
  <div id="app">
    <h3>Welcome to Vue3.0</h3>
    <router-link to="/">home</router-link>
    <span class="mr50px"></span>
    <router-link to='/use'>use</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style scoped>
.mr50px {
  margin-right: 20px;
}
</style>
