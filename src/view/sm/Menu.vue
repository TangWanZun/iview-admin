<template>
  <!-- 菜单定义 -->
  <div class="box">
    <panel v-model="addWindow">
      <template slot="left">
        <i-input placeholder="请输入查询条件" class="header-left-input"></i-input>
        <Button @click="test=!test">查询</Button>
        <Button @click="addClick">新增</Button>
        <Button>删除</Button>
        <Button icon="ios-download">保存排序</Button>
      </template>
      <template slot="right">
        <Button type="info">构建模板</Button>
      </template>
      <!-- <DraggableTree></DraggableTree> -->
    </panel>
    <!-- 菜单定义新增 -->
    <MenuModal
    ref="winModal"
    :data="winData"
    v-model="addWindow"
    ></MenuModal>
  </div>
</template>

<script>
import MenuModal from './MenuModal'
import panel from '@/components/base/panel/panel'
import { getTableList } from '@/api/currency.js'
// import { DraggableTree } from "vue-draggable-nested-tree";
// import
export default {
  name:'Menu',
  components: {
    MenuModal,
    panel
  },
  data () {
    return {
      // 显示新增菜单定义框
      addWindow: false,
      // loding
      tableLoading: true,
      winData: {},
      tableColumns: [
        {
          type: 'index',
          width: 60,
          align: 'center',
          key: 'Rown'
        },
        {
          title: '注册/关注时间',
          key: 'NCreateDate',
          tooltip: true
        },
        {
          title: '昵称',
          key: 'NickName',
          width: 150,
          tooltip: true
        },
        {
          title: '姓名',
          key: 'CardName',
          width: 100
        },
        {
          title: '注册',
          width: 60
        },
        {
          title: '认证',
          width: 60
        },
        {
          title: '性别',
          key: 'Sex',
          width: 60
        },
        {
          title: '手机号',
          key: 'Phone',
          width: 110
        },
        {
          title: '车牌号',
          key: 'CarNum',
          tooltip: true,
          width: 100
        },
        {
          title: 'VIN',
          key: 'VIN',
          width: 175
        },
        {
          title: '车型',
          key: 'CarStyleName',
          tooltip: true
        },
        {
          title: '归属公司',
          key: 'CmpName',
          tooltip: true
        }
      ],
      // 表数据
      tableData: [],
      test: true
    }
  },
  created () {
    this.getData()
  },
  methods: {
    /**
     * 获取当前数据
     */
    getData (page = 1) {
      this.tableData = []
      this.tableLoading = true
      getTableList({
        tableName: 'menuTable',
        page
      })
        .then((res) => {
          this.tableData = res.data || []
          this.tableLoading = false
        })
    },
    /**
     * 添加一个菜单
     */
    addClick () {
      this.$refs.winModal.show()
    },
    /**
     * 双击用户表列项
     */
    rowDblclick (data) {
      this.$refs.winModal.show(data)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
