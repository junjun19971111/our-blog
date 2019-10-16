<template>
  <div class="article">
    <div class="article_title">
      <h3>学习笔记</h3>
      <a href="">更多 ></a>
    </div>
    <div class="article_btn">
      <div class="article_btn_nav">
        <ul class="notesList">
          <li v-for="item in notes" :key="item">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="article_content">
      <img src="../../assets/img/notimg.gif" alt="">
      <ul>
        <li>这是学习笔记</li>
        <li>这是学习笔记</li>
        <li>这是学习笔记</li>
        <li>这是学习笔记</li>
      </ul>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'Article',
    data() {
      return {
        notes: ['css笔记', 'javaScriprt笔记', 'Vue笔记', 'React笔记']
      }
    }
  }
</script>

<style scoped lang="less">
  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }

  .article {
    width: 100%;
    margin-bottom: 20px;
  }

  .article .article_title {
    width: 100%;
    height: 60px;
    background: #f8f8fa;
    box-shadow: 0 1px 3px #ddd;
    border: 1px #fff solid;
    -webkit-box-shadow: 0 1px 3px #ddd;
  }

  .article .article_title h3 {
    font-weight: normal;
    display: block;
    width: 40%;
    float: left;
    color: #333;
    text-align: left;
    padding-left: 20px;
  }

  .article .article_title a {
    display: block;
    width: 10%;
    float: right;
    font-size: 13px;
    text-align: right;
    color: #999;
    line-height: 60px;
    cursor: pointer;
    text-decoration: none;
    padding-right: 20px;
  }

  .article .article_btn {
    width: 100%;
    height: 60px;
    background: #f8f8fa;
    box-shadow: 0 1px 3px #ddd;
    border: 1px #fff solid;
    -webkit-box-shadow: 0 1px 3px #ddd;
    border-top: none;
    margin-top: 1px;
    overflow: hidden;

  }

  .article .article_btn .article_btn_nav .notesList {
    position: relative;
    right: 160px;
    top: 4px;
  }

  .article .article_btn .article_btn_nav ul li {
    display: inline-block;
    padding: 16px 16px;
    font-size: 17px;
    color: #333;
  }

  .article .article_btn .article_btn_nav ul li:hover {
    border-bottom: 1px solid #004FCB;
    color: #004FCB;
    cursor: pointer;
  }

  .article .article_content {
    display: flex;
    width: 100%;
    height: 160px;
    background: white;
    margin-top: 1px;
    border: 1px #fff solid;
    -webkit-box-shadow: 0 1px 3px #ddd;
  }

  .article .article_content img {
    width: 226px;
    height: 128px;
    padding: 10px 20px;
  }

  .article .article_content ul {
    overflow: hidden;
  }
  
  .article .article_content ul li {
    margin-top: 14px;
    position: relative;
    padding-left: 30px;
    line-height: 20px;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .article .article_content ul li:before {
    position: absolute;
    top: 0;
    left: 0;
    background: #414d55;
    width: 20px;
    height: 20px;
    display: block;
    font-size: 14px;
    color: #fff;
  }

  .article .article_content ul li :nth-child(1):before {
    content: "1";
  }
</style>