<template>
  <!-- 菜单定义 -->
  <div class="box">
    <winModal v-model="winModalValue" width="500px" :spin="spinShow" @onOk="onOk">
			<Form :label-width="80" label-position="left" class="form">
				<FormItem class="form-item" label="账号">
					<i-input disabled placeholder="自动生成"></i-input>
				</FormItem>
				<FormItem class="form-item"  label="账号别名">
					<i-input></i-input>
				</FormItem>
				<FormItem class="form-item" label="关联员工">
				</FormItem>
				<div class="main">
					<Tabs type="card">
						<TabPane label="归属角色" name="tab1">
							<div class="header">
							  <div class="header-left">
							    <Button>添加行</Button>
							    <Button>删除行</Button>
							  </div>
							</div>
							<Table
							  size="small"
							  border
							  height="200"
							  ref="selection"
							  :columns="tab1col"
							  :data="tab1data"
							>
							</Table>
						</TabPane>
						<TabPane label="绑定微信" name="tab2">
						</TabPane>
					</Tabs>
				</div>
				
			</Form>
    </winModal>
  </div>
</template>

<script>
import winModalMixin from "@/components/base/panel/winModalMixin.js";
import { tInput, tableSelect } from "@/components/base";
import { getTableList } from "@/api/currency.js";
export default {
  name:'RolesModal',
  mixins: [winModalMixin],
  components: {
    tInput,
    tableSelect
  },
  data() {
    return {
      // 主数据
      formData: {},
			spinShow:false,
			tab1col:[
				{
				  type: "index",
				  width: 60,
				  align: "center",
				  key: "Rown"
				},
				{
				  title: "角色编码",
				  key: "L1Code",
					width: 150,
				  tooltip: true
				},
				{
				  title: "角色名称",
				  key: "L1Name",
				  width: 100,
				  tooltip: true
				},
				{
				  title: "归属公司",
				  key: "L1CmpName",
				  width: 200,
				  tooltip: true
				}
			],
			tab1data:[],
			tab2data:[],
    };
  },
  methods: {
    /**
     * 获取相关的附表数据
     */
    getData(data) {
      this.spinShow = true;
      Promise.all([
        // 获取归属角色
        getTableList({
          url: "/Ousr/GetOusr1List"
        }),
        // 获取绑定微信
        getTableList({
          url: "/Ousr/GetOusrWeChat"
        })
      ]).then(resArr => {
        this.tab1data = resArr[0].data || [];
        this.tab2data = resArr[1].data || [];
        this.spinShow = false;
      });
    },
    onOk(){
      
    }
  }
};
</script>
<style lang="less" scoped>
	.form .ivu-form-item{
		margin-bottom: 10px;
	}
	.header{
		margin-bottom: 5px;
		margin-top:-10px;
		button{
			margin-right: 5px;
		}
	}
</style>
