<template>
    <el-header>
        <div class="logo">Emmmm</div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/project/1">我的项目</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/collection/2">我的收藏</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/project/3">我的笔记</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/project/4">我的文档</router-link></el-menu-item>
        </el-menu>
    </el-header>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            activeIndex: '1'
        }
    },
    mounted: function() {
        console.log(this.$route.params.id);
        this.activeIndex = this.$route.params.id;
    },
    methods: {

    }
}
</script>
<style scoped>
    .el-header{
        background-color: #000;
        color: #fff;
        line-height: 60px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;
    }
    .el-header .logo{
        position: absolute;
        left: 10px;
    }
    .el-header .el-menu{
        display: inline-block;
        background-color: #000;
        color: #a4a4a4;
    }
    .el-header .el-menu-item.is-active,.el-header .el-menu-item:hover{
        color: #fff;
        background-color: #000;
    }
</style>


