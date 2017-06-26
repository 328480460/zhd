<template>
    <div class="order">
        <ul class="orderState">
            <li class="el-button el-button--info is-plain active">
                全部订单(1)
            </li>
            <li class="el-button el-button--info is-plain">
                待付款(1)
            </li>
            <li class="el-button el-button--info is-plain">
                待发货(1)
            </li>
            <li class="el-button el-button--info is-plain">
                待收货(1)
            </li>
        </ul>
        <!-- 搜索 -->
        <el-form :inline="true" :model="formData" class="demo-form-inline">
            <div class="searchBox">
                <el-form-item>
                    <el-input v-model="formData.searchKey" placeholder="请输入商品名称或者订单号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">订单搜索</el-button>
                </el-form-item>
            </div>
            <div class="timePicker">
                <el-form-item label="成交时间">
                    <el-col :span="10">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="formData.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="10">
                        <el-form-item prop="date2">
                            <el-date-picker type="date" placeholder="选择日期" v-model="formData.date2" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
            </div>
            <div class="name">
                <el-form-item label="批发商">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
            </div>
            <div class="state">
                <el-form-item label="交易状态">
                    <el-select v-model="formData.state" placeholder="全部">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="待付款" value="toPay"></el-option>
                        <el-option label="已付款" value="payed"></el-option>
                        <el-option label="已发货" value="shipped"></el-option>
                        <el-option label="交易成功" value="success"></el-option>
                        <el-option label="交易关闭" value="close"></el-option>
                        <el-option label="退款中" value="refunding"></el-option>
                    </el-select>
                </el-form-item>
            </div>
        </el-form>
        
    </div>
</template>
<script>
import myOrder from './myOrder.js';
export default myOrder;
</script>
<style scoped lang="less">
.order {
    font-size: 12px;
    .orderState {
        display: inline-block;
        li {
            &.active {
                background: #fff;
                border-color: #50bfff;
                color: #50bfff;
            }
        }
    }
}

.searchBox {
    margin-top: 10px;
}

.timePicker {
    display: inline-block;
    .line {
        text-align: center;
    }
    .el-form-item {
        margin-right: 0;
    }
}

.name {
    display: inline-block;
}
.state {
	display: inline-block;
	margin-left: 20px;
}
</style>
