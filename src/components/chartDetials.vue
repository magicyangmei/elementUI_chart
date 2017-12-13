<template>
   <div>
   	<h2>
   		{{changetype}} 
   	</h2>
  	<div id="main">
  		
  	</div>
  </div>
  
</template>

<style>
#main {
  width: 600px;
  margin: auto;
  height: 400px;
}
</style>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'

// import 'echarts/lib/chart/polar'
// enumerating ECharts events for now
export default {
  props:{
  	options:[String,Object]//规定传递过来的属性类型
  },
  data () {
    return {
      changetype:this.options, //默认挂载传递过来的数据
      id:"main",//选择器id
      myChart:""//实例化echart
    }
  },
  watch:{
  	options:{
  		handler:function(val,oldval){ //监听数据的变化 实例化chart
  			if(val!==oldval&&oldval!==""){
  				this.clear();//第二次加载 清空掉之前的canvas
  				this.init(this.options)
  			}else{//初始化 加载数据
  				this.init(this.options)
  			}
  		},
  		deep:true
  	}
  },
  methods:{
  	init(o){
  			var id = document.getElementById(this.id)
  			this.myChart = echarts.init(id);
	        // 指定图表的配置项和数据
	        var option = Object.assign({},o)
	        // 修改观察者模式 observer 对象为 object
	        this.myChart.setOption(option);
	        return this.myChart;
  	},
  	clear(){
  			this.myChart.clear();//清空画布
  	}
  }

}
</script>
