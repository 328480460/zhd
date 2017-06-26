<template>
    <div class="header clearFix">
        <div class="logo">
            <img src="./image/logo.png" height="60">
            <p>志恒达订单系统</p>
        </div>
        <div class="nav">
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="router" @select='handleSelect'>
                <el-menu-item index="/home/index">首页</el-menu-item>
                <el-menu-item index="/home/myOrder">我的订单</el-menu-item>
                <el-menu-item index="/home/buyCar"><i class="el-icon-document"></i>购物车</el-menu-item>
                <el-menu-item index="/home/myMessage"> <i class="el-icon-document"></i>消息({{loginState.messageCount}})</el-menu-item>
                <li class="el-menu-item" v-if="this.$store.state.isLogin">{{loginState.userName}}</li>
                <li class="el-menu-item" @click="exit">{{loginText}}</li>
            </el-menu>
        </div>
    </div>
</template>
<script>
export default {
    name: 'headnav',
    data() {
        return {
            router: false
        }
    },
    props: {
        loginState: {
            type: Object,
            default: function() {
                return {
                    messageCount: 0,
                    userName: 'admin'
                }
            }
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log('key');
            // 如果未登录myorder和mymessage点击跳转到登录页面
            if (!this.$store.state.isLogin) {
                if (/myOrder/.test(key) || /myMessage/.test(key)) {
                    this.$router.push({
                        path: '/login'
                    });
                    return false;
                }
            }
            // 如果登录
            this.$router.push({
                path: key
            })

            this.$emit('showMenu', key);
        },
        exit() {
            console.log('exit');
            if (!this.$store.state.isLogin) {
                this.$router.push({
                    path: '/login'
                });
                return;
            }

            this.$confirm('是否退出登录', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 将登录状态置为false
                this.$store.commit('set_login_state',false);

                // 清除state中的token
                this.$store.commit('set_user_token',null);

                // 清除 state中的userType
                this.$store.commit('set_user_type',null);
                
                // 清除session中的token和userType
                this.$store.commit('remove_sesson');
                
                this.$router.push({
                    path: '/login'
                });
            }).catch(() => {
                
            });

        }
    },
    computed: {
        activeIndex() {
            return this.$store.state.headerCurRouter
        },

        loginText() {
            return this.$store.state.isLogin ? '退出' : '登陆';
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
