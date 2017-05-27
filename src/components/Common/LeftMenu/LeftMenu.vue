<template>
    <div class="menu">
        <el-row class="tac">
            <el-col>
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="select">
                    <el-submenu :index="user.name" v-for="(user,key) in  menuData" :key=key>
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
export default {
    name: 'leftmenu',
    created() {
        this.$ajax.get('api/userInfo').then((res) => {
            this.$nextTick(() => {
            this.menuData = res.data.userInfo[this.userMap[this.userType]];
                this.init()
            })
        }).catch((err) => {
            console.log(error);
        })
    },
    mounted() {

    },
    data() {
        return {
            userMap: ['suport', 'admin'],
            userType: 0, // 用户类型
            menuData: [], // 用户信息
        }
    },
    methods: {
        select(key, keyPath, router) {
            var _path = router.route.path
                // console.log(router.route.path);
            this.$router.replace({
                path: _path
            });
            this.$store.commit('changeNavActive', _path);
        },
        init() {
            var current = this.$store.state.menuActiveIndex; // 默认选中第一页
            this.$store.commit('changeMenuActive',current);
        }
    },
    computed: {
        activeIndex() {
            return this.$store.state.menuActiveIndex
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
