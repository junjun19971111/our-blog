<template>
  <div class="self-box">
      <img src="./self.jpg" alt="">
      <div class="self-text">
          <h3>{{personinfo.nickname}}</h3>
          <span v-for="(item,index) in personinfo.personalTag" :key="index" :class="item.csign"  >
              {{item.description}}
          </span>
      </div>
      <a href="" class="linkcss">more</a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            personinfo: {
                nickname: '大君君和小军军',
                // personalTag: ['呵呵','哈哈','肥宅','汽水','快乐男生'],
                personalTag: [
                    {csign:'hehe',description:'呵呵'},
                    {csign:'haha',description:'哈哈'},
                    {csign:'feizhai',description:'肥宅'},
                    {csign:'qishui',description:'汽水'},
                    {csign:'happyboy',description:'快乐男生'}
                    ]
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
      display: block;
      padding: 5px;
      width: 290px;
      
  }
  .self-text{
      padding: 10px,20px,20px,20px;
      color: #3a76bf;
      font-size: 12px;
      text-align: center;
      .hehe{
          color: #ff6600
      }
      .haha{
          color: #33cc33
      }
      .feizhai{
          color: #660066
      }
      .qishui{
          color: #66cccc
      }
      .happyboy{
          color: #990033
      }
  }
  .linkcss {
      display: inline-block;
      padding-top: 10px;
      font-size: 10px;
      text-decoration: none;
  }
}
</style>