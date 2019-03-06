<template>
  <!-- 菜单定义 -->
  <div class="box">
    <winModal v-model="winModalValue" width="800px" :spin="spinShow" @onOk="onOk">
    </winModal>
  </div>
</template>

<script>
import winModalMixin from "@/components/base/panel/winModalMixin.js";
import { tInput, tableSelect } from "@/components/base";
import { getTableList } from "@/api/currency.js";
export default {
  name:'WeiXinRegisterUserModal',
  mixins: [winModalMixin],
  components: {
    tInput,
    tableSelect
  },
  data() {
    return {
      // 主数据
      formData: {},
    };
  },
  methods: {
    /**
     * 获取相关的附表数据
     */
    getData(data) {
      this.spinShow = true;
      Promise.all([
        // 获取车辆档案
        getTableList({
          url: "/WeiXinRegisterUser/GetWeiXinRegisterUser1List"
        }),
        // 获取会员卡
        getTableList({
          url: "/WeiXinRegisterUser/GetWeiXinRegisterUser2List"
        })
      ]).then(resArr => {
        this.tab2data = resArr[0].data || [];
        this.tab3data = resArr[1].data || [];
        this.spinShow = false;
      });
    },
    onOk(){
      
    }
  }
};
</script>
<style lang="less" scoped>
</style>
