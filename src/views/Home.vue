<template>
  <div class="home">
    <Navigation />
    <Recommend />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/home/Navigation.vue'
import Recommend from '@/components/home/Recommend.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    Recommend
  }
}
</script>
