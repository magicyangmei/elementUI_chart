<template>
	<div id="chartBox">
		<h1>
			<select v-model="selected">
				<option v-for="option in select_options">
					{{option.text}}
				</option>
			</select>
		</h1>
		<Echart :options="changType"></Echart>
	</div>
</template>
<script>
import Vue from 'vue'
import Echart from './chartDetials.vue'
import polar from './data/polar'
import bar from './data/bar'
import pie from './data/pie'
export default {
	name:"chart",
	components:{
		Echart
	},
	data () {
 		return {
 			selected:"polar",//默认选项
 			select_options:[// select 结构
 				{text:"polar",selected:true},
 				{text:"bar",selected:false},
 				{text:"pie",selected:false}
 			],
 			changType:""//选择option后传入 子组件的数据 根据传入的类型 选择相应的数据
 		}
  	},
  	mounted(){
  		this.init()//初始化加载第一章polar 图标
  	},
  	watch:{
  		selected:{//深度监听 select option数据的变化
  			handler:function(val,oldval){
  				if(val!=oldval){ //当选项产生变化时 触发子组件chart的更新
  					this.selectOption();
  				}else{
  					this.init();
  				}
  			},
  			deep:true
  		}
  	},
  	methods:{
  		init(){
  			this.changType = polar.data().polar;//数据传递到子组件
  		},
  		selectOption(){//选项产生变更后 根据类型传递给子组件数据
  			switch(this.selected) {
  				case "bar":
  					this.changType = bar.data();
  					break;
  				case "polar":
  					this.changType = polar.data().polar;
  					break;
  				case "pie":
  					this.changType = pie;
  					break;
  			}

  		}
  	}
}
</script>
<style scoped="scss">
	#chartBox{
		margin: 10% auto;
		border: 1px sold #dcdcdc;
	}
</style>