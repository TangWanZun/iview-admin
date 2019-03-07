<template>
	<!-- 菜单定义 -->
	<div class="box">
		<div class="head-tbn">
			<i-input style="width:150px" v-model="inputValue" placeholder="请输入查询值"></i-input>
			<Button @click="getData()">查询</Button>
			<Button @click="addTreenItem">新增</Button>
			<Button @click="sendTreen">保存排序</Button>
		</div>
		<div class="body">
			<div class="flex-left" style="width:360px">
				<Card  title="菜单">
					<DraggableTree :data="treeData" draggable>
						<div slot-scope="{ data, store }">
							<template v-if="!data.isDragPlaceHolder">
								<div class="tree-item">
									<div
										v-if="data.children &amp;&amp; data.children.length"
										@click="store.toggleOpen(data)"
										class="tree-icon"
										:class="{ 'tree-icon-open': data.open }"
									>
										<Icon type="ios-arrow-down" />
									</div>
									<div class="tree-item-text">{{ data.text }}</div>
									<div class="tree-item-button">
										<!-- 新增 -->
<!-- 										<Icon
											v-if="data.parentId=='root'"
											type="md-add"
											@click="menuModalData = data"
										/> -->
										<!-- 删除 -->
										<Icon v-if="data.children&&data.children.length==0" type="md-trash" @click="deleteTreenItem(data,store)" />
										<!-- 设置 -->
										<Icon type="md-settings" @click="menuModalData = data" />
									</div>
								</div>
							</template>
						</div>
					</DraggableTree>
					<Spin size="large" fix v-if="spinShow"></Spin>
				</Card>
			</div>
			<div class="flex-right">
				<Card :title="rightCard"><MenuModal :data="menuModalData"></MenuModal></Card>
			</div>
		</div>
	</div>
</template>

<script>
import MenuModal from './MenuModal';
import { panel } from '@/components/base';
import { getTableList } from '@/api/currency.js';
import { DraggableTree } from 'vue-draggable-nested-tree';
import { getMenuList } from '@/api/data';
// import
export default {
	name: 'Menu',
	components: {
		MenuModal,
		panel,
		DraggableTree
	},
	data() {
		return {
			// 显示新增菜单定义框
			addWindow: false,
			// loding
			spinShow: true,
			treeData: [],
			rightCard: '编辑',
			//列表默认值
			menuModalData: {},
			//查询值
			inputValue:''
		};
	},
	created() {
		this.getData();
	},
	methods: {
		/**
		 * 获取数据
		 */
		getData(){
			this.spinShow = true;
			getMenuList({
				query:this.inputValue
			}).then(res => {
				this.treeData = res.children;
				this.spinShow = false;
			});
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
		},
		/**
		 * 新增节点
		 */
		addTreenItem(){
			this.menuModalData = {
				_isEmpty:true
			}
		},
		/**
		 * 删除节点
		 */
		deleteTreenItem(data) {
			console.log(data)
		},
		/**
		 * 保存排序
		 */
		sendTreen(){
			setTimeout(()=>{
				this.$Message.success('保存排序成功')
			},500)
		}
	}
};
</script>
<style lang="less" scoped>
.box {
	height: 100%;
	overflow: auto;
	display: flex;
	flex-direction: column;
}
.head-tbn {
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	flex-shrink: 0;
	display: flex;
	> div,
	button {
		margin-right: 5px;
	}
	padding:5px;
}
.body {
	padding:10px;
	flex-grow: 1;
	display: flex;
	align-items: stretch;
	.flex-left{
		flex-shrink:0;
		min-height: 100%;
		overflow-y: auto;
		overflow-x:visible;
	}
	.flex-right {
		min-height: 100%;
		overflow: auto;
		margin-left: 10px;
		flex-grow: 1;
	}
}
.he-tree {
	border: 1px solid #ccc;
	padding: 20px;
}
.tree-item {
	cursor: default;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: 0.2s;
	border-radius: 3px;
	padding: 5px 3px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
}
//控制父元素前面的icon
.tree-icon {
	transition: 0.3s;
	cursor: pointer;
	flex-shrink: 0;
}
//父元素打开的时候
.tree-icon-open {
	transform: rotate(-180deg);
}
//单项内容
.tree-item-text {
	flex-grow: 1;
	text-align: left;
}
//单项按钮处
.tree-item-button {
	flex-shrink: 0;
	> i {
		cursor: pointer;
		transition: 0.3s;
		margin-left: 5px;
		&:hover {
			background-color: rgba(0, 0, 0, 0.3);
		}
	}
}
</style>
<style lang="less">
@import '../../index.less';
.draggable-placeholder {
	border: 2px dotted fade(@main-color, 50%);
	background-color: fade(@main-color, 5%);
	border-radius: 3px;
}
</style>
