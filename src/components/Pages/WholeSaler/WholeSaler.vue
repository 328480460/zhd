<template>
    <div class="wholesaler">
        <h2 class="position">常用批发商</h2>
        <ul class="salerList">
            <li v-for=" item in salerList">
                <div class="wraper">
                    <img :src="item.img">
                    <p class="salerName">{{item.name}}</p>
                </div>
                <div class="hoverWraper" @click="innerSaler(item.url)">
                    <p class="inter">
                        进入商家
                    </p>
                    <div class="delete" @click.stop.prevent="deleSaler(item)">
                        <el-button type="info" icon="delete" size="small"></el-button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="nodata" v-if="salerList.length === 0">
        	暂无常用批发商
        </div>
    </div>
</template>
<script>
import wholesaler from './wholesaler.js';
export default wholesaler;
</script>
<style scoped lang="less">
.position {
    font-size: 18px;
    font-weight: 700;
}
.nodata {
	margin-top: 20px;
	width: 99%;
	text-align: center;
	height: 200px;
	line-height: 200px;
	font-size: 20px;
	background-color: #D6D6D6;
}
.salerList {
    margin-top: 20px;
    li {
        display: inline-block;
        margin: 20px;
        padding: 10px;
        background-color: #D6D6D6;
        position: relative;
        &:hover {
            .hoverWraper {
                display: block;
            }
            .delete {
                display: block;
            }
        }
        .wraper {
            width: 150px;
            height: 150px;
            position: relative;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
            .salerName {
                position: absolute;
                text-align: center;
                width: 100%;
                bottom: -30px;
                font-size: 14px;
            }
        }
        .hoverWraper {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: right;
            cursor: pointer;
            .inter {
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                height: 30px;
                line-height: 30px;
                width: 100%;
                background-color: rgba(0, 0, 0, .5);
                font-size: 14px;
                color: #fff;
                text-align: center;
            }
            .delete {
                font-size: 12px;
            }
        }
    }
}
</style>
