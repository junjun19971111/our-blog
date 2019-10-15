<template>
  <div class="image">
    <img :src='imgSrc' alt="">
  </div>
</template>

<script>
  export default{
    name: 'NavImg',
    data () {
      return {
        imgSrc: require('../../assets/img/Navigation/banner1.png')
      }
    }
   
  }
</script>

<style scoped lang="less">
  .image{
    background: #f2f2f2;
  }
  img{
    padding-top: 30px;
    border: 1px solid #ffffff;
  }

</style>