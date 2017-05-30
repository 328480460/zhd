<template>
    <div class="home">
    	<head-nav :activeIndex = 'activeIndex' @showMenu ='showMenu'></head-nav>
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
    		menuToggle: false
    	}
    },
    computed: {
        activeIndex() {
            return this.$store.state.navActiveIndex;
        },
    },
    methods: {
        showMenu(toggleFlag) {
        	console.log(toggleFlag);
        	if(/myMessage/.test(toggleFlag) || /myOrder/.test(toggleFlag)) {
        		this.menuToggle = true;
        		return;
        	}
        	this.menuToggle = false;
        }

    }
}
</script>
<style scoped lang='less'>

.right-content {
    margin-bottom: 60px;
}
</style>
