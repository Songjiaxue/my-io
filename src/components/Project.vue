<template>
    <el-main class="main">
        <el-aside width="360px" class="aside-left">
            <div class="intro-wrap b-b">
                <div class="intro-name">
                    <b>吃饭不想吃肉</b>
                </div>
                <div class="intro-main">
                    <div class="intro-img">
                        <img src="../assets/head.jpg" alt="its me!">
                    </div>
                    <div class="intro-info">
                        <p>
                            <b>小仙女~</b>
                        </p>
                        <p>
                            <span class="el-icon-mobile-phone el-icon"></span>13216169636
                            <span></span>
                        </p>
                        <p>
                            <span class="el-icon-message el-icon"></span>457191858@qq.com
                            <span></span>
                        </p>
                        <p>
                            <span class="el-icon-location-outline el-icon"></span>四川，成都
                            <span></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="skill-wrap b-b">
                <p>
                    <b>前端基本技能：</b>
                </p>
                <p>html,css,jquery,photoshop</p>
                <p>
                    <b>主流框架：</b>
                </p>
                <p>vue,vue-router,bootstrap,element-ui,iview</p>
                <p>expressjs(基于nodejs)</p>
                <p>
                    <b>前端自动化构建工具：</b>
                </p>
                <p>gulp,webpack,requirejs</p>
            </div>
            <div class="further-wrap">
                <p>
                    <b>进一步需要学习：</b>
                </p>
                <p>vue+vuex+vue-router+element-ui+express</p>
                <p>项目如何部署到服务器？</p>
            </div>
        </el-aside>
        <el-main class="aside-right">
            <el-row>
                <el-col :span="7">
                    <div class="img-wrap">
                        <img src="../assets/dingdangmao.jpg" alt="">
                    </div>
                    <div class="text-wrap">
                        <p class="font-bold">
                            <b>
                                <a href="https://songjiaxue.github.io/#/dingdangmao">https://songjiaxue.github.io/#/dingdangmao</a>
                            </b>
                        </p>
                        <p>主要技术：css3</p>
                        <p>静态页面，叮当猫，纯css3编写</p>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="img-wrap">
                        <img src="../assets/dingdangmao.jpg" alt="">
                    </div>
                    <div class="text-wrap">
                        <p class="font-bold">
                            <b>
                                <a href="https://songjiaxue.github.io/#/dingdangmao">https://songjiaxue.github.io/#/dingdangmao</a>
                            </b>
                        </p>
                        <p>主要技术：css3</p>
                        <p>静态页面，叮当猫，纯css3编写</p>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="img-wrap">
                        <img src="../assets/dingdangmao.jpg" alt="">
                    </div>
                    <div class="text-wrap">
                        <p class="font-bold">
                            <b>
                                <a href="https://songjiaxue.github.io/#/dingdangmao">https://songjiaxue.github.io/#/dingdangmao</a>
                            </b>
                        </p>
                        <p>主要技术：css3</p>
                        <p>静态页面，叮当猫，纯css3编写</p>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="img-wrap">
                        <img src="../assets/dingdangmao.jpg" alt="">
                    </div>
                    <div class="text-wrap">
                        <p class="font-bold">
                            <b>
                                <a href="https://songjiaxue.github.io/#/dingdangmao">https://songjiaxue.github.io/#/dingdangmao</a>
                            </b>
                        </p>
                        <p>主要技术：css3</p>
                        <p>静态页面，叮当猫，纯css3编写</p>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="img-wrap">
                        <img src="../assets/dingdangmao.jpg" alt="">
                    </div>
                    <div class="text-wrap">
                        <p class="font-bold">
                            <b>
                                <a href="https://songjiaxue.github.io/#/dingdangmao">https://songjiaxue.github.io/#/dingdangmao</a>
                            </b>
                        </p>
                        <p>主要技术：css3</p>
                        <p>静态页面，叮当猫，纯css3编写</p>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-main>
</template>
<script>
export default {
    name: 'Project',
    data() {
        return {
            activeIndex: '1'
        }
    },
    mounted: function() {
        
    }
}
</script>
<style scoped>
.b-b {
    border-bottom: 1px solid #eee;
    padding: 10px;
}

； .further-wrap {
    padding: 10px;
}

.main {
    margin: 80px 50px;
    overflow: hidden;
    position: relative;
    padding: 0;
}

.el-aside.aside-left {
    position: absolute;
    top: 0;
    padding: 0 20px;
    height: 100%;
    background-color: #f5f5f5;
    text-align: left;
    font-size: 12px;
    overflow: hidden;
}

.aside-right {
    margin-left: 360px;
    padding: 0 40px;
    font-size: 12px;
    margin-top: -15px;
}

.intro-wrap {
    text-align: left;
}

.intro-img {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-top: 3px;
}

.intro-info {
    margin-left: 115px;
    font-size: 12px;
    text-align: left;
}

.intro-info .el-icon {
    margin-right: 5px;
}

.aside-right .el-col {
    border: 1px solid #eee;
    margin: 15px 15px 0 15px;
    text-align: left;
}

.aside-right .text-wrap {
    padding: 0 10px 10px;
    word-wrap: break-word;
    word-break: break-all;
}

.aside-right .img-wrap {
    height: 150px;
}

.aside-right .img-wrap img {
    width: 100%;
    height: 100%;
    display: block;
}

.aside-right .font-bold {
    font-size: 14px;
}
</style>

