<template>
    <div class="login">
        <div class="header">
            <div class="logo">
                <img src="./image/logo.png" height="60" @click='turnIndex'>
                <p>志恒达订单系统</p>
            </div>
        </div>
        <div class="loginWrapper">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="ruleForm.userName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passWord">
                    <el-input type="password" v-model="ruleForm.passWord" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import LoginJs from './Login.js';
export default LoginJs;
</script>
<style scoped lang='less'>
.header {
    width: 100%;
    height: 60px;
    background-color: #324057;
    .logo {
        float: left;
        margin-left: 20px;
        img {
            display: inline-block;
            vertical-align: middle;
        }
        p {
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #bfcbd9;
        }
    }
}

.loginWrapper {
    width: 500px;
    margin-top: 60px;
}
</style>
