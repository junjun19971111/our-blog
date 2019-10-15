<template>

        <div class="right_box tuijian_moban">
            <h3 class="header_name">模板推荐</h3>
            <div>
                <ul>
                 <li><a href="#">最新模板-律所类模板</a></li>
                 <li><a href="#">最新模板-律所类模板</a></li>
                 <li><a href="#">最新模板-律所类模板</a></li>
                 <li><a href="#">最新模板-律所类模板</a></li>
                 <li><a href="#">最新模板-律所类模板</a></li>
                 <li><a href="#">最新模板-律所类模板</a></li>
                </ul>
            </div>  
        </div>  
</template>

<script>
export default {
    name:'Recommend',
    // data(){
    //     titleName:'模板推荐'
    // }
}
</script>

<style scoped lang="less">

html, body, ul, li, h3,a {
    margin:0;
    padding:0;
    border: none;
}

.right_box {
    overflow: hidden;
    margin-bottom: 24px;
    background: #f8f8fa;
    border: 1px #fff solid;
    box-shadow: 0 0 3px #ddd;
    -webkit-box-shadow: 0 1px 3px #ddd;
    width: 300px;
    height: 300px;
    margin-top:100px;
    margin-left: 300px;
}
.header_name{
   padding-left: 20px;
   text-align: left;
   border-bottom: 1px solid #cdcdcd;
   height: 56px;
   line-height: 56px;
}
.tuijian_moban div {
    padding: 10px 20px 12px 20px;
    font-size: 13px;
    color: #666;
}
.tuijian_moban div ul {
    overflow: hidden;
}
.tuijian_moban div ul li {
    margin-top: 17.4px;
    ;
    position: relative;
    padding-left:30px;
    line-height: 20px;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.tuijian_moban div ul li:before {
    position: absolute;
    // text-indent: .4em;
    top: 0;
    left: 0;
    background:#414d55;
    width: 20px;
    height: 20px;
    display: block;
    font-size: 14px;
    color: #fff;
}
.tuijian_moban div ul li:nth-child(1):before, .tuijian_moban div ul li:nth-child(2):before, .tuijian_moban div ul li:nth-child(3):before {
    background: #3a76bf;
    color: #FFF;
}
.tuijian_moban div ul li:nth-child(1):before {
    content:"1";
}
.tuijian_moban div ul li:nth-child(2):before {
    content:"2";
}
.tuijian_moban div ul li:nth-child(3):before {
    content:"3";
}
.tuijian_moban div ul li:nth-child(4):before {
    content:"4";
}
.tuijian_moban div ul li:nth-child(5):before {
    content:"5";
}
.tuijian_moban div ul li:nth-child(6):before {
    content:"6";
}
.tuijian_moban div ul li a {
    color: #666;
    padding-right:74px;
    text-decoration: none;
}
.tuijian_moban div ul li a:hover {
    color: #3a76bf;
}
// .youlian_list div {
//     padding: 10px 20px 12px 20px;
//     font-size: 13px;
//     color: #666;
// }
// .youlian_list div ul {
//     overflow: hidden;
// }
// .youlian_list div ul li {
//     margin-top: 17.4px;
//     ;
//     position: relative;
//     padding-left:30px;
//     line-height: 20px;
//     font-size: 15px;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
// }
// .youlian_list div ul li:before {
//     position: absolute;
//     top: 35%;
//     left: 5px;
//     content:"";
//     width: 8px;
//     height: 8px;
//     display: block;
//     border-radius: 50%;
//     background: rgb(58, 118, 191);
// }
    
</style>