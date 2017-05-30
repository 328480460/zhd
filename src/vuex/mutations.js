export default {
	// 改变nav当前选中
	changeNavActive(state,currentActive) {
		state.navActiveIndex = currentActive;
		// console.log(currentActive);
	},
	// 改变leftMenu当前选中
	changeMenuActive(state,currentActive) {
		var _currentActive = currentActive.replace(/\/home\//,'')
		state.menuActiveIndex = _currentActive;
		// console.log(_currentActive +'changeMenuActive');
	}
}