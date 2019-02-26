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
            this.$emit("input", val);
        }
    },
    data() {
        return {
            winModalValue: false,
        };
    },
}