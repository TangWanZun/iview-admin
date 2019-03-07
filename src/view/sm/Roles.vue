<template>
	<!-- 菜单定义 -->
	<div class="box">
		<panel v-model="addWindow">
			<template slot="left">
				<i-input
					v-model="pageTableConfig.data.query"
					@on-enter="serechData"
					placeholder="请输入查询条件"
					class="header-left-input"
				></i-input>
				<Button @click="serechData">查询</Button>
				<Button @click="addClick">新增</Button>
				<Button icon="ios-download">保存排序</Button>
			</template>
			<template slot="right">
				<Button type="info">构建模板</Button>
			</template>
			<Split v-model="split">
				<div slot="left" class="demo-split-pane">
					<pageTable
						ref="pageTable"
						:config="pageTableConfig"
						@on-row-dblclick="rowDblclick"
					></pageTable>
				</div>
			</Split>
		</panel>
		<win-modal ref="winModal" v-model="addWindow"></win-modal>
	</div>
</template>

<script>
import { pageTable, panel } from '@/components/base';
import winModal from './RolesModal';
// import
export default {
	name: 'Roles',
	components: {
		panel,
		pageTable,
		winModal
	},
	data() {
		return {
			split: 0.5,
			addWindow:false,
			// loding
			tableLoading: true,
			winData: {},
			pageTableConfig: {
				columns: [
					{
						width: 120,
						title:'角色名称',
						key: 'Name'
					},
					{
						minWidth:180,
						title:'归属公司',
						tooltip: true,
						key: 'CmpName'
					},
					{
						width: 150,
						title:'角色编号',
						key: 'Code'
					}
				],
				data: {
					url: '/Roles/GetRolesList',
					query: ''
				}
			},
			test: true
		};
	},
	methods: {
		/**
		 * 查询
		 */
		serechData() {
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
		rowDblclick(data,index) {
			this.$refs.winModal.show(data);
		}
	}
};
</script>
<style lang="less" scoped>
	.demo-split-pane{
		height: 100%;
	}
</style>
