<template>
	<!-- 菜单定义 -->
	<div class="box">
		<winModal v-model="winModalValue" width="500px" :spin="spinShow" @onOk="onOk">
			<Form :label-width="80" label-position="left" class="form">
				<FormItem label="账号">
					<i-input disabled placeholder="自动生成" v-model="formData.UserCode"></i-input>
				</FormItem>
				<FormItem label="账号别名" v-model="formData.UserCodeAlias"><i-input></i-input></FormItem>
				<FormItem v-if="formData.EmpName" label="关联员工">{{ formData.EmpName }}</FormItem>
				<div style="margin-bottom: 10px;">
					<Tabs type="card">
						<TabPane label="归属角色" name="tab1">
							<div style="margin-top: -15px;"></div>
							<tables
								size="small"
								border
								height="200"
								ref="table1"
								:columns="tab1col"
								v-model="tab1data"
								@on-selection-change="tab1select = $event"
							>
								<div slot="header" class="header">
									<Cascader :data="dynamicList" :load-data="loadData" size="small"></Cascader>
									<Button size="small" type="success">添加行</Button>
									<Button size="small" type="error" @click="$refs.table1.deleteRow()">
										删除行
									</Button>
								</div>
							</tables>
						</TabPane>
						<TabPane label="绑定微信" name="tab2"></TabPane>
					</Tabs>
				</div>
				<FormItem v-if="formData.EmpName" label="备注">
					<i-input v-model="formData.Note" type="textarea"></i-input>
				</FormItem>
			</Form>
		</winModal>
	</div>
</template>
 
<script>
import winModalMixin from '@/components/base/panel/winModalMixin.js';
import { tInput, tableSelect } from '@/components/base';
import { getTableList } from '@/api/currency.js';
import tables from '_c/tables';
export default {
	name: 'OusrModal',
	mixins: [winModalMixin],
	components: {
		tInput,
		tableSelect,
		tables
	},
	data() {
		return {
			// 主数据
			formData: {},
			spinShow: false,
			tab1col: [
				{
					type: 'selection',
					width: 50,
					align: 'center',
					key: 'Rown'
				},
				{
					type: 'index',
					width: 50,
					align: 'center',
					key: 'Rown'
				},
				{
					title: '角色编码',
					key: 'L1Code',
					width: 150,
					tooltip: true
				},
				{
					title: '角色名称',
					key: 'L1Name',
					width: 100,
					tooltip: true
				},
				{
					title: '归属公司',
					key: 'L1CmpName',
					width: 200,
					tooltip: true
				}
			],
			tab1select: [],
			tab1data: [],
			tab2data: []
		};
	},
	computed:{
		dynamicList(){
			let dataList = this.$store.state.cache.constChche.dynamicList;
			if(!dataList){
				return []
			}
			//对获取的数据进行处理
			let list = [];
			dataList.forEach(item => {
				list.push({
					value: item.Code,
					label: item.Name,
					children: [],
					loading: false
				});
			});
			return list;
		}
	},
	created(){
		this.$store.dispatch('cache/getDynamicList');
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
					url: '/Ousr/GetOusr1List'
				}),
				// 获取绑定微信
				getTableList({
					url: '/Ousr/GetOusrWeChat'
				})
			]).then(resArr => {
				this.tab1data = resArr[0].data || [];
				this.tab2data = resArr[1].data || [];
				this.spinShow = false;
			});
		},
		//动态获取级联数据表
		loadData(item, callback) {
			item.loading = true;
			getTableList({
				url:'/Common/GetDynamicList',
				query:item.value
			})
				.then((res)=>{
					let children = [];
					res.data.forEach((resItem)=>{
						children.push({
							value:resItem.Code,
							label:resItem.Name
						})
					})
					// item.children = 
				})
			setTimeout(() => {
				if (item.value === 'beijing') {
					item.children = [
						{
							value: 'talkingdata',
							label: 'TalkingData'
						},
						{
							value: 'baidu',
							label: '百度'
						},
						{
							value: 'sina',
							label: '新浪'
						}
					];
				} else if (item.value === 'hangzhou') {
					item.children = [
						{
							value: 'ali',
							label: '阿里巴巴'
						},
						{
							value: '163',
							label: '网易'
						}
					];
				}
				item.loading = false;
				callback();
			}, 1000);
		},
		onOk() {}
	}
};
</script>
<style lang="less" scoped>
.form .ivu-form-item {
	margin-bottom: 10px;
}
.header {
	display: flex;
	> button,
	> div {
		margin-right: 5px;
	}
}
</style>
