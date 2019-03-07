<template>
  <!-- 菜单定义 -->
  <div class="box">
    <winModal v-model="winModalValue" width="400px" :spin="spinShow" @onOk="onOk">
			<Form ref="formValidate" :model="formData" :rules="ruleValidate">
				<FormItem label="角色编号">
					<i-input disabled placeholder="自动编号" v-model="formData.Code"></i-input>
				</FormItem>
				<FormItem label="角色名称" prop="Name">
					<i-input v-model="formData.Name"></i-input>
				</FormItem>
				<FormItem label="备注">
					<i-input type="textarea" v-model="formData.Note"></i-input>
				</FormItem>
			</Form>
    </winModal>
  </div>
</template>

<script>
import winModalMixin from "@/components/base/panel/winModalMixin.js";
import { tInput, tableSelect } from "@/components/base";
import { getTableList } from "@/api/currency.js";
export default {
  name:'RolesModal',
  mixins: [winModalMixin],
  components: {
    tInput,
    tableSelect
  },
  data() {
    return {
      // 主数据
      formData: {},
			spinShow:false,
			ruleValidate:{
				Name: [
						{ required: true, message: '角色名称为必填项', trigger: 'change' }
				],
			}
    };
  },
  methods: {
    /**
     * 获取相关的附表数据
     */
    getData(data) {
      
    },
    onOk({success,error}){
      this.$refs.formValidate.validate((state)=>{
				if(state){
					setTimeout(()=>{
						success();
						this.$Message.success('操作成功')
					},500)
				}else{
					error()
				}
			})
    }
  }
};
</script>
<style lang="less" scoped>
</style>
