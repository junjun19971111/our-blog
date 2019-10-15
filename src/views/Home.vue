<template>
  <div class="home">
    <Navigation />
    <right />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/home/Navigation.vue'
import right from '@/components/right.vue'
export default {
  name: 'home',
  components: {
    Navigation,
    right
  }
}
</script>
