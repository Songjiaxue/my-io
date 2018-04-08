<script>
import '../plugins/prefixfree.min.js'

</script>
<template>
  <div>
    <el-aside width="80px" class="aside">
      <div class="aside-top">
        <a href="">
          <i class="el-icon-refresh"></i>
        </a>
      </div>
      <div class="aside-center">
        <a href="javascript: void(0)" @click="transLeft">
          <i class="el-icon-menu"></i>
        </a>
      </div>
      <div class="aside-bottom">
        <ul>
          <li>
            <a href="/#/project/1">
              <i class="el-icon-picture-outline"></i>
            </a>
          </li>
          <li>
            <a href="/#/collection/2">
              <i class="el-icon-star-off"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="el-icon-edit-outline"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="el-icon-document"></i>
            </a>
          </li>
        </ul>
      </div>
    </el-aside>
    <div class="aside-modal">
      <ul>
        <li>
          <a href="">
            <h1>HOME</h1>
          </a>
          <p>网站入口</p>
        </li>
        <li>
          <a href="/#/project/1">
            <h1>PROJECT</h1>
          </a>
          <p>我的项目，包括PC端网站，微信公众号，小程序，APP等。</p>
        </li>
        <li>
          <a href="/#/collection/2">
            <h1>COLLECTION</h1>
          </a>
          <p>我的收藏，包括html，css，js等。</p>
        </li>
        <li>
          <a href="/#/note/3">
            <h1>NOTE</h1>
          </a>
          <p>我的笔记，工作中遇到的坑，或者平时看到的有意思的东西。</p>
        </li>
        <li>
          <a href="/#/document/4">
            <h1>DOCUMENT</h1>
          </a>
          <p>我的文档，随笔，杂七杂八的。</p>
        </li>
      </ul>
    </div>
    <el-container>
      <el-main>
        <div class="stars"> </div>
        <div class="trans-center">
          <div class="title">
            <div class="title-hello">HELLO!</div>
            <div class="title-wel">WELCOME!</div>
          </div>
          <a href="/#/project/1" class="check-out">
            <span>CHECK OUT MY PROJECT</span>
          </a>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import '../plugins/stopExecutionOnTimeout.js'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Appssssss'
    }
  },
  mounted:function(){
      var stars = 800;
	    var $stars = $('.stars');
	    var r = 800;
	    for (var i = 0; i < stars; i++) {
	        if (window.CP.shouldStopExecution(1)) {
	            break;
	        }
	        var $star = $('<div/>').addClass('star');
	        $stars.append($star);
	    }
	    window.CP.exitedLoop(1);
	    $('.star').each(function () {
	        var cur = $(this);
	        var s = 0.2 + Math.random() * 1;
	        var curR = r + Math.random() * 300;
	        cur.css({
	            transformOrigin: '0 0 ' + curR + 'px',
	            transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + Math.random() * 360 + 'deg) rotateX(' + Math.random() * -50 + 'deg) scale(' + s + ',' + s + ')'
	        });
	    });

  },
  methods: {
    transLeft: function(){
      if($('.aside-modal').hasClass('trans-left')){
        $('.aside-modal').removeClass('trans-left');
        $('.aside-modal').addClass('trans-right');
      }
      else{
        $('.aside-modal').removeClass('trans-right');
        $('.aside-modal').addClass('trans-left');
      }
    }
  }
}
</script>
<style>
.star {
  width: 2px;
  height: 2px;
  background: #F7F7B6;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0 -300px;
  transform: translate3d(0, 0, -300px);
  backface-visibility: hidden;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  background-color: #000;
  overflow: hidden;
  position: absolute;
  left: 80px;
  right: 0;
  top: 0;
  bottom: 0;
}


.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  bottom: 0;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
}



.aside {
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
}

.aside-top {
  font-size: 45px;
  margin-top: 20px;
}

.aside-center {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 0;
  right: 0;
  transform: translate(0, -50%);
  font-size: 40px;
}

.aside-bottom {
  position: absolute;
  bottom: 20px;
  text-align: center;
  left: 0;
  right: 0;
}

.aside-bottom li {
  padding-bottom: 10px!important;
}

.aside-modal {
  position: absolute;
  margin-left: -420px;
  top: 0;
  bottom: 0;
  width: 340px;
  padding: 40px 40px 40px 120px;
  background-color: #f5f5f5;
  text-align: left;
  z-index: 888;
}

.aside-modal li:first-child a,
.aside-modal li:first-child p {
  color: #00a8e8
}

.aside-modal li:not(:first-child) p {
  color: #6A6B6F;
}

.title {
  font-size: 70px;
  color: #fff;
  margin-bottom: 50px;
}

.title div {
  display: inline-block;
}

.title-hello:hover {
  transform: rotate(-7deg);
}

.title-wel:hover {
  transform: rotate(7deg);
}

.check-out:hover {
  background-color: #0085BA;
}

.check-out {
  background-color: #00a8e8;
  border-radius: 50px;
  ;
  color: #fff;
  font-size: 18px;
  margin-top: 30px;
  padding: 10px 20px;
}

.trans-left {
  animation: trans-left 0.5s forwards;
}

.trans-right {
  animation: trans-right 0.5s forwards;
}

.trans-center {
  position: absolute;
  left: 50%;
  top: 40%;
  width: 100%;
  transform: translate(-50%, -50%);
}

@keyframes trans-left {
  from {
    margin-left: -420px;
  }
  to {
    margin-left: 0;
  }
}

@keyframes trans-right {
  from {
    margin-left: 0;
  }
  to {
    margin-left: -420px;
  }
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}
</style>
