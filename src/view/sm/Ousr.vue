<template>
  <!-- 菜单定义 -->
  <div class="box">
    <panel v-model="addWindow">
      <template slot="left">
        <i-input v-model="pageTableConfig.data.query" @on-enter="serechData" placeholder="请输入查询条件" class="header-left-input"></i-input>
        <Button @click="serechData">查询</Button>
        <Button @click="addClick">新增</Button>
        <Button>删除</Button>
        <Button icon="ios-download" arr>保存排序</Button>
      </template>
      <template slot="right">
        <Button type="info">构建模板</Button>
      </template>
      <pageTable ref="pageTable" :config="pageTableConfig"  @on-row-dblclick="rowDblclick"></pageTable>
    </panel>
    <!-- 菜单定义新增 -->
    <winModal ref="winModal"></winModal>
  </div>
</template>

<script>
import winModal from "./OusrModal";
import { pageTable,panel } from "@/components/base";
import { getTableList } from "@/api/currency.js";
// import
export default {
  name: "Ousr",
  components: {
    winModal,
    panel,
    pageTable
  },
  data() {
    return {
      // 显示新增菜单定义框
      addWindow: false,
      // loding
      tableLoading: true,
      pageTableConfig: {
        columns: [
          {
            type: "index",
            width: 60,
            align: "center",
            key: "Rown"
          },
          {
            title: "账号",
            key: "UserCode",
						width: 180,
            tooltip: true
          },
					{
					  title: "账号别名",
					  key: "UserCodeAlias",
					  width: 180,
					  tooltip: true
					},
					{
					  title: "关联员工",
					  key: "EmpName",
					  width: 150,
					  tooltip: true
					},
					{
					  title: "归属公司",
					  key: "CmpName",
					  width: 250,
					  tooltip: true
					},
					{
					  title: "备注",
					  key: "Note",
					  tooltip: true
					},
        ],
        data:{
          url:'/Ousr/GetOusrList',
          query:''
        }
      },
    };
  },
	created(){
// 		getTableList({
// 			url:'/Common/GetDynamicList',
// 		})
// 			.then((res)=>{
// 				//对获取的数据进行处理
// 				let list = [];
// 				res.data.forEach(item => {
// 					list.push({
// 						value: item.Code,
// 						label: item.Name,
// 						children: [],
// 						loading: false
// 					});
// 				});
// 				this.addData = list;
// 				console.log(list);
// 			})
	},
  methods: {
    /**
     * 查询
     */
    serechData(){
      this.$refs.pageTable.getData();
    },
    /**
     * 添加一个菜单
     */
    addClick() {
      this.$refs.winModal.show();
    },
    /**
     * 双击用户表列项
     */
    rowDblclick(data) {
      this.$refs.winModal.show(data);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
