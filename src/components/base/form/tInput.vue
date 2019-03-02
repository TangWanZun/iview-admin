<template>
  <div class="body">
      <span>{{title}}</span>
      <slot name="con"></slot>
      
  </div>
</template>

<script>
export default {
  name: 'tInput',
  props: {
      title:{
          type:String
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.body{
  display: flex;
  align-items: center;
  font-size: 13px;
  min-height: 30px;
  >span{
    flex-shrink: 0;
    width:80px;
  }
}
</style>
