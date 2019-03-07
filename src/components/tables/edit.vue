<template>
  <div class="tables-edit-outer">
    <div v-show="!isEditting" class="tables-edit-con" @click="startEdit">
      <span class="value-con" :class="{'value-con-empty':!value}">{{ value ||'0'}}</span>
      <!-- <Button v-if="editable" @click="startEdit" class="tables-edit-btn" style="padding: 2px 4px;" type="text"><Icon type="md-create"></Icon></Button> -->
    </div>
    <div v-show="isEditting" class="tables-editting-con">
      <Input v-if="editype==='text'" ref="inputRef" :value="value" @input="handleInput" @on-blur="saveEdit" class="tables-edit-input"/>
			<i-select v-else-if="editype==='select'" v-model="tableData2[index].L2Type">
				<Option v-for="item in tableData2L2Type" :key="item.Code" :value="item.Code" :label="item.Name">
					<span>{{item.Name}}</span>
					<span>({{item.Code}})</span>
				</Option>
			</i-select>
      <!-- <Button @click="saveEdit" style="padding: 6px 4px;" type="text"><Icon type="md-checkmark"></Icon></Button>
      <Button @click="canceltEdit" style="padding: 6px 4px;" type="text"><Icon type="md-close"></Icon></Button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TablesEdit',
  props: {
    value: [String, Number],
    edittingCellId: String,
    params: Object,
    editable: Boolean,
		/**
		 * 这个是可修改类型	默认为text
		 * 可选类型:
		 * 	1.text  普通input
		 * 	2.select 下拉框
		 */
		editype:{
			type:String,
			default:'text'
		},
		/**
		 * 一些修改类型的配置
		 */
		ediconfig(){
			return {}
		}
  },
	data(){
		return{
			selectConfig:{
// 				code:this.ediconfig.code||'Code',
// 				name:this.ediconfig.name||'Name'
			}
		}
	},
  computed: {
    isEditting () {
      return this.edittingCellId === `editting-${this.params.index}-${this.params.column.key}`
    }
  },
  methods: {
    handleInput (val) {
      this.$emit('input', val)
    },
    startEdit () {
			//BUG：为了解决第一次点击，直接确认后会导致input内容制空
			this.$emit('input', this.value);
      this.$emit('on-start-edit', this.params)
			this.$nextTick(function(){
				//手动聚焦
				this.$refs.inputRef.focus();
			})
    },
    saveEdit () {
      this.$emit('on-save-edit', this.params)
    },
    canceltEdit () {
      this.$emit('on-cancel-edit', this.params)
    }
  }
}
</script>

<style lang="less">
.tables-edit-outer{
  height: 100%;
  .tables-edit-con{
    position: relative;
    height: 100%;
    .value-con{
      vertical-align: middle;
    }
		//BUG：当数据为空时，无法进行编辑
		.value-con-empty{
			color:transparent;
		}
    .tables-edit-btn{
      position: absolute;
      right: 10px;
      top: 0;
			bottom: 0px;
      display: inline-flex;
			align-content: center;
			justify-content: center;
    }
//     &:hover{
//       .tables-edit-btn{
//         display: inline-block;
//       }
//     }
  }
  .tables-editting-con{
    .tables-edit-input{
      // width: ~"calc(100% - 60px)";
    }
  }
}
</style>
