<template>
  <div class="header">
    <div class="right_box recommend_container">
      <h3 class="header_name">模板推荐</h3>
      <div>
        <ul>
          <li v-for="item in formwork" :key="item">
            <a href="#">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right_box friendlink_container">
      <h3 class="header_name">友情链接</h3>
      <div>
        <ul>
          <li v-for="item in friendLinks" :key="item">
            <a href="#">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      formwork: [
        "最新应用模板一",
        "最新应用模板二",
        "最新应用模板三",
        "最新应用模板四",
        "最新应用模板五",
        "最新应用模板六"
      ],
      friendLinks: [
        "友情链接1",
        "友情链接2",
        "友情链接3",
        "友情链接4",
        "友情链接5",
        "友情链接6"
      ]
    };
  }
};
</script>

<style scoped lang="less">
html,
body,
ul,
li,
h3,
a {
  margin: 0;
  padding: 0;
  border: none;
}
.header {
  float: right;
  float: right;
  padding-top: 20px;
  width: 300px;
  background-color: #f0f0f0;
}

.right_box {
  overflow: hidden;
  margin-bottom: 24px;
  background: #f8f8fa;
  border: 1px #fff solid;
  box-shadow: 0 0 3px #ddd;
  -webkit-box-shadow: 0 1px 3px #ddd;
}
.header_name {
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid #cdcdcd;
  height: 56px;
  line-height: 56px;
}
.recommend_container div,
.friendlink_container div {
  padding: 10px 20px 12px 20px;
  font-size: 13px;
  color: #666;
}
div ul {
  overflow: hidden;
}
div ul li {
  margin-top: 18px;
  position: relative;
  padding-left: 30px;
  line-height: 20px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recommend_container div ul li:before {
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
.recommend_container div ul li:nth-child(1):before,
.recommend_container div ul li:nth-child(2):before,
.recommend_container div ul li:nth-child(3):before {
  background: #3a76bf;
  color: #fff;
}
.recommend_container div ul li:nth-child(1):before {
  content: "1";
}
.recommend_container div ul li:nth-child(2):before {
  content: "2";
}
.recommend_container div ul li:nth-child(3):before {
  content: "3";
}
.recommend_container div ul li:nth-child(4):before {
  content: "4";
}
.recommend_container div ul li:nth-child(5):before {
  content: "5";
}
.recommend_container div ul li:nth-child(6):before {
  content: "6";
}
div ul li a {
  color: #666;
  text-decoration: none;
  text-align: left;
  display: block;
}
div ul li a:hover {
  color: #3a76bf;
}
.friendlink_container div ul li:before {
  position: absolute;
  top: 35%;
  left: 5px;
  content: "";
  width: 8px;
  height: 8px;
  display: block;
  border-radius: 50%;
  background: rgb(58, 118, 191);
}
</style>