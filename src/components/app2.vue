<template>
    <div class="map">
        <div id="chart" style="width: 800px;height:400px;"></div>
        <div class="rank">
            <div class="title">国内全省累计确诊病例</div>
            <ul class="ul" v-for="(item ,index) in list" v-bind:key="index">
                <li class="li">{{ item.name }} <span class="span">{{item.value}}</span>  </li>

            </ul>
        </div>
        <div class="ranktwo"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    import "echarts/map/js/china";
    import jsonp from "jsonp";
    //import axios from "axios";

    let option = {
        title: {
            x: "center",
            textStyle: {
                color: "#9c0505"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "地区：{b}<br/>确诊：{c}"
        },
        series: [
            {
                name: "six",
                type: "map",
                mapType: "china",
                label: {
                    show: true,
                    color: "black"
                },
                emphasis: {
                    label: {
                        // color: "#fff",
                        fontSize: 15
                    },
                    itemStyle: {
                        // areaColor: "green"
                    }
                }
            }
        ],
        visualMap: {
            type: "piecewise",
            show: true,
            pieces: [
                { min: 50000 }, // 不指定 max，表示 max 为无限大（Infinity）。
                { min: 10000, max: 50000 },
                { min: 5000, max: 9999 },
                { min: 1000, max: 4999 },
                { min: 200, max: 999 },
                { min: 1, max: 199, label: "10 到 200（自定义label）" },
                { value: 0 } // 表示 value 等于 123 的情况。
            ],
            inRange: {
                color: ["#fff", "#ffaa85", "#660208"],
                symbolSize: [30, 100]
            }
        }
    };
    export default {
        name: "app2",
        data() {
            return {
                myChart:'',
                list:[]
            };
        },
        mounted() {
            this.getdata()

            this.myChart = echarts.init(document.getElementById("chart"));
        },
        methods: {
            getdata() {
                var _this=this
                jsonp(
                    "https://interface.sina.cn/news/wap/fymap2020_data.d.json",
                    (err, res) => {
                        let list = res.data.list.map(item => {
                            return { name: item.name, value: item.value };
                        });

                        _this.list=list
                        console.log(_this.list);
                        option.series[0].data=list
                        this.myChart.setOption(option)

                    }
                );
                // axios({
                //     url:'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
                //     method:'get'
                // }).then(function(res){
                //
                //     console.log(res)
                //     //console.log(_this.haiwai);
                // })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #chart{
        border: 1px solid #95f3f1;
        margin: 0 auto;
    }
    .rank{
        width: 250px;
        height: 400px;
        border: 1px solid #95f3f1;
        position: absolute;
        top: 260px;
        left: 10px;
        overflow: scroll;
    }
    .ranktwo{
        width: 250px;
        height: 400px;
        border: 1px solid #95f3f1;
        position: absolute;
        top: 260px;
        right: 10px;

    }
    .title{
        font-weight: bold;
        width: 100%;
        height: 50px;
    }
    .ul{
        width: 100%;

    }
    .li{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #95f3f1;
        line-height: 40px;
        padding: 5px;
        box-sizing: border-box;

    }
    .span{
        display: inline-block;
        float: right;
        margin-right: 40px;
        color: red;
        font-weight: bold;
    }
</style>
