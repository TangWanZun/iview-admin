<template>
  <!-- 菜单定义 -->
  <div class="box">
    <winModal v-model="winModalValue">
      
    </winModal>
  </div>
</template>

<script>
import winModalMixin from "@/components/base/winModal.js";
export default {
  mixins: [winModalMixin],
  components: {

  },
  props: {
    data:{
      type:Object
    }
  },

  watch: {},
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang="less" scoped>
</style>



