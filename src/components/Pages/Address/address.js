import {sectionData} from '../../../assets/sectionData.js';
export default {
    name: "v-address",
    created() {
        this.$store.dispatch('address_req').then((res) => {
            console.log(res);
            this.tableData = res.data.info;
        })
    },
    data() {
        return {
            tableData: [],
            form: {
                name: '',
                phone: '',
                detail: '',
                resource: '0',
            },
            clearable:true,
            section:sectionData
        }
    },
    methods: {
        handleReset(scope) {
            console.log(scope);
        },
        handleDelete(scope) {
            var option = {
                delte: true,
                delTag: scope.row
            }
            this.$store.dispatch('address_req', option).then((res) => {

                this.tableData = this.tableData.filter((item) => {
                    return item !== scope.row;
                });
                this.$message({ message: '删除成功', type: 'success' });

            }).catch((res) => {
                this.$message.error('失败了！');
            })
        },
        addNewAddress() {
            console.log('addnewaddress')
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
