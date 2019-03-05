<template>
  <div class="body">
    <Poptip v-model="poptipShow" placement="bottom-start" transfer width="auto" padding="0px">
      <i-input :disabled="disabled" icon="ios-search"  placeholder="请输入查询条件" style="width:150px" 
      v-model="inputValue"
      @on-enter="onEnter"></i-input>
      <div slot="content">
        <Table
          size="small"
          :height="height"
          :width="width"
          ref="selection"
          :columns="meConfig.columns"
          :data="tableData"
          :loading="tableLoad"
          slot="content"
          @on-row-dblclick="onRowDblclick"
        ></Table>
        <Page @on-change="getData({page:$event})" :total="tableTotal" simple show-elevator style="padding:5px"/>
      </div>
    </Poptip>
  </div>
</template>

<script>
import { getDynamicList } from "@/api/currency";
export default {
  name: "tableSelect",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    height:{type:String,default:'200'},
    width:{type:String,default:'500'},
    disabled:{type:Boolean,default:false}
  },
  data() {
    return {
      meConfig: this.config,
      //控制Poptip是否显示
      poptipShow: false,
      //控制tableloading
      tableLoad: true,
      //table
      columns: this.config.columns,
      //表数据
      tableData: [],
      //请求数据
      data: this.config.data,
      //当前全部数据数量
      tableTotal: 0,
      //input输入框的值
      inputValue:''
    };
  },
  watch:{
      poptipShow(val){
          if(val&&this.tableData.length==0){
              this.getData();
          }
      }
  },
  methods: {
    //当input按下回车时
    onEnter(){
        if(!this.poptipShow)this.poptipShow=true;
        this.getData({
            query:this.inputValue
        })
    },
    getData({page = 1,query=''}={}) {
      this.tableLoad = true;
      let meData = this.data;
      meData.page = page;
      meData.query = query;
      getDynamicList(meData).then(res => {
        this.tableData = res.data;
        this.tableTotal = res.total;
        this.tableLoad = false;
      });
    },
    //双击某一行的时候触发
    onRowDblclick(data,index){
        this.$emit('on-row-dblclick',data,index)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
