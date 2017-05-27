<template>
    <div id="app">
        <head-nav :activeIndex = 'activeIndex'></head-nav>
        <router-view></router-view>
    </div>
</template>
<script>
import Common from './components/Common/index.js';
export default {
    name: 'app',
    components: Common,
    computed: {
        activeIndex() {
            return this.$store.state.navActiveIndex;
        }
    }
}
</script>
<style scoped lang='less'>
#app {
    min-width: 1000px;
}

@import url('assets/reset.less');
.bounce-enter-active {
    animation: bounce-in .5s;
    -webkit-animation: bounce-in .5s;
}

.bounce-leave-active {
    animation: bounce-out .2s;
    -webkit-animation: bounce-out .2s;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(0);
    }
}
</style>
