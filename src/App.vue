<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app',
    created() {
        // console.log('created');
        // // 防止刷新失去登录状态和用户信息操作
        // if (sessionStorage.getItem('userToken')) {
        //     this.$store.commit('set_login_state', true);
        //     this.$store.commit('set_user_token', sessionStorage.getItem('userToken'));
        // }
        // if (sessionStorage.getItem('userType')) {
        //     this.$store.commit('set_user_type', sessionStorage.getItem('userType'))
        // }
    }

}
</script>
<style scoped lang='less'>
body {
    margin: 0;
    padding: 0;
}
</style>
