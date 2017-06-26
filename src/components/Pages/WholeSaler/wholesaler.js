export default {
    name: "wholesaler",
    created() {
        this.$store.dispatch('wholesaler_req').then((res) => {
            this.salerList = res.data.info;
        })
    },
    data() {
        return {
            salerList: [],
            delList: []
        }
    },
    methods: {
        deleSaler(item) {

            this.$store.dispatch('del_saler_req', item).then((res) => {
	            this.salerList = this.salerList.filter((saler) => {
	                return saler !== item;
	            });
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
            }).catch((res) => {
                this.$message.error('失败了！');
            })

        },
        innerSaler(url) {
            window.open(url);
        }
    }
}
