<template>
    <div>
        <div class="apponenav onenav">
            <ul>
                <li>地区</li>
                <li class="speacal">确诊</li>
                <li>死亡</li>
            </ul>
        </div>
        <div class="listsss apponenav" v-for="(item,index) in haiwai" v-bind:key="index">
            <ul>
                <li class="sepcalname">{{item.name}}</li>
                <li>{{item.total.confirm}}</li>
                <li>{{item.total.dead}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: 'app1',
        data() {
            return {
                haiwai:[],
                guonei:[]

            }
        },
        components: {

        },
        beforeMount() {
            var _this=this
            axios({
                url:'http://localhost:3000/list_total',
                method:'get'
            }).then(function(res){

                _this.haiwai=JSON.parse(res.data.body).data.areaTree
                //console.log(_this.haiwai);
            })
            // axios({
            // 	url:'http://localhost:3000/disease',
            // 	method:'get'
            // }).then(function(res){
            // 	console.log(JSON.parse(JSON.parse(res.data.body).data));
            // })

        },
        methods: {

        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    .listsss{
        width: 100%;
        height: 55px;
        border-radius: 25px;
        background-color: #ececec;
        margin: 20px 0px;
        line-height: 55px;
    }
    .nav ul{
        width: 100%;
        height:100px ;

    }
    .apponenav ul{
        display: flex;
        justify-content: center;
    }
    .apponenav ul li {
        width: 370px;
        height: 55px;

        line-height: 22px;
        text-align: center;
        margin: 20px;
        font-size: 20px;
        color: grey;

    }
    .speacal{
        color: red;
    }
    .onenav{
        height: 40px;
        width: 100%;
    }

</style>