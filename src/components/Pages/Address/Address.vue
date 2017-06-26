<template>
    <div class="address">
        <h2 class="position">收货地址</h2>
        <div class="wrapper">
            <div class="newAddress">
                <el-button type="primary" @click="addNewAddress">
                    创建新地址
                </el-button>
                <div class="addWrapper">
                    <el-form ref="form" :model="form" label-width="160px">
                        <el-form-item label="设为默认地址：">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="0">否</el-radio>
                                <el-radio label="1">是</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="收货人姓名：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机：">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="地区：">
                            <el-cascader :options="section" change-on-select :clearable='clearable'  label-width="200px"  ></el-cascader>
                        </el-form-item>
                        <el-form-item label="详细地址：">
                            <el-input v-model="form.detail"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="addressList">
                <p class="title">我的地址</p>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="name" label="收货人" width="100">
                    </el-table-column>
                    <el-table-column prop="section" label="所在地区" width="200">
                    </el-table-column>
                    <el-table-column prop="detail" label="详细地址" width="400">
                    </el-table-column>
                    <el-table-column prop="phoneNum" label="电话/手机" width="150">
                    </el-table-column>
                    <el-table-column label="操作" width="200">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="handleReset(scope)">修改</el-button>
                            <el-button type="text" size="small" @click="handleDelete(scope)">删除</el-button>
                            <el-button type="primary" size="small" v-if="scope.row.default">默认地址</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import address from './address.js';
export default address;
</script>
<style scoped lang="less">
.wrapper {
    width: 98%;
    margin-top: 10px;
    background-color: #D6D6D6;
    padding: 20px 10px 30px 10px;
    border-radius: 4px;
    .el-form-item {
    	margin-bottom: 15px;
    }
}

.position {
    font-size: 18px;
    font-weight: 700;
}

.newAddress {
    .addWrapper {
        width: 500px;
        margin: 20px 0 40px 0;
		padding: 20px 150px 20px 20px;
		background-color: #fff;
		border-radius: 4px;
    }
}

.addressList {
    width: 1052px;
    border: none;
    .title {
        font-size: 14px;
        font-weight: 700;
        margin: 10px 0 10px 10px;
    }
}
</style>
