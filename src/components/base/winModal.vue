<template>
  <!-- 菜单定义新增 -->
  <div v-if="modalValue">
    <Modal
      :mask-closable="false"
      :fullscreen="fullscreen"
      width="800px"
      v-model="winModal"
      title="编辑"
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
    //导入数据
    data: {
      type: Object
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
      if (newValue && JSON.stringify(this.data) !== "{}") {
        //获取附表数据
        this.getData();
      }
    },
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
      //ok按钮的loading
      winOkLoading: false,
      //是否为全屏显示
      fullscreen:false
    };
  },
  methods: {
    /**
     * 获取附表数据
     */
    getData() {},
    /**
     * 数据清空
     */
    dataReset() {},
    //OK按钮的事件
    winOnOk() {},
    //关闭win框事件
    winOnCancel() {
      //当组件关闭
      this.winModal = false;
      this.$nextTick(() => {
        //组件销毁
        this.modalValue = false;
        //清空数据
        this.dataReset();
      });
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



