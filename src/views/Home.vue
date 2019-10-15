<template>
  <div class="home">
    <Navigation />
    <div class="showImg">
      <NavImg />
    </div>
    <right />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/home/Navigation.vue'
import NavImg from '@/components/home/NavImg.vue'
import right from '@/components/right.vue'
export default {
  name: 'home',
  components: {
    Navigation,
    right,
    NavImg
  }
}
</script>
<style lang="less">
  .home{
    width: 100%;
  }
</style>