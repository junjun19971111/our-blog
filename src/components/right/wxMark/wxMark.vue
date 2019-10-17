<template>
  <div class="mark-wrapper">
    <h3>微信二维码</h3>
    <div class="img-wrapper">
        <img src="./wxmark.jpg" />
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="less">
.mark-wrapper {
  overflow: hidden;
  margin-bottom: 24px;
  background: #f8f8fa;
  border: 1px #fff solid;
  box-shadow: 0 0 3px #ddd;
  -webkit-box-shadow: 0 1px 3px #ddd;
  h3 {
    margin: 0;
    padding: 15px 20px;
    border-bottom: 1px solid #efefef;
    color: #333;
    font-weight: normal;
  }
  .img-wrapper {
    padding: 20px 0 16px;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>