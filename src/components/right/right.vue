<template>
  <!-- 整个右侧部分的组件 -->
  <div class="right">
    <self />
    <wxMark />
    <qqMark />
  </div>
</template>
<script>
import self from "../right/self/self.vue";
import wxMark from "../right/wxMark/wxMark.vue";
import qqMark from "../right/qqMark/qqMark.vue"
export default {
  components: {
    self,
    wxMark,
    qqMark
  }
};
</script>
<style scoped lang="less">
.right {
  float: right;
  width: 300px;
  background-color: #f0f0f0;
}
</style>