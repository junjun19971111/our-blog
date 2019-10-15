<template>
  <!-- 整个右侧部分的组件 -->
  <div class="right">
    <self />
  </div>
</template>
<script>
import self from "../components/self/self.vue";
export default {
  components: {
    self
  }
};
</script>
<style scoped lang="less">
.right {
  float: right;
  padding-top: 20px;
  padding-right: 40px;
  width: 300px;
  // background-color: #f0f0f0;
}
</style>