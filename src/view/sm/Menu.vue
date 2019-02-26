<template>
  <!-- 菜单定义 -->
  <div class="box">
    <div class="header">
      <Row>
        <i-col span="12">
          <i-input placeholder="请输入查询条件" class="header-left-input"></i-input>
          <Button>查询</Button>
          <Button @click="addClick">新增</Button>
          <Button>删除</Button>
          <Button icon="ios-download">保存排序</Button>
        </i-col>
        <i-col span="12">
          <Row type="flex" justify="end">
            <i-col>
              <Button type="info">构建模板</Button>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </div>
    <div class="body"></div>
    <!-- 菜单定义新增 -->
    <MenuWindow v-model="addWindow"></MenuWindow>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuWindow from "./MenuWindow";
export default {
  components: {
    MenuWindow
  },
  data() {
    return {
      //显示新增菜单定义框
      addWindow: false,
    };
  },
  methods: {
    /**
     * 添加一个菜单
     */
    addClick() {
      this.addWindow = true;
    }
  }
};
</script>
<style lang="less" scoped>
</style>



