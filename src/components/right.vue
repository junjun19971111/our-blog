<template>
  <!-- 整个右侧部分的组件 -->
  <div class="right">
    <self />
    <!-- <img  src="../assets/img/right/self.jpg" > -->
  </div>
</template>
<script>
import self from "../components/right-other/self.vue";
export default {
  components: {
    self
  }
};
</script>
<style scoped lang="less">
.right {
  float: right;
  margin-right: 20px;
  width: 300px;
  background-color: #f0f0f0;
}
</style>