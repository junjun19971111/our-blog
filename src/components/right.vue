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
  width: 300px;
  background-color: #f0f0f0;
}
</style>