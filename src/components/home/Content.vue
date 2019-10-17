<template>
  <div class="content">
    <div class="content_left">
      <Article></Article>
    </div>
    <div class="content_right">
      <right></right>
      <Recommend></Recommend>
    </div>
    
  </div>
</template>

<script>
  import Recommend from './Recommend.vue';
  import right from '../right/right.vue';
  import Article from './Article.vue'
  export default {
    name:'Content',
    components: {
      Recommend,
      right,
      Article
    }
  }
</script>

<style scoped lang="less">
  .content{
    width: 1100px;
    margin: 30px auto;
  }
  .content .content_left{
    width: 780px;
    float: left;
  } .content .content_right{
    width: 300px;
    float: right;
  }
  
</style>