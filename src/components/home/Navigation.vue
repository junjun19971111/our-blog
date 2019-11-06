<template>
  <div class="header">
    <div class="logo">
      博客
    </div>
    <div class="mdeu">
      <ul class="tab_list">
        <li>
          <router-link tag="a" to="/discovery">发现</router-link>
        </li>
        <li>
          <router-link tag="a" to="/attention">关注</router-link>
        </li>
        <li>
          <router-link tag="a" to="/message">消息</router-link>
        </li>
      </ul>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索" class="search-input">
      <router-link tag="a" to="/search">
        <img src="../../assets/img/Navigation/search.png" alt="">
      </router-link>
    </div>
    <div class="user">
      <router-link tag="a" to="/profile">
        <img src="../../assets/img/user.jpg" alt="">
      </router-link>
    </div>
    <router-link tag="a" to="/writen">
      <div class="writen">
        写文章
      </div>
    </router-link>

  </div>
</template>

<script>
  // import Recommend from './home/Recommend.vue'
  export default {
    name: 'Navigation',

  }
</script>

<style scoped lang="less">
  ul,
  li {
    list-style: none;
  }
  a{
    text-decoration: none;
  }

  .header {
    width: 100%;
    height: 56px;
    background: #ffffff;
    box-shadow: 0 1px 3px #ddd;
    /* border: 1px #fff solid; */
    -webkit-box-shadow: 0 1px 3px #ddd;
    border-left: none;
    border-right: none;
    position: fixed;
    z-index: 999;
    margin: 0;
    padding: 0;
    border: 1px #fff solid;
    display: flex;
  }

  .header .logo {
    line-height: 56px;
    width: 90px;
    font-size: 24px;
    color: #ea6f5a;
    text-align: center;
  }

  .header .mdeu {
    margin-left: 20px;
  }

  .header .mdeu .tab_list li {
    margin-left: 10px;
    float: left;
    font-size: 17px;
  }

  .header .mdeu .tab_list li a {
    padding: 15px;
    text-decoration: none;
    color: black;
  }
<<<<<<< HEAD

  .header .mdeu .tab_list .router-link-active {
    color: #ea6f5a;
  }

=======
>>>>>>> a61b9a09050dd70ffaf5f0d2c2675566129f1706
  .header .search {
    margin-left: 20px;
  }

  .header .search input {
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    margin-top: 9px;
  }

  .header .search input:focus {
    outline: none
  }

  .header .search a {
    position: absolute;
    top: 15px;
    margin-left: -36px;
  }

  .header .search img {
    width: 25px;
    height: 25px;
  }

  .header .user {
    margin-left: 480px;
    margin-top: 8px;
    cursor: pointer;
  }

  .header .user img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .header .writen {
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
    line-height: 40px;
    text-align: center;
  }
  .header .tab_list .router-link-active{
    color: #ea6f5a!important;
  }
</style>