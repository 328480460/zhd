export default {
    name: 'myOrder',
    data() {
        return {
            formData: {
                searchKey: '',
                date1: '',
                date2: '',
                name:'',
                state: 'all'

            },
            rules: {
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ]
            }

        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
