<template>
  <!-- 菜单定义新增 -->
  <div class="page">
    <div class="head">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="body">
        <slot></slot>
    </div>
    <!-- 蒙版 -->
    <div v-if="thisVale" class="mask"></div>
  </div>
</template>

<script>
export default {
    props:{
        //显示模态框进行阻止点击
        value: {
            type: Boolean
        },
    },
    watch:{
        value(val){
            this.thisVale = val;
        }
    },
    data(){
        return {
            thisVale:this.value
        }
    }
};
</script>

<style lang="less" scoped>
.page{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:~'calc( 100vh - 105px )';
}
.head {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding:3px;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  .item{
      display: flex;
      align-items: center;
      
  }
  .left{
      .item;
      justify-content: flex-start;
      >*{
          margin-right: 5px;
      }
  }
  .right{
      .item;
      justify-content: flex-end;
      >*{
          margin-left: 5px;
      }
  }
}
.body{
    overflow: auto;
    flex-grow: 1;
}
.foot{
    flex-grow: 0;
    flex-shrink: 0;
    padding:3px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
// 遮罩
.mask{
    position: absolute;
    top: 0px;
    left: 0px;
    width:100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
}
</style>



