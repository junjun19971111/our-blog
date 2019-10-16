<template>
  <div class="home">
    <Navigation />
    <div class="showImg">
      <NavImg />
    </div>
    <right />
      <!-- <Recommend /> -->
  </div>

</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/home/Navigation.vue'
import NavImg from '@/components/home/NavImg.vue'
import right from '@/components/right.vue'
import Recommend from '@/components/home/Recommend.vue'
export default {
  name: 'home',
  components: {
    Navigation,
    right,
    NavImg,
    Recommend
  }
}
</script>
<style lang="less">
  .home{
    width: 100%;
  }
</style>