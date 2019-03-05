<template>
  <div class="full-screen-btn-con">
    <Tooltip content="刷新当前页" placement="bottom">
      <Icon @click.native="refersh" type="md-refresh" :size="23"></Icon>
    </Tooltip>
  </div>
</template>

<script>
export default {
  name: 'refresh',
  props:{
      value:{
          type:Boolean
      }
  },
  methods: {
    refersh () {
        this.$emit('input',false);
        this.$emit('on-refresh',this.$route.name);
        this.$nextTick(()=>{
            this.$emit('input',true);
            this.$emit('on-refresh','');
        })
    },
  },
}
</script>

<style lang="less" scoped>
.full-screen-btn-con .ivu-tooltip-rel{
  height: 64px;
  line-height: 56px;
  i{
    cursor: pointer;
  }
}
</style>
