<template>
  <div class="self-box">
      <img src="../../assets/img/right/self.jpg" alt="">
      <div class="self-text">
          <h3>{{personinfo.nickname}}</h3>
          <span v-for="(item,index) in personinfo.personalTag" :key="index" >
              {{item}}
          </span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            personinfo: {
                nickname: '大君君和小军军',
                personalTag: ['呵呵','哈哈','肥宅','汽水','快乐男生']
            }
        }
    },
};

</script>

<style lang="less">
.self-box {
  overflow: hidden;
  margin-bottom: 24px;
  background: #f8f8fa;
  border: 1px #fff solid;
  box-shadow: 0 0 3px #ddd;
  -webkit-box-shadow: 0 1px 3px #ddd;
  img {
      width: 100%;
      display: block;
  }
  .self-text{
      padding: 10px,20px,20px,20px;
      color: red;
      font-size: 12px;
  }
  
}
</style>