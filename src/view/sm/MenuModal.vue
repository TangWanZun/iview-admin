<template>
	<div>
		<Form :model="formData" :rules="rules" ref="formValidate" inline :label-width="80" label-position="right">
			<FormItem label="菜单" prop="MenuType" required>
				<i-select style="width:100px" v-model="formData.MenuType">
					<Option value="A01" label="菜单">
						<span>菜单</span>
						<span>A01</span>
					</Option>
					<Option value="A02" label="报表">
						<span>报表</span>
						<span>A02</span>
					</Option>
				</i-select>
			</FormItem>
			<FormItem label="菜单名称" prop="text" required><i-input v-model="formData.text"></i-input></FormItem>
			<FormItem label="菜单图标" prop="iconCls" required><i-input v-model="formData.iconCls"></i-input></FormItem>
			<FormItem label="冻结"><Checkbox v-model="formData.IsLock"></Checkbox></FormItem>
			<FormItem label="备注"><i-input type="textarea" v-model="formData.Note"></i-input></FormItem>
			<Divider>配置</Divider>
			<!-- 普通配置项 -->
			<template v-if="formData.MenuType == 'A01'">
				<FormItem label="是否为末级"><Checkbox v-model="formData.leaf"></Checkbox></FormItem>
				<FormItem label="域"><i-input v-model="formData.ScopeName"></i-input></FormItem>
				<FormItem label="关联表">
					<i-select style="width:100px" v-model="formData.SortIndex">
						<Option value="A01" label="菜单">
							<span>菜单</span>
							<span>A01</span>
						</Option>
						<Option value="A02" label="报表">
							<span>报表</span>
							<span>A02</span>
						</Option>
					</i-select>
				</FormItem>
				<FormItem label="菜单ID"><i-input v-model="formData.id"></i-input></FormItem>
			</template>
			<template v-else-if="formData.MenuType == 'A02'">
				<FormItem label="直接导出"><Checkbox v-model="formData.AutoExport"></Checkbox></FormItem>
				<FormItem label="报表语句">
					<i-input type="textarea" v-model="formData.ExecSql"></i-input>
				</FormItem>
			</template>
			<!-- 表格配置项 -->
			<Card :padding="5" title="配置表" dis-hover style="max-width:100%">
				<template v-if="formData.MenuType == 'A01' && formData.leaf">
					<tables ref="table1" size="small" border height="200" :columns="columns1" v-model="tableData1">
						<div class="card-header" slot="header">
							<Button @click="table1AddCUD">增加CUD</Button>
							<Button type="success" @click="tableData1.push({})">添加行</Button>
							<Button type="error" @click="$refs.table1.deleteRow()">删除行</Button>
						</div>
					</tables>
				</template>
				<template v-else-if="formData.MenuType == 'A02'">
					<tables size="small" ref="table2" border height="200" :columns="columns2" v-model="tableData2">
						<div class="card-header" slot="header">
							<Button type="success" @click="tableData2.push({})">添加行</Button>
							<Button type="error" @click="$refs.table2.deleteRow()">删除行</Button>
						</div>
					</tables>
				</template>
				<template v-else>
					暂无配置表
				</template>
			</Card>
			<Button :loading="buLoading" type="primary" @click="handleSubmit('formValidate')" style="margin-top: 30px;width:100px">确认</Button>
		</Form>
		<Spin size="large" fix v-if="spinShow"></Spin>
	</div>
</template>

<script>
import { getTableList } from '@/api/currency';
import tables from '_c/tables';
export default {
	name: 'MenuModal',
	components:{
		tables
	},
	props: {
		//传递的数据
		data: {
			type: Object
		} 
	},
	watch: {
		data(val) {
			//当传递的数据为空的时候
			if (val._isEmpty) {
				//当传递数据为空对象的时候自动恢复到默认值
				Object.assign(this.$data, this.$options.data());
			} else {
				//将数据赋值到表单中
				this.formData = val;
				//开启页面loading
				this.spinShow = true;
				Promise.all([
					getTableList({
						url: '/Menu/GetMenu1List'
					}),
					getTableList({
						url: '/Menu/GetMenu2List'
					})
				])
					.then((resArr)=>{
						//并且获取附表 可操控控件配置
						this.tableData1 = resArr[0].data;
						//并且获取附表 可操控控件配置
						this.tableData2 = resArr[1].data;
						console.log(resArr[1].data);
						this.spinShow = false;
					})
			}
		}
	},
	data() {
		return {
			formData: {
				MenuType: 'A01',
				leaf: false
			},
			// 表单验证
			rules:{
				MenuType: [
					{ required: true, message: '菜单为必填项' }
				],
				text: [
					{ required: true, message: '菜单名称为必填项' }
				],
				iconCls: [
					{ required: true, message: '菜单图标为必填项' }
				]
			},
			modalValue: this.value,
			columns1: [
				{
					type: 'selection',
					width: 50,
					align: 'center'
				},
				{
					type: 'index',
					width: 50,
					align: 'center'
				},
				{
					title: '选择器',
					key: 'L1Code',
					editable:true,
					width: '350px'
				},
				{
					title: '名称',
					editable:true,
					key: 'L1Name'
				},
				{
					title: '组',
					editable:true,
					key: 'L1Group'
				}
			],
			columns2: [
				{
					type: 'selection',
					width: 50,
					align: 'center'
				},
				{
					type: 'index',
					width: 50,
					align: 'center'
				},
				{
					title: '参数类型',
					key:'L2Type',
					editable:true,
					editableType:'select',
					editableConfig:{
						rang:[
							{Code:'text',Name:'字符'},
							{Code:'number',Name:'数字'},
							{Code:'date',Name:'日期'},
							{Code:'combobox',Name:'下拉框'},
							{Code:'mcombobox',Name:'多选框'},
							{Code:'checkbox',Name:'单选框'},
						]
					},
					width: '150px'
				},
				{
					title: '参数编码',
					key: 'L2Code',
					editable:true,
					width: '150px'
				},
				{
					title: '参数名称',
					key: 'L2Name',
					editable:true,
					width: '150px'
				},
				{
					title: '选项语句',
					minWidth:120,
					key: 'L2Sql'
				},
				{
					title: '默认值',
					editable:true,
					minWidth:100,
					
					key: 'L2Default'
				},
				{
					title: '必填',
					editable:true,
					editableType:'checkbox',
					width: 70,
					align:'center',
					key: 'L2Required'
				},
				{
					title: '可视',
					editable:true,
					editableType:'checkbox',
					align:'center',
					width: 70,
					key: 'L2Visible'
				}
			],
			tableData1: [],
			tableData2: [],
			buLoading:false,
			spinShow:false
		};
	},
	methods: {
		//表单提交
		handleSubmit(formName){
			console.log(formName);
			this.$refs[formName].validate((valid)=>{
				if(valid){
					this.buLoading = true;
					setTimeout(()=>{
						console.log(this.formData,this.tableData1,this.tableData2)
						this.$Message.success('操作成功');
						this.buLoading = false;
					},500)
				}
			})
		},
		//表1 添加CUD
		table1AddCUD(){
			if(this.tableData1.length>0){
				this.$Message.warning('表中已经存在数据');
				return;
			}
			let id  = this.formData.Id;
			this.tableData1.push({
				L1Code:id+'panel#addBtn',
				L1Name:'新增',
			})
			this.tableData1.push({
				L1Code:id+'window#submitBtn',
				L1Name:'修改',
			})
			this.tableData1.push({
				L1Code:id+'panel#delBtn',
				L1Name:'删除',
			})
		}
	}
};
</script>
<style lang="less" scoped>
.card-header {
	padding-bottom: 5px;
	> button {
		margin-right: 10px;
	}
}
</style>
