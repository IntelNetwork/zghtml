<template>
  <div>
    <div>
        <headerSelect></headerSelect>
    </div>
    <div class="main">
        <div class="main-left">
            <personalLeft></personalLeft>
        </div>
        <div class="main-right">
            <div class="box-top">
                <div>
                    <div class="tltle">
                        数据资产组成
                        <p></p>
                    </div>
                    <div class="diamonds">
                        <span class="iconfont">&#xe62e;</span>
                        <span class="shuju">
                            <p class="Statistics">当前统计价值约为</p>
                            <p class="number">151256</p>
                        </span>
                    </div>
                    <div class="resume">
                        <div>
                            <p class="resume_title">工作经历：</p>
                            <div class="progress">
                                <div class="progressdiv"></div>
                                <span class="Percentage">30%</span>
                            </div>
                        </div>
                        <div>
                            <p class="resume_title">项目经历：</p>
                            <div class="progress">
                                <div class="progressdiv"></div>
                                <span class="Percentage">30%</span>
                            </div>
                        </div>
                        <div>
                            <p class="resume_title">学习经历：</p>
                            <div class="progress">
                                <div class="progressdiv"></div>
                                <span class="Percentage">30%</span>
                            </div>
                        </div>
                        <div>
                            <p class="resume_title">社交人脉：</p>
                            <div class="progress">
                                <div class="progressdiv"></div>
                                <span class="Percentage">30%</span>
                            </div>
                        </div>
                        <div>
                            <p class="resume_title">附加技能：</p>
                            <div class="progress">
                                <div class="progressdiv"></div>
                                <span class="Percentage">30%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="tltle">
                        个人数据完善度
                        <p></p>
                    </div>
                    <div class="Annular">
                        <div id="myChart" :style="{width: '120px', height: '120px'}"></div>
                    </div>
                    <p class="datacomplete">你的数据完善度为</p>
                    <div class="perfection">
                        <div></div>
                    </div>
                    <ul class="personalo">
                        <li class="personal1">个人简历：</li>
                        <li class="personal2">
                            <span>5</span>/5
                        </li>
                        <li class="personal3">去完善</li>
                    </ul>
                    <ul class="personalo">
                        <li class="personal1">多维度评测：</li>
                        <li class="personal2">去完善</li>
                    </ul>
                </div>
                <div>
                    <div class="tltle">
                        个人画像
                        <p></p>
                    </div>
                    <div class="radar">
                        <div class="bgradar">
                            <img src="../../assets/12.png" class="radartou" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-bottom">
                <div>
                    <ul class="analysis">
                        <li>
                            <div class="tltle">
                                数据资产累计分析
                                <p></p>
                            </div>
                        </li>
                        <li>
                            <ul class="Assets">
                                <li>工作计划</li>
                                <li>项目累计</li>
                                <li>学习成长</li>
                                <li>人脉关系</li>
                            </ul>
                        </li>
                        <li>
                            <el-select v-model="value" placeholder="请选择" class="year">
                                <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                              </el-select>
                        </li>
                    </ul>
                    <!-- 统计图 -->
                    <div class="statistical ">
                        <div id="mystatistical" :style="{width: '100%', height: '100%'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <fonter />
    </div>
  </div>
</template>
<script>
import headerSelect from "@/components/headerSelect";
import personalLeft from "@/components/personalCenter/personalLeft";
import fonter from "@/components/fonter";
export default {
  data() {
    return {
        options: [{
          value: '选项1',
          label: '近一月'
        }, {
          value: '选项2',
          label: '近一季'
        }, {
          value: '选项3',
          label: '近一年'
        }],
        value: '选项1'
    };
  },
  components: {
    headerSelect, 
    fonter,
    personalLeft,
  },
  created() {

  },
  mounted(){
    this.drawLine();
    this.discount();
  },
  methods: {
    drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            // hover样式
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)",
                color: '#000',
                textStyle: {
                    color: "#000000",
                }
            },
            // 图例  隐藏状态
            legend: {
                orient: 'vertical',
                left: 10,
                show:false,
                data: ['已完善', '未完善']
            },
            // 环形颜色
            color:['#339999','#EEEEEE'],
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: true,
                    label: {
                        // center
                        normal: {
                            show: true,
                            fontSize:15,
                            top:10,
                            position: 'center',
                            formatter: '{d}%' ,
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                show:true,
                                fontSize: '15',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 305, name: '已完善'},
                        // {value: 335, name: '未完善'},
                    ]
                }
            ]
        });
    },
    // 折现
    discount(){
        let mystatistical = this.$echarts.init(document.getElementById('mystatistical'))
        mystatistical.setOption({
            // textStyle:{
            //     color:'#339999'
            // },
            color:['#339999'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: {
                type: 'category',
                // 是否不从Y轴开始
                boundaryGap: true,
                data: ['11.1', '11.2', '11.3', '11.4', '11.5', '11.6', '11.7'],
                axisTick:{
                    show:false
                },
                textStyle:{
                    color:"#000000"
                }
            },
            yAxis: {
                type: 'value',
                axisTick:{
                    show:false
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            series: [{
                smooth:true,
                type: 'line',
                areaStyle: {},
                showSybol:true,
                data: [0, 0, 0, 934, 1290, 1330, 1320],
                areaStyle:{
                    normal:{
                        color:{
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                offset: 0,
                                color: "rgba(51,153,153,1)"
                                },
                                {
                                offset: 1,
                                color: "rgba(173,214,214,1)"
                                }
                            ],
                            global: false, // 缺省为 false
                            legend: {
                                textStyle: {
                                color: "339999",
                                fontSize: 16
                                }
                            }
                        }
                    }
                }
            }]
        })
    }
  }
};
</script>
<style type="text/css" scoped>
    .main {
        width: 1300px;
        min-width: 1200px;
        margin: 0 auto;
        margin-top: 30px;
        display: flex;
    }
    .main-left {
        width: 270px;
    }
    .main-right {
        width: 1020px;
        margin-left: 30px;
    }
    .box-top {
        display: flex;
        justify-content: space-between;
        padding: 1;
    }
    .box-top>div {
        width:326px;
        height:343px;
        background:rgba(255,255,255,1);
        box-shadow:0px 6px 12px 0px rgba(8,1,3,0.06);
        border-radius:6px;
    }
    .box-bottom >div{
        width:1020px;
        height:488px;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius:6px;
        margin-top: 20px;
        padding: 1px;
    }
    .tltle {
        margin: 16px 0px 0px 27px;
        font-size: 16px;
    }
    .tltle p {
        width: 34px;
        margin-top: 15px;
        border-bottom: 2px solid #339999;
    }
    .diamonds {
        height: 57px;
        margin: 30px 0px 0px 27px;
        display: flex;
    }
    .Statistics {
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
    .diamonds .iconfont {
        font-size: 54px;
    }
    .shuju {
        margin:-5px 0px 0px 26px;
        text-align: left;
    }
    .number {
        color: #212B42;
        font-size: 36px;
        margin-top: 12px;
    }
    .resume {
        margin:40px 0px 0px 26px;
    }
    .resume>div {
        display: flex;
        margin-top: 10px;
    }
    .resume_title {
        width: 88px;
        color: #B2B5B8;
    }
    .progress {
        width: 180px;
        height: 6px;
        margin-top: 5px;
        display: flex;
    }
    .progressdiv {
        width: 30%;
        height: 6px;
        background: #339999;
        border-radius:3px;
    }
    .Percentage {
        font-size: 14px;
        color: #339999;
        margin: -4px 0px 0px 10px;
    }
    .Annular {
        width: 120px;
        height: 120px;
        margin: 0 auto;
    }
    .datacomplete {
         width: 100%;
         text-align: center;
         color: #999999;
         margin: 21px 0px 22px 0px;
    }
    .perfection {
        width:248px;
        height:6px;
        background:#339999;
        opacity:0.2;
        border-radius:3px;
        margin: 0 auto;
        position: relative;
    }
    .perfection div{
        width: 75%;
        height:6px;
        background: #3D9597;
        position: absolute;
        z-index: 9;
    }
    .personalo {
        width:248px;
        margin: 0 auto;
        margin-top: 19px;
        font-size: 14px;
        display: flex;
    }
    .personal1 {
        color: #B2B5B8;
    }
    .personal2 {
        color: #404447;
        margin-left: 10px;
    }
    .personal3 {
        color: #339999;
        margin-left: 10px;
    }
    .dimension1 {
        color: #B2B5B8;
    }
    /* .dimension2 {
        
    } */
    .analysis {
        width: 98%;
        margin: 0 auto;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    } 
    .Assets {
        width: 357px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
    }
    .Assets li {
        color: #666666;
        cursor: pointer;
    }
    .year>>>.el-input {
        width: 50%;
    }
    .year>>>.el-input__inner {
        border: none;
    }
    .el-popper {
        min-width: 90px !important;
    }
    .statistical {
        width: 100%;
        height: 361px;
        /* border: 1px solid red; */
        margin-top: 20px;
    }
    .radar {
        width: 100%;
        margin: 0 auto;
    }
    .bgradar {
        width: 195px;
        height: 195px;
        border-radius: 50%;
        background-color: #AED5D6;
        margin: 10px auto auto auto;
        position: relative;
    }
    .radartou {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -17px;
        margin-left: -17px;
    }
</style>