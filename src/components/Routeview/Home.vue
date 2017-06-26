<template>
    <div class="home">
    	<head-nav  @showMenu ='showMenu'></head-nav>
        <left-menu v-if="menuToggle"></left-menu>
        <div class="page">
        	<router-view></router-view>
        </div>
    </div>
</template>
<script>
import Common from '../Common/index.js';
export default {
    name: 'home',
    components: Common,
    data() {
    	return {
    		menuToggle: true
    	}
    },
    methods: {
        showMenu(toggleFlag) {
        	if(/myMessage/.test(toggleFlag) || /myOrder/.test(toggleFlag)) {
        		this.menuToggle = true;
        		return;
        	}
        	this.menuToggle = false;
        }

    },
    created() {
        var route = route || this.$route;
        if(/index/.test(route.name) || !this.$store.state.isLogin){
            this.menuToggle = false;
        }
        
    }
}
</script>
<style scoped lang='less'>
    .page {
        position: fixed;
        left: 190px;
        top: 80px;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
    }
</style>