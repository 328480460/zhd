// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// root component
import App from './App'

// router
import router from './router'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// vuex
import store from './vuex/store.js';

// axios
import axios from 'axios';
Vue.prototype.$ajax = axios;


Vue.config.productionTip = false


// 防止刷新失去登录状态和用户信息操作
if (sessionStorage.getItem('userToken')) {
    store.commit('set_login_state', true);
    store.commit('set_user_token', sessionStorage.getItem('userToken'));
}
if (sessionStorage.getItem('userType')) {
    store.commit('set_user_type', sessionStorage.getItem('userType'))
}

// 权限登录设置
router.beforeEach((to, from, next) => {
    var userToken = store.state.userToken;
    console.log(userToken, to.path !== '/login')
        // 如果未登录
    if (!userToken && to.path !== '/login') {
        console.log('nologin')
        next({ path: '/login' });

    } else {
        next();
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
