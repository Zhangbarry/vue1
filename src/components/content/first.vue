<template>
  <div>
  	<div class="clearfix fs20 h50 lh50 bb_1">
  		<div class="fl fw700 ml-5em">正在热映(10)</div>
  		<div class="fr c_15 mr22"><router-link to="/fHot">&gt;</router-link></div>
  	</div>
    <vfilm></vfilm>
    <div class="clearfix fs20 h50 lh50 bt_1 mt1em">
  		<div class="fl fw700 ml-5em">即将上映(10)</div>
  		<div class="fr c_15 mr22"><router-link to="/fHot">&gt;</router-link></div>
  	</div>
  	<div class="wp bt_1">
  		<div class="w5em fwb fs18 mt-5em ml-5em">今日热点</div>
  		<div class="fwb fs18 mt-5em ml-5em">2017年春节美剧前瞻</div>
  		<div class="mt-5em ml-5em c_20 fs14">这个春天充满爆款的味道</div>
  		<div class="clearfix">
  			<div class="fl w33p bc41" v-for="item in items">
  				<img :src=item.vsrc alt="" class="db w9em ma0"/>
  			</div>
  		</div>
  		<div class="ml-5em mt-5em">{{Dtime}}</div>
  	</div>
  	<vnew></vnew>
  </div>
</template>
<script>
import vfilm from "../firstlist/film"
import vnew from '../common/news'
export default{
	data:function(){
		return{
			Dtime:new Date(),
			items:[
			{vsrc:"/static/ad/ad1.jpg"},
			{vsrc:"/static/ad/ad2.jpg"},
			{vsrc:"/static/ad/ad3.jpg"}
			]
		}
	},
		 components:{
  		"vfilm":vfilm,
  		"vnew":vnew
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
