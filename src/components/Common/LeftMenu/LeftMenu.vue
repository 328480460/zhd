<template>
    <div class="menu">
        <el-row class="tac">
            <el-col>
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="select">
                    <el-submenu :index="user.name" v-for="(user,key) in  menuList" :key=key>
                        <template slot="title"><i :class="user.iconClass"></i> {{user.text}}
                        </template>
                        <el-menu-item :index="child.name" :route="child.path" v-for="(child,its) in user.child" :key=its>
                            <i :class="child.iconClass"></i>{{child.text}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import userInfo from '../../../data/userInfo.js';
export default {
    name: 'leftmenu',
    created() {
        // this.$ajax.get('../../../data/userInfo.js').then((res) => {
        //     this.menuList = res.data.userInfo[this.userMap[this.userType]];
        //     this.$nextTick(() => {
        //         this.init()
        //     })
        // }).catch((err) => {
        //     console.log(error);
        // })
        this.menuList = userInfo[this.userMap[this.userType]];
        this.$nextTick(() => {
            this.init()
        })

    },
    data() {
        return {
            userMap: ['suport', 'admin'],
            userType: 0, // 用户类型
            menuList: [], // 用户信息
        }
    },
    methods: {
        select(key, keyPath, router) {
            var _path = router.route.path
            this.$router.push({
                path: _path
            });
        },

        init() {
            this.updateCurMenu();
        },
        // 根据当前路由，更新当前选中状态
        updateCurMenu(route) {
            var route = route || this.$route;
            if (route.matched.length) {
                // console.log(route);
                var rootPath = route.matched[0].path;
                var fullPath = route.path;
                var subPath = fullPath.replace(rootPath, '');
                this.$store.dispatch('set_cur_route', {
                    rootPath,
                    fullPath,
                    subPath
                });
            } else {
                this.$router.push('/404');
            }
        }
    },
    computed: {
        activeIndex() {
            return this.$store.state.leftCurRouter
        }
    },
    watch: {
        $route(to, from) {
            console.log('watch');
            this.updateCurMenu(to);
        }
    }
}
</script>
<style scoped lang='less'>
.menu {
    width: 180px;
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0;
    overflow: hidden;
    background-color: rgb(238, 241, 246);
    .tac {
        width: 100%;
    }
}
</style>
