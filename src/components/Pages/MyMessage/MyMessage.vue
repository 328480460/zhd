<template>
    <div class="myMessage">
        <h2 class="position">我的消息</h2>
        <ul class="msgList">
            <li v-for="item in messageList">
                <p class="time">{{item.time}}</p>
                <div class="msgWraper">
                    <h4 class="title">订单发货提醒</h4>
                    <p>您的订单：{{item.orderNum}}，已发货，请注意查收。</p>
                    <!-- <el-button type="primary" icon="delete" class="deleteBtn"></el-button> -->
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import myMessage from './myMessage.js';
export default myMessage;
</script>
<style scoped lang="less">
.position {
    font-size: 18px;
    font-weight: 700;
}

.msgList {
    font-size: 14px;
    margin-top: 20px;
    background-color: #EAEAEA;
    border-radius: 4px;
    padding: 5px;
    li {
        margin-top: 10px;
        padding: 10px;
        .msgWraper {
            background-color: #fff;
            margin-top: 10px;
            padding: 10px;
            border-radius: 4px;
	        .title {
	        	margin-bottom: 10px;
	        	padding-top: 10px;
	        }
	        p {
	        	display: inline-block;
	        	margin-top: 10px;

	        }
        }
    }
}
</style>
