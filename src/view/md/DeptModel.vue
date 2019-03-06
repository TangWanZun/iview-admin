<template>
    <div class="box">
    <winModal width="300px" v-model="winModalValue" :spin="spinShow">
      <tInput title="部门编码">
        <i-input disabled size="small" slot="con" v-model="formData.Code"></i-input>
      </tInput>
      <tInput title="部门名称">
        <i-input size="small" slot="con" v-model="formData.Name"></i-input>
      </tInput>
      <tInput title="备注">
        <i-input type="textarea" size="small" slot="con"></i-input>
      </tInput>
    </winModal>
  </div>
</template>
<script>
import winModalMixin from "@/components/base/panel/winModalMixin.js";
import { tInput } from "@/components/base";
import { getTableList } from "@/api/currency.js";
export default {
  mixins: [winModalMixin],
  components: {
    tInput
  },
  data() {
    return {
      //主数据
      formData: {},
      //madel加载
      spinShow: false
    };
  },
  methods: {
    /**
     * 获取相关的附表数据
     */
    getData(data) {}
  }
};
</script>
<style lang="less" scoped>
</style>



