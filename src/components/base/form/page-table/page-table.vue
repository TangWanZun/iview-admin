<template>
  <div class="body">
    <div class="content">
      <Table
        size="small"
        :height="height"
        :width="width"
        ref="selection"
        :columns="columns"
        :data="tableData"
        :loading="tableLoad"
        slot="content"
        @on-row-dblclick="onRowDblclick"
      ></Table>
    </div>
    <div class="page">
      <Page
        @on-change="getData({page:$event})"
        :total="tableTotal"
        :simple="simple"
        show-elevator
      />
    </div>
  </div>
</template>

<script>
import { getTableList } from "@/api/currency";
export default {
  name: "pageTable",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    height: { type: String, default: "auto" },
    width: { type: String, default: "auto" },
    //page是否使用精简模式
    simple:{
        type:Boolean,
        default:false
    }
  },
  data() {
    return {
      //控制tableloading
      tableLoad: true,
      //当前全部数据数量
      tableTotal: 0,
      //列项
      columns: this.config.columns,
      //数据
      tableData: [],
      //其他属性
      data: this.config.data
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData({ page = 1 } = {}) {
      this.tableLoad = true;
      let meData = this.data;
      meData.page = page;
      console.log(meData);
      getTableList(meData).then(res => {
        this.tableData = res.data;
        this.tableTotal = res.total;
        this.tableLoad = false;
      });
    },
    //双击某一行的时候触发
    onRowDblclick(data, index) {
      this.$emit("on-row-dblclick", data, index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content{
    flex-grow: 1;
    overflow: auto;
}
.page{
    padding:5px;
    flex-shrink: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
