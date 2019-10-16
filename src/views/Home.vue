<template>
  <div class="home">
    <Navigation />
    <div class="showImg">
      <NavImg />
    </div>
    <Content />
  </div>

</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/home/Navigation.vue'
import NavImg from '@/components/home/NavImg.vue'
import Content from '@/components/home/Content.vue'
export default {
  name: 'home',
  components: {
    Navigation,
    NavImg,
    Content
  }
}
</script>
<style lang="less">
  .home{
    width: 100%;
  }
</style>