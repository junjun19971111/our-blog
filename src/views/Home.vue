<template>
  <div class="home">
    <Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/home/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>
