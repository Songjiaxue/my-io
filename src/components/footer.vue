<template>
  <el-footer height="40px">
        HELLO
    </el-footer>
</template>
<script>
export default {
    name: 'Footer',
    data(){
        return {
            activeIndex: '1'
        }
    },
    mounted:function(){
    },
    methods: {
        
    }
}
</script>
<style scoped>
    .el-footer{
        font-size: 12px;
        background-color: #000;
        line-height: 40px;
        color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0; 
    }
</style>


