<template>
  <!-- 菜单定义 -->
  <div class="box">
    <panel v-model="addWindow">
      <template slot="left">
        <i-input placeholder="请输入查询条件" class="header-left-input"></i-input>
        <Button>查询</Button>
        <Button @click="addClick">新增</Button>
        <Button>删除</Button>
      </template>
      <div>
        <Table
          stripe
          :loading="tableLoading"
          size="small"
          :columns="tableColumns"
          :data="tableData"
          @on-row-dblclick="rowDblclick"
        ></Table>
      </div>
      <template slot="foot">
        <Page :total="100" show-elevator/>
      </template>
    </panel>
    <!-- 菜单定义新增 -->
    <win-modal ref="winModal" :data="winData" v-model="addWindow"></win-modal>
  </div>
</template>

<script>
import winModal from './DeptModel'
import panel from '@/components/base/panel/panel'
import { getTableList } from '@/api/currency.js'
// import
export default {
  name:'Dept',
  components: {
    winModal,
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
          title: '部门编码',
          key: 'Code',
          width: 180,
          tooltip: true
        },
        {
          title: '部门名称',
          key: 'Name',
          width: 180,
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
        tableName: 'deptTable',
        page
      }).then(res => {
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
