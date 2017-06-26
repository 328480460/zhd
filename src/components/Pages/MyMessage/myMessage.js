export default {
	name:'myMessage',
	created() {
		this.$store.dispatch('my_msg_req').then((res) => {
			console.log(res);
			this.messageList = res.data.info;
		})
	},
	data() {
		return {
			messageList: []
		}
	}
}
