<template>
  <!-- 菜单定义新增 -->
  <div v-if="modalValue">
    <Modal
      :mask-closable="false"
      :fullscreen="fullscreen"
      :width="width"
      v-model="winModal"
      title="编辑"
      :styles="styles"
      :transfer="false"
      :mask="false"
      @on-cancel="winOnCancel"
    >
      <!-- 自定义头部 -->
      <p slot="header" class="header">
        <span>编辑</span>
        <Icon v-if="fullscreen" type="ios-browsers-outline" @click="fullscreen=!fullscreen"  size="20"  />
        <Icon v-else  type="ios-square-outline" @click="fullscreen=!fullscreen" size="20" />
      </p>
      <div class="body">
          <slot></slot>
      </div>
      <!-- 底部自定义 -->
      <div slot="footer">
        <Button size="large" @click="winOnCancel">取消</Button>
        <Button type="primary" size="large" :loading="winOkLoading" @click="winOnOk">提交</Button>
      </div>
      <Spin size="large" fix v-if="spinShow"></Spin>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    //显示新增菜单定义框
    value: {
      type: Boolean
    },
    spin:{
      type:Boolean,
      default:false
    },
    //导入数据
    data: {
      type: Object
    },
    //modal宽度
    width:{
      type:String
    },
    //初始位置
    styles:{
      type:Object,
      default(){
        // return {top:'0px',left:'0px'}
      }
    }
  },
  watch: {
    value(newValue) {
      this.modalValue = newValue;
      //当打开的时候,且存在数据的时候
      if (newValue) {
        this.$nextTick(() => {
          this.winModal = true;
        });
      }
    },
    spin(val){this.spinShow = val},
    data(val) {
      this.formData = val;
    },
    modalValue(newValue) {
      this.$emit("input", newValue);
    }
  },
  data() {
    return {
      formData: this.data,
      winModal: false,
      modalValue: this.value,
      //spin显示
      spinShow:this.spin,
      //ok按钮的loading
      winOkLoading: false,
      //是否为全屏显示
      fullscreen:false
    };
  },
  methods: {
    //OK按钮的事件
    winOnOk() {
      //确认按钮开启loading
      this.winOkLoading = true;
      this.$emit('onOk',{
        //正确回调，将会关闭页面
        success:this.winOnCancel,
        //出现错误回调，页面不会关闭
        fail:this.winOnError
      })
    },
    //关闭win框事件
    winOnCancel() {
      let _this = this;
      //当组件关闭
      this.winModal = false;
      this.$nextTick(() => {
        //这里延时300毫秒，是为了展现modal框关闭动画
        setTimeout(()=>{
          //将组件恢复到初始状态
          // Object.assign(this.$data,this.$options.data())
          //组件销毁
          _this.modalValue = false;
        },300)
      });
      // this.$emit('onCancel');
    },
    //关闭modal时出现错误
    winOnError(){
      //确认按钮取消loading
      this.winOkLoading = false;
    }
  }
};
</script>

<style lang="less" scoped>
//自定义头部
.header{
    display: flex;
    justify-content: space-between;
    padding-right: 25px;
    >i{
        color:rgba(0, 0, 0, 0.8);
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            color:black;
        }
    }
}
</style>



