<template>
  <div class="header">
    <div class="header_left">
      <span class="name">{{titleName}}</span>
      <span class="instruction">{{instructions}}</span>
    </div>
    <div class="header_bars">
      <ul>
        <li><a href="">这是导航栏</a></li>
        <li class="have_second">
          <a href="">这是导航栏</a>
          <ul class="nav_second">
            <i></i>
            <li><a href="">模板分享</a></li>
            <li><a href="">模板分享</a></li>
            <li><a href="">模板分享</a></li>
          </ul>
        </li>
        <li class="have_second"><a href="">学习笔记分享</a></li>
        <li><a href="">我的文章</a></li>
        <li><a href="">关于我</a></li>
      </ul>
    </div>
    <div class="header_right">
      <div class="jd_header">
        <input type="search" class="header_search" id="searchInput" placeholder="输入关键字搜索">
        <i class="header_glass"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        name: 'Caden',
        instructions: '天生我才必有用'
      }
    },
    computed: {
      titleName() {
        return this.name + 'の博客|';
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    width: 100%;
    height: 75px;
    background: #f8f8fa;
    box-shadow: 0 1px 3px #ddd;
    /* border: 1px #fff solid; */
    -webkit-box-shadow: 0 1px 3px #ddd;
    border-left: none;
    border-right: none;
    position: relative;
    z-index: 999;
    margin: 0;
    padding: 0;

  }

  .header .name {
    line-height: 50px;
    font-weight: normal;
    color: #3a76bf;
    display: inline-block;
    font-size: 25px;
  }

  .header .instruction {
    line-height: 20px;
    font-weight: normal;
    color: #3a76bf;
  }

  .header .header_left {
    width: 28%;
    float: left;
    height: 100%;
    text-align: center;
    line-height: 75px;
  }

  .header .header_bars {
    width: 50%;
    float: left;
    height: 100%;
    line-height: 73px;
  }

  .header .header_bars .have_second:before {
    position: absolute;
    content: "";
    top: 34px;
    right: 10px;
    width: 4px;
    height: 4px;
    border: 1px solid #999;
    border-right-width: 0;
    border-top-width: 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  *::before {
    -webkit-transition: ease-in-out .5s;
    transition: ease-in-out .5s;
  }

  .header .header_bars>ul {
    display: block;
    list-style: none;
    margin: 0;
  }

  .header .header_bars>ul>li {
    display: inline;
    position: relative;
    float: left;
  }

  .header .header_bars>ul>li>a {
    height: 100%;
    display: block;
    padding: 0 20px;
    cursor: pointer;
    text-decoration: none;
    color: #333;
  }

  .header .header_right {
    width: 20%;
    float: left;
    height: 100%;
    position: relative;
    line-height: 75px;
  }

  .jd_header {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 50;
  }

  .jd_header .header_search {
    box-sizing: border-box;
    padding-left: 10px;
    width: 100%;
    height: 37px;
    margin-top: 4px;
    border-radius: 17px;
    background: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    color: #999;
    border: none;
  }

  .jd_header .header_glass {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 16px;
    top: 28px;
    width: 20px;
    height: 20px;
    background: url('../../assets/img/Navigation/search.png') no-repeat;
    background-size: 20px 20px;
  }

  .nav_second li {
    list-style: none;
    margin: 0;
  }

  .nav_second li a {
    height: 100%;
    display: block;
    cursor: pointer;
    text-decoration: none;
    color: #333;
  }
</style>