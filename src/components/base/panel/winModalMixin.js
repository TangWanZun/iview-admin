/**
 * 混入
 * 用于开启的win框
 */
import winModal from './winModal.vue'
export default {
    props: {
        //显示新增菜单定义框
        value: {
            type: Boolean
        },
    },
    //加载modal组件
    components: {
        winModal
    },
    watch: {
        value(val) {
            this.winModalValue = val;
        },
        winModalValue(val) {
            //当modal关闭的时候
            if(!val){
                //将组件恢复到初始状态
                //这一层只控制数据
                Object.assign(this.$data,this.$options.data())
            }
            this.$emit("input", val);
        },
    },
    data() {
        return {
            winModalValue: false,
        };
    },
    methods: {
        /**
        * 此方法对外暴露
        * 通过此方向向win中注入数据
        */
        show(data = undefined) {
            //打开win页面框
            this.winModalValue = true;
            //数据清空
            // //清空主表
            // this.formData = {};
            // //清空附表
            // for(let x in this.tabFormData){
            //     this.tabFormData[x] = [];
            // }
            //当data不存在的时候，表示打开的是一个空的win框
            if (!data){return;}
            //赋值主数据
            this.formData = data;
            //赋值附表数据
            this.getData(data);
        },
    }
}