import Vue from 'vue'
import Router from 'vue-router'

import RouterPages from '../components/index.js';

Vue.use(Router)

export default new Router({
    // mode:'history',
    routes: [{
        path: '/',
        name: 'Home',
        redirect: '/Home'
    }, {
        path: '/Home',
        name: 'Home',
        component: RouterPages.Home,
        children: [{
            path: '/',
            redirect: 'Index',
        }, {
            path: 'Index',
            name: 'Index',
            component: RouterPages.Index

        }, {
            path: 'BuyCar',
            name: 'BuyCar',
            component: RouterPages.BuyCar

        }, {
            path: 'myOrder',
            name: 'myOrder',
            component: RouterPages.Pages.myOrder

        }, {
            path: 'myMessage',
            component: RouterPages.Pages.myMessage

        }, {
            path: 'address',
            component: RouterPages.Pages.address
        }, {
            path: 'revisePassWord',
            component: RouterPages.Pages.revisePassWord
        }, {
            path: 'userInfo',
            component: RouterPages.Pages.userInfo
        }, {
            path: 'wholeSaler',
            component: RouterPages.Pages.wholeSaler
        }, ]
    }, {
        path: '/Login',
        name: 'Login',
        component: RouterPages.Login
    }]
})