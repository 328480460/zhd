import Vue from 'vue'
import Router from 'vue-router'

import RouterPages from '../components/index.js';

Vue.use(Router)


export default new Router({
    // mode:'history',
    routes: [{
        name: 'home',
        path: '/',
        redirect: '/home/index'
    }, {
        path: '/home',
        component: RouterPages.Home,
        redirect: '/home/index',
        children: [ {
            path: 'index',
            name: 'index',
            component: RouterPages.Index

        }, {
            path: 'buyCar',
            name: 'buyCar',
            component: RouterPages.BuyCar

        }, {
            path: 'myOrder',
            name: 'myOrder',
            component: RouterPages.Pages.myOrder

        }, {
            name: 'myMessage',
            path: 'myMessage',
            component: RouterPages.Pages.myMessage

        }, {
            name: 'address',
            path: 'address',
            component: RouterPages.Pages.address
        }, {
            name: 'revisePassWord',
            path: 'revisePassWord',
            component: RouterPages.Pages.revisePassWord
        }, {
            name: 'userInfo',
            path: 'userInfo',
            component: RouterPages.Pages.userInfo
        }, {
            name: 'wholeSaler',
            path: 'wholeSaler',
            component: RouterPages.Pages.wholeSaler
        }, ]
    }, {
        name: 'login',
        path: '/login',
        component: RouterPages.Login
    }]
})
