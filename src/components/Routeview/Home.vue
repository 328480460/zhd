<template>
    <div class="home">
        <left-menu></left-menu>
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
}
</script>
<style scoped lang='less'>

.right-content {
    margin-bottom: 60px;
}
</style>
