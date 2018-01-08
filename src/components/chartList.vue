<template>
	<div class="calcBlock">
		<div class="part inputContentBox">
			<p>
				<input v-model="boxId" type="text" placeholder="输入容器id">
				<select name="" id="">
					<option value="">选择图表类型</option>
					<option value="">bar</option>
					<option value="">pie</option>
				</select>
			</p>
		</div>
		<div class="part showChart">
			<createBox :currentId="boxId"></createBox>
		</div>
		<div class="part code">
			
		</div>
	</div>
</template>
<script>
import createBox from "./chartSingle.vue";
export default {
	name:"clacBlcok",
	components:{
		createBox
	},
	data(){
		return{
			boxId:"main"
		}
	},
	watch:{
		 
	},
	methods:{
		 
	}
}	
</script>
<style lang="scss">
$p0:0;
$m0:0;
$bxs:border-box;
$dis:flex;
$fs:flex-start;
$jc:center;
$ai:center;
$h100:100vh;
body{
	padding:0;
	margin:0;
}
.calcBlock{
	display: $dis;
	flex-flow: row wrap;
	height: $h100;
	justify-content:$fs;
}
.part{
	width: 50vw;
	height: 50vh;
	box-sizing: $bxs;
	border: 1px solid #dcdcdc;
}
.part:nth-child(2){
	height: 100vh;
	border-left:none;
}
.code{
	border-top:none;
	margin-top:-50vh;
}
</style>