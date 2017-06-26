export default {
	set_cur_route(state, paths) {
		state.headerCurRouter = paths.fullPath;
        state.leftCurRouter = paths.subPath.replace('/','');
	},
	init_cur_route(state) {
		state.headerCurRouter = '/home/index';
	},
	set_login_state(state,flag) {
		state.isLogin = flag;
	},
	set_user_type(state,userType) {
		state.userType = userType;
	},
	set_user_token(state,userToken) {
		state.userToken = userToken;
	},
	remove_sesson() {
		sessionStorage.removeItem("userToken");
		sessionStorage.removeItem("userType");
	}
}