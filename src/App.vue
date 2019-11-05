<template>
  <div id="app">
    <div class="nav">
      <Navigation />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>


  </div>
</template>
<script>
  import Navigation from './components/home/Navigation.vue'
  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>
<style lang="less">
  body {
    background: #f2f2f2;
  }
  .nav{
    width: 100%;
    height: 56px;
  }

</style>