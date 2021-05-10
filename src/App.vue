<template>
	<div id="app">
		<div class="head">
			<img src="./assets/yiqing.png" alt="">
		</div>
		<div class="nav">
			<ul class="ul">
				<router-link to="/"><li id="active">海外疫情</li></router-link>
				<router-link to="/app2"><li>国内疫情</li></router-link>
				<router-link to="/app3"><li>关键趋势</li></router-link>
			</ul>
		</div>
		<router-view class="view"></router-view>


	</div>
</template>

<script>

	export default {
		name: 'app', 
		data() {
			return {

			
			}
		},
		components: {

		},
		beforeMount() {
			//var _this=this
			// axios({
			// 	url:'http://localhost:3000/list_total',
			// 	method:'get'
			// }).then(function(res){
			//
			// 	_this.haiwai=JSON.parse(res.data.body).data.areaTree
			// 	console.log(_this.haiwai);
			// })
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

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.head img{
		width: 100%;
		height: 156px;

	}
	.nav ul{
		width: 100%;
		height:100px ;

	}
	.nav ul{
		display: flex;
		justify-content: center;
	}
	.nav ul li {
		width: 370px;
		height: 50px;
		background-color:#10ADB4;
		line-height: 50px;
		text-align: center;
		margin: 20px;
		font-size: 20px;
		color: white;
		font-weight: bold;

	}
	#active{
		background-color: #95f3f1;
	}
</style>
<!--#10ADB4;-->
<!--#95f3f1;-->
