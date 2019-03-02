<template>
  <!-- 菜单定义 -->
  <div class="box">
    <winModal 
    v-model="winModalValue"
    width="800px"
    :spin="spinShow">
      <div class="body">
        <div class="header">
          <Row :gutter="20">
            <!-- 第一栏 -->
            <i-col span="3">
              <div class="headimg"></div>
            </i-col>
            <!-- 第二栏 -->
            <i-col span="7">
              <tInput title="昵称">
                <i-input disabled size="small" slot="con" v-model="formData.NickName"></i-input>
              </tInput>
              <tInput title="关注渠道">
                <i-input disabled size="small" slot="con" v-model="formData.SubscribeDesc"></i-input>
              </tInput>
              <tInput title="关注来源">
                <i-input disabled size="small" slot="con"></i-input>
              </tInput>
              <tInput title="OpenId">
                <i-input disabled size="small" slot="con" v-model="formData.OpenId"></i-input>
              </tInput>
            </i-col>
            <!-- 第三栏 -->
            <i-col span="7">
              <tInput title="原始会员卡">
                <i-input disabled size="small" slot="con" v-model="formData.OrigVipCode"></i-input>
              </tInput>
              <tInput title="使用车辆">
                <i-input disabled size="small" slot="con" v-model="formData.CarNum"></i-input>
              </tInput>
              <tInput title="使用VIN">
                <i-input disabled size="small" slot="con" v-model="formData.VIN"></i-input>
              </tInput>
              <tInput title="使用会员卡">
                <i-input disabled size="small" slot="con" v-model="formData.VipCode"></i-input>
              </tInput>
            </i-col>
            <!-- 第四栏 -->
            <i-col span="7">
              <tInput title="编号">
                <i-input disabled size="small" slot="con" v-model="formData.Id"></i-input>
              </tInput>
              <tInput title="关注时间">
                <i-input disabled size="small" slot="con" v-model="formData.SubscribeDate"></i-input>
              </tInput>
              <tInput title="创建时间">
                <i-input disabled size="small" slot="con" v-model="formData.CreateDate"></i-input>
              </tInput>
              <tInput title="认证">
                <Checkbox slot="con" v-model="formData.IsAttest"></Checkbox>
              </tInput>
            </i-col>
          </Row>
        </div>
        <!-- 标签页 -->
        <div class="main">
          <Tabs type="card">
            <!-- 标签1 -->
            <TabPane label="基本信息" name="tab1">
              <Row :gutter="20">
                <!-- 第一列 -->
                <i-col span="8">
                  <tInput title="姓名">
                    <i-input size="small" slot="con" v-model="formData.CardName"></i-input>
                  </tInput>
                  <tInput title="性别">
                    <i-select size="small" slot="con" v-model="formData.NSex">
                      <Option value="男">男</Option>
                      <Option value="女">女</Option>
                    </i-select>
                  </tInput>
                  <tInput title="手机号">
                    <i-input size="small" slot="con" v-model="formData.Phone"></i-input>
                  </tInput>
                  <tInput title="证件号">
                    <i-input size="small" slot="con" v-model="formData.IDCard"></i-input>
                  </tInput>
                  <tInput title="出生日期">
                    <DatePicker
                      transfer
                      type="date"
                      placeholder="可根据身份证解析"
                      size="small"
                      slot="con"
                      v-model="formData.BirthDate"
                    ></DatePicker>
                  </tInput>
                  <tInput title="年龄">
                    <i-input disabled placeholder="通过出生日期计算" size="small" slot="con"></i-input>
                  </tInput>
                  <tInput title="民族">
                    <i-input size="small" slot="con"></i-input>
                  </tInput>
                </i-col>
                <!-- 第二列 -->
                <i-col span="8">
                  <tInput title="类型">
                    <i-select size="small" slot="con" v-model="formData.CardType">
                      <Option value="A01" label="个人">
                        <span>个人</span>
                        <span style="float:right;color:#3892d3">A01</span>
                      </Option>
                      <Option value="A02" label="公司">
                        <span>公司</span>
                        <span style="float:right;color:#3892d3">A02</span>
                      </Option>
                    </i-select>
                  </tInput>
                  <tInput title="学历">
                    <i-select size="small" slot="con" v-model="formData.EducationCode">
                      <Option value="5" label="高中">
                        <span>高中</span>
                        <span style="float:right;color:#3892d3">5</span>
                      </Option>
                      <Option value="4" label="专科">
                        <span>专科</span>
                        <span style="float:right;color:#3892d3">4</span>
                      </Option>
                      <Option value="3" label="本科">
                        <span>本科</span>
                        <span style="float:right;color:#3892d3">3</span>
                      </Option>
                      <Option value="2" label="硕士">
                        <span>硕士</span>
                        <span style="float:right;color:#3892d3">2</span>
                      </Option>
                      <Option value="1" label="博士">
                        <span>博士</span>
                        <span style="float:right;color:#3892d3">1</span>
                      </Option>
                    </i-select>
                  </tInput>
                  <tInput title="职业">
                    <i-input size="small" slot="con" v-model="formData.Profession"></i-input>
                  </tInput>
                  <tInput title="收入水平">
                    <i-select size="small" slot="con" v-model="formData.IncomeCode">
                      <Option value="1" label="1万以下">
                        <span>1万以下</span>
                        <span style="float:right;color:#3892d3">1</span>
                      </Option>
                      <Option value="2" label="1-3万">
                        <span>1-3万</span>
                        <span style="float:right;color:#3892d3">2</span>
                      </Option>
                      <Option value="A03" label="个体户">
                        <span>个体户</span>
                        <span style="float:right;color:#3892d3">A03</span>
                      </Option>
                    </i-select>
                  </tInput>
                  <tInput title="推荐人">
                    <i-input size="small" slot="con"></i-input>
                  </tInput>
                </i-col>
                <!-- 第三列 -->
                <i-col span="8">
                  <tInput title="婚姻状况">
                    <i-select size="small" slot="con">
                      <Option value="A01">已婚</Option>
                      <Option value="A02">未婚</Option>
                    </i-select>
                  </tInput>
                  <tInput title="子女描述">
                    <i-input size="small" slot="con"></i-input>
                  </tInput>
                  <tInput title="子女数量">
                    <InputNumber size="small" slot="con" style="width:100%" :min="0"></InputNumber>
                  </tInput>
                  <tInput title="常去商圈">
                    <i-input size="small" slot="con"></i-input>
                  </tInput>
                </i-col>
              </Row>
              <tInput title="住址">
                <i-input size="small" slot="con"></i-input>
              </tInput>
              <tInput title="备注">
                <i-input size="small" slot="con"></i-input>
              </tInput>
            </TabPane>
            <!-- 标签2 -->
            <TabPane label="车辆档案" name="tab2">
              <div class="header">
                <div class="header-left">
                  <!-- 复杂查询 -->
                  <Poptip placement="bottom-start" trigger="focus" transfer width="auto">
                    <i-input placeholder="请输入查询条件" style="width:150px"></i-input>
                    <Table
                      size="small"
                      height="150"
                      width="400"
                      ref="selection"
                      :columns="tab2inputTable"
                      :data="[]"
                      slot="content"
                    ></Table>
                  </Poptip>
                  <Button>删除行</Button>
                  <Button>新增车挡</Button>
                  <Button>修改车挡</Button>
                </div>
              </div>
              <Table
                size="small"
                border
                height="250"
                ref="selection"
                :columns="tab2col"
                :data="tab2data"
              >
                <!-- 车辆关系可编辑 -->
                <template slot-scope="{ index }" slot="L1RelationShip">
                  <i-select
                    transfer
                    size="small"
                    slot="con"
                    v-model="tab2data[index].L1RelationShip"
                  >
                    <Option value="A01">车主</Option>
                    <Option value="A02">亲属</Option>
                    <Option value="A03">朋友</Option>
                    <Option value="A04">司机</Option>
                    <Option value="A05">其他</Option>
                  </i-select>
                </template>
                <!-- 默认使用 -->
                <template slot-scope="{ index }" slot="L1IsDefaultUsed">
                  <Checkbox slot="con" v-model="tab2data[index].L1IsDefaultUsed"></Checkbox>
                </template>
              </Table>
            </TabPane>
            <!-- 标签3 -->
            <TabPane label="会员卡" name="tab3">
              <div class="header">
                <div class="header-left">
                  <!-- 复杂查询 -->
                  <Poptip placement="bottom-start" trigger="focus" transfer width="auto">
                    <i-input placeholder="请输入查询条件" style="width:150px"></i-input>
                    <Table
                      size="small"
                      height="150"
                      width="600"
                      ref="selection"
                      :columns="tab3inputTable"
                      :data="[]"
                      slot="content"
                    ></Table>
                  </Poptip>
                  <Button>删除行</Button>
                </div>
              </div>
              <Table
                size="small"
                border
                height="250"
                ref="selection"
                :columns="tab3col"
                :data="tab3data"
              >
                <!-- 能查看履历 -->
                <template slot-scope="{ index }" slot="L2ShowWxRecord">
                  <Checkbox slot="con" v-model="tab3data[index].L2ShowWxRecord"></Checkbox>
                </template>
                <!-- 能查看消费 -->
                <template slot-scope="{ index }" slot="L2ShowXfRecord">
                  <Checkbox slot="con" v-model="tab3data[index].L2ShowXfRecord"></Checkbox>
                </template>
                <!-- 默认使用 -->
                <template slot-scope="{ index }" slot="L2IsDefaultUsed">
                  <Checkbox slot="con" v-model="tab3data[index].L2IsDefaultUsed"></Checkbox>
                </template>
              </Table>
            </TabPane>
            <!-- 标签4 -->
            <TabPane label="专属顾问" name="tab4">
              <div class="header">
                <div class="header-left">
                  <i-input placeholder="请输入查询条件" style="width:150px"></i-input>
                  <Button>删除行</Button>
                </div>
              </div>
            </TabPane>
            <!-- 标签5 -->
            <TabPane label="标签" name="tab5">
              <div class="header">
                <div class="header-left">
                  <i-input placeholder="请输入查询条件" style="width:250px"></i-input>
                  <Button>贴上</Button>
                  <Button>打开标签库</Button>
                  <Button>删除</Button>
                </div>
              </div>
            </TabPane>
            <!-- 标签6 -->
            <TabPane label="活跃轨迹" name="tab6"></TabPane>
          </Tabs>
        </div>
      </div>
    </winModal>
  </div>
</template>

<script>
import winModalMixin from "@/components/base/panel/winModalMixin.js";
import { tInput } from "@/components/base";
import {getTableList} from "@/api/currency.js"
export default {
  mixins: [winModalMixin],
  components: {
    tInput
  },
  data() {
    return {
      //主数据
      formData: {},
      //madel加载
      spinShow:false,
      //标签2表格列项
      tab2col: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "车牌号",
          key: "L1CarNum",
          width: "110px"
        },
        {
          title: "VIN",
          key: "L1VIN",
          width: "220px"
        },
        {
          title: "车辆关系",
          // key:'L1RelationShip',
          slot: "L1RelationShip"
        },
        {
          title: "车主",
          key: "L1CarOwner"
        },
        {
          title: "默认使用",
          width: "90px",
          align: "center",
          slot: "L1IsDefaultUsed"
        }
      ],
      //标签3表格列项
      tab3col: [
        {
          type: "selection",
          width: 60,
          align: "center",
          fixed: "left"
        },
        {
          title: "会员卡",
          width: "170px",
          key: "L2VipCode"
          // fixed: "left"
        },
        {
          title: "会员卡关系",
          key: "L2RelationShip",
          width: "100px"
        },
        {
          title: "车牌号",
          key: "L2CarNum",
          tooltip: true,
          width: "120px"
        },
        {
          title: "VIN",
          key: "L2VIN",
          tooltip: true,
          width: "160px"
        },
        {
          title: "车主",
          key: "L2CarOwner",
          tooltip: true,
          width: "100px"
        },
        {
          title: "能查看履历",
          slot: "L2ShowWxRecord",
          width: "100px",
          align: "center"
        },
        {
          title: "积分权限",
          key: "L2BalanceOpt",
          width: "100px"
        },
        {
          title: "储值权限",
          key: "L2ScoreOpt",
          width: "100px"
        },
        {
          title: "卡券权限",
          key: "L2ECardOpt",
          width: "100px"
        },
        {
          title: "能查看消费",
          slot: "L2ShowXfRecord",
          width: "100px",
          align: "center"
        },
        {
          title: "授权截至",
          key: "L2AuthDate",
          tooltip: true,
          width: "100px"
        },
        {
          title: "默认使用",
          width: "90px",
          slot: "L2IsDefaultUsed",
          align: "center"
        }
      ],
      //标签2查询input复杂表列项
      tab2inputTable: [
        {
          title: "VIN",
          width: 160
        },
        {
          title: "车主"
        },
        {
          title: "会员卡",
          width: 160
        }
      ],
      //标签3查询input复杂表列项
      tab3inputTable: [
        {
          title: "会员卡",
          width: 160
        },
        {
          title: "客户名称"
        },
        {
          title: "手机号"
        },
        {
          title: "车牌号"
        },
        {
          title: "VIN",
          width: 160
        }
      ],
      //标签2表格数据
      tab2data: [],
      //标签3表格数据
      tab3data: []
    };
  },
  methods: {
    /**
     * 获取相关的附表数据
     */
    getData(data) {
      this.spinShow = true;
      Promise.all([
      //获取车辆档案
        getTableList({
          tableName:'menuTable1'
        }),
        //获取会员卡
        getTableList({
          tableName:'menuTable2'
        })
      ])
        .then((resArr)=>{
          this.tab2data = resArr[0].data.data || [];
          this.tab3data = resArr[1].data.data || [];
          this.spinShow = false;
        })
      return;
      //获取专属顾问
      this.$sdk.ajax({
        url: "GetWeiXinRegisterUser3List",
        success(res) {}
      });
      //获取标签
      this.$sdk.ajax({
        url: "GetWeiXinRegisterUser4List",
        success(res) {}
      });
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  margin-top: 10px;
}

.header {
  margin-top: -5px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .header-left {
    display: flex;
    align-items: center;
    > button,
    div {
      margin-right: 5px;
    }
  }
}
.upload-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.main {
  position: relative;
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0);
    height: 0px;
    transition: 0.2s;
  }
}
.main-none {
  position: relative;
  &::after {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
// 头像
.headimg {
  width: 85px;
  height: 85px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>



