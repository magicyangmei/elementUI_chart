<template>
	<div>
		<h2>
			当前容器id：{{currentBoxId}}
		</h2>
		<div :id="currentBoxId" ref="charInit" class="charDemoBox">
			
		</div>
	</div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import polar from './data/polar'
import bar from './data/bar'
import pie from './data/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
	export default {
		props:["currentId"],
		data(){
			return{
				currentBoxId:""
			}
		},
		watch:{
			currentId:{
				handler(val,oldval){
					if(val){
						this.currentBoxId =this.currentId
						this.init(this.currentBoxId);
					}
				},
				deep:true
			}
		},
		components:{
			echarts
		},
		mounted(){
			this.$nextTick(function () {
			   this.init();
			})
		},
		methods:{
			init(id){
				let chartid = this.$refs.charInit;
				console.log(this.$refs.charInit)
				if(chartid){
					let myEcharts = echarts.init(chartid)
					let option = bar.data();
					myEcharts.setOption(option);
				}
			}
		}
	}
</script>
<style lang="scss">
h2{
	padding: 0;
}
.charDemoBox{
	width: 80%;
	margin:0 auto;
	height: 600px;
	background:#dcdcdc;
}
</style>