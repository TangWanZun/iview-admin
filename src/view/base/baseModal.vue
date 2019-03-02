<template>
  <div class="box">
    <winModal v-model="winModalValue" :spin="spinShow"></winModal>
  </div>
</template >

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
    getData(data) {
      this.spinShow = true;
      Promise.all([
        //获取车辆档案
        getTableList({
          tableName: "menuTable1"
        }),
        //获取会员卡
        getTableList({
          tableName: "menuTable2"
        })
      ]).then(resArr => {
        this.tab2data = resArr[0].data.data || [];
        this.tab3data = resArr[1].data.data || [];
        this.spinShow = false;
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>



