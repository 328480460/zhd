export default {
    name: 'login',
    data() {
        var validateUserName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                if (/^[a-zA-Z0-9_-]{6,16}$/.test(value)) {
                    callback();
                } else {
                    callback(new Error('用户名至少6位,由大小写字母和数字,-,_组成'));
                }
            }
        };
        var validatePassWord = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (!(/^[a-zA-Z0-9_-]{6,16}$/.test(value))) {
                callback(new Error('密码至少6位,由大小写字母和数字,-,_组成'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                userName: '',
                passWord: ''
            },
            rules: {
                userName: [
                    { validator: validateUserName, trigger: 'blur' }
                ],
                passWord: [
                    { validator: validatePassWord, trigger: 'blur' }
                ]
            },
            login_actions: {
                disable: false
            }
        };
    },
    methods: {
        turnIndex() {
            this.$router.push({ path: '/home/index' });
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    var userInfo = {
                        userName: this[formName].userName,
                        passWord:this[formName].passWord,
                    }
                    this.login_actions.disable = true;
                    // 去请求登录接口
                    this.$store.dispatch('login',userInfo).then((res)=> {

                        if(res.data.state === 'success') {
                            this.$store.commit('set_login_state',true);
                            this.$store.commit('init_cur_route');
                            this.$store.commit('set_user_type',res.data.userType);
                            this.$store.commit('set_user_token',res.data.userToken);
                            this.$router.push({path:'/home/index'});

                            sessionStorage.setItem('userToken',res.data.userToken);
                            sessionStorage.setItem('userType',res.data.userType);
                        }
                    }).catch((res) => {
                        console.log('ERRPR');
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
