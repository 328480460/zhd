<template>
    <div class="header clearFix">
        <div class="logo">
            <img src="./image/logo.png" height="60">
            <p>志恒达订单系统</p>
        </div>
        <div class="nav">
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="router" @select='handleSelect'>
                <el-menu-item index="/index" >首页</el-menu-item>
                <el-menu-item index="/home/myOrder">我的订单</el-menu-item>
                <el-menu-item index="/buycar"><i class="el-icon-document"></i>购物车</el-menu-item>
                <el-menu-item index="/home/myMessage"> <i class="el-icon-document"></i>消息(2)</el-menu-item>
                <li class="el-menu-item">1510653945</li>
                <el-menu-item index="/login"><span class="exit">退出</span></el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
export default {
    name: 'headnav',
    data() {
        return {
            router: true
        }
    },
    props: {
        activeIndex: {
            type: String,
            default: '/index'
        }
    },
    methods: {
        handleSelect(key,keyPath) {
            // console.log(key, keyPath);
            this.$store.commit('changeMenuActive',key)
        }
    }
}
</script>
<style scoped lang='less'>
@import url('../../../assets/mixin.less');
.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    background-color: #324057;
    .logo {
        float: left;
        margin-left: 20px;
        img {
            display: inline-block;
            vertical-align: middle;
        }
        p {
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #bfcbd9;
        }
    }
    .nav {
        float: right;
        margin-right: 40px;
    }
}
</style>
