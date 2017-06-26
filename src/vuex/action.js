import axios from 'axios';


// 登录接口地址
var login_path = '/api/login';
// 我的消息页面接口地址
var my_msg_req_path = '/api/message';
// 常用供货商接口地址
var wholesaler_path = '/api/wholesaler';
// 删除常用供货商接口地址
var del_saler_path = '/api/delsaler';
// 地址管理接口地址
var address_path = '/api/address';


export default {
    set_cur_route({ commit, state }, paths) {
        commit("set_cur_route", paths);
    },
    login({ commit }, value) {
        console.log(value);
        return axios.post(login_path, { data: value });
    },
    my_msg_req({ commit, state }, value) {
        console.log(value);
        return axios.post(my_msg_req_path, { data: value, token: state.userToken });
    },
    wholesaler_req({ commit, state }, value) {
        console.log(value);
        return axios.post(wholesaler_path, { data: value, token: state.userToken });
    },
    del_saler_req({ commit, state }, value) {
        console.log(value);
        return axios.post(del_saler_path, { data: value, token: state.userToken });
    },
    address_req({ commit, state }, value) {
        console.log(value);
        return axios.post(address_path, { data: value, token: state.userToken });
    }
}
