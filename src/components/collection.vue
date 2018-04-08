<template>
    <el-main class="main">
        <el-row>
            <el-col :span="6" class="nav-wrap">
                <el-menu default-active="1" class="el-menu-vertical-demo" @select="select">
                    <el-menu-item index="1">
                        <i class="el-icon-tickets"></i>
                        <span>前端网站</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">项目框架</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">页面样式</el-menu-item>
                            <el-menu-item index="2-2">插件</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">文档</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span>tips</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="18" class="main-wrap" >
                <el-row class="main-item" v-for="(item,index) in activeInfo" :key="index" v-if="activeInfo.length>0">
                    <el-col :span="2">
                        <div class="img-wrap">
                            <img src="../assets/head.jpg" />
                        </div>
                    </el-col>
                    <el-col :span="22" class="intro-wrap">
                        <p>
                            <b>{{item.text}}</b>
                        </p>
                        <p>
                            <a href="javascript: void(0)" @click.prevent="openUrl(item.url)">{{item.url}}</a>
                        </p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </el-main>
</template>
<script>
export default {
    name: 'Collection',
    data() {
        return {
            allInfo: {
                1: [
                    {
                        text: 'w3cplus提供了大量的css,css3,sass,responsive,mobile等最新前端技术文章、demo及下载资源，以一起学习进步，共同分享为原则，为打造优秀的前端学习教程而努力。',
                        url: 'https://www.w3cplus.com/'
                    },
                    {
                        text: '博客园是一个面向开发者的知识分享社区。自创建以来，博客园一直致力并专注于为开发者打造一个纯净的技术交流社区，推动并帮助开发者通过互联网分享知识，从而让更多开发者从中受益。博客园的使命是帮助开发者用代码改变世界。',
                        url: 'https://www.cnblogs.com/'
                    },
                    {
                        text: '大前端是一个关注前端开发、用户体验设计、HTML5、CSS3、Javascript的前端开发独立博客。',
                        url: 'http://www.daqianduan.com/'
                    },
                    {
                        text: '掘金是一个帮助开发者成长的社区，是给开发者用的 Hacker News，给设计师用的 Designer News，和给产品经理用的 Medium。',
                        url: 'https://juejin.im/'
                    }
                ],
                '2-1': [
                    {
                        text: 'PC端',
                        url: 'http://flatfull.com/themes/angulr/html/ui_icon.html'
                    },
                    {
                        text: 'webAPP',
                        url: 'http://flatfull.com/themes/flatkit/html/button.html'
                    },
                    {
                        text: ' layer是一款口碑极佳的web弹层组件，她具备全方位的解决方案，致力于服务各个水平段的开发人员，您的页面会轻松地拥有丰富而友好的操作体验。',
                        url: 'http://layer.layui.com/'
                    }
                ],
                '2-2': [
                    {
                        text: ' layer是一款口碑极佳的web弹层组件，她具备全方位的解决方案，致力于服务各个水平段的开发人员，您的页面会轻松地拥有丰富而友好的操作体验。',
                        url: 'http://layer.layui.com/'
                    },
                    {
                        text: 'Bootstrap Paginator 分页插件参数介绍及使用',
                        url: 'http://www.cnblogs.com/moretry/p/4441728.html'
                    },
                    {
                        text: '#mricode.pagination jQuery 分页插件',
                        url: 'https://github.com/mricle/Mricode.Pagination'
                    },
                    {
                        text: 'Parsley, the ultimate frontend javascript form validation library',
                        url: 'http://parsleyjs.org/doc/index.html#events-list'
                    },
                    {
                        text: 'A simple jQuery image cropping plugin.',
                        url: 'http://fengyuanchen.github.io/cropper/'
                    },
                    {
                        text: 'js手机移动端选择插件 mobileSelect.js',
                        url: 'http://blog.csdn.net/oulihong123/article/details/58327247'
                    },
                    {
                        text: 'bootstrap datepicker时间范围',
                        url: 'http://bootstrap-datepicker.readthedocs.io/en/latest/events.html#changedate'
                    },
                    {
                        text: 'LCalendar v1.71移动端日期时间选择控件',
                        url: 'https://github.com/xfhxbb/lCalendar'
                    }
                    
                ],
                '3': [
                    {
                        text: 'git教程',
                        url: 'https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374385852170d9c7adf13c30429b9660d0eb689dd43a000'
                    },
                    {
                        text: 'css揭秘',
                        url: 'https://l-hammer.github.io/You-need-to-know-css/#/single-projection'
                    },
                    {
                        text: 'webpack入门',
                        url: 'https://www.jianshu.com/p/b83a251d53db'
                    },
                    {
                        text: 'vue相关开源项目汇总',
                        url: 'https://github.com/opendigg/awesome-github-vue'
                    }
                ],
                '4': [
                    {
                        text: '闭包、IIFE、原型、函数与对象',
                        url: 'http://www.cnblogs.com/best/p/6206268.html#_label0'
                    },
                    {
                        text: 'Express与MySQL联调',
                        url: 'http://blog.csdn.net/kkdestiny/article/details/51434806'
                    },
                    {
                        text: 'Bootstrap FileInput中文API整理',
                        url: 'http://www.cnblogs.com/huijiBreathe/archive/2017/11/23/7885158.html'
                    },
                    {
                        text: 'Jquery mobiscroll 移动设备(手机)wap日期时间选择插件以及滑动、滚动插件',
                        url: 'https://www.cnblogs.com/linJie1930906722/p/6072984.html'
                    },
                     {
                        text: '手机移动端WEB资源整合',
                        url: 'http://www.daqianduan.com/6281.html'
                    },
                    {
                        text: 'vue proxyTable 接口跨域请求调试',
                        url: 'https://www.cnblogs.com/congxueda/p/7087144.html'
                    },
                    {
                        text: 'vue系列笔记',
                        url: 'http://www.cnblogs.com/congxueda/p/7735831.html'
                    }
                    
                ]
            },
            activeInfo: []

        }
    },
    mounted: function() {
        this.activeInfo = this.allInfo[1]
    },
    methods: {
        select(index, indexPath) {
            console.log(index, indexPath);
            this.activeInfo = this.allInfo[index]
        },
        openUrl(url){
            window.open(url);
        }
    }
}
</script>
<style>
footer {
    margin-top: -40px;
}
</style>

<style scoped>
.main {
    min-height: 100vh;
    padding: 80px 50px;
    text-align: left;
}

.main-wrap {
    padding: 20px;
}

.intro-wrap {
    padding-left: 15px;
}

p {
    margin-top: 0;
}

.main-item {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}
.main-item a{
    word-wrap: break-word;
    word-break: normal;
}
</style>


