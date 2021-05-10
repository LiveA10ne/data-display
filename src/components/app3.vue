<template>
  <div class="container">
    <el-row>
      <el-col :span="12">
        <div style="width: 100%;height: 600px"  id="chart"></div>
      </el-col>
      <el-col :span="12">
        <div style="width: 100%;height: 600px"  id="chart2"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import * as echarts from 'echarts'
import axios from "axios";

export default {
  name: "app3",
  data(){
    return{
      date:[],
      dailyData:[],
      dailyAddData:[]
    }
  },
  mounted() {
    this.getData();
  },

  methods:{
    getData:function () {
      var _this = this;
      axios({
        url:'http://localhost:3000/other',
        method:'get'
      }).then(function (res) {
        var getData = JSON.parse(JSON.parse(res.data.body).data);

        var dayList = [];
        var dayAddList = [];
        var copyDate = [];

        var arr1 = getData.chinaDayList;
        var arr2 = getData.chinaDayAddList;

        for (var item in arr1){
          dayList.push(arr1[item].confirm);
          copyDate.push(arr1[item].date);
        }

        for (var item2 in arr2){
          dayAddList.push(arr2[item2].confirm);
        }

        _this.dailyData = dayList;
        _this.dailyAddData = dayAddList;
        _this.date = copyDate;
        _this.draw();
      })
    },

    draw:function(){
      var _this = this;
      let chart = echarts.init(document.getElementById('chart'))
      let chart2 = echarts.init(document.getElementById('chart2'))

      chart.setOption({
        title:{
          text:"本土累计确诊"
        },
        xAxis: {
          type: 'category',
          data: _this.date
        },
        yAxis: {
          type: 'value',
          min:100500,
          max:103000
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },

        series: [{
          data: _this.dailyData,
          type: 'line',
          smooth: true,
          symbolSize:1,
          itemStyle: {
            normal: {
              lineStyle: {
                color: '#8cc4d5' //改变折线颜色
              }
            }
          },
        }]
      })

      chart2.setOption({
        title:{
          text:"本土新增确诊",
        },
        xAxis: {
          type: 'category',
          data: _this.date
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },

        series: [{
          data: _this.dailyAddData,
          type: 'line',
          smooth: true,
          symbolSize:2,
          itemStyle: {
            normal: {
              lineStyle: {
                color: '#d5bd8c' //改变折线颜色
              }
            }
          },
        }]
      })
    }
  }

}
</script>

<style>

</style>