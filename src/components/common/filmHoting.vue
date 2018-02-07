<template>
  <div class="wp">
   <ul class="wp db">
   	<li class="clearfix mt5 wp" v-for="item in items">
   		<div class="fl ml10"><img :src=item.vsrc alt="" class="w6em" /></div>
   		<div class="fl" style="width: calc(100% - 10px - 6em);">
   			<div class="fw700 fs20 tal ml10">{{item.title}}</div>
   			<div class="mt-5em ml10 c_41 fs18">{{item.content}}</div>
   			<div class="ml10 mt-5em c_41">
   				<span class="b_43">{{item.pmodu1}}</span><span class="b_43" style="margin-left: .5em;">{{item.pmodu2}}</span>
   			</div>
   			<div class="ml10 mt-5em">
   				<span class="fl c_14 fs16 w100 nwarp">{{item.sum}}</span>
   				<span class="fr bc_41 c_11 w6em tac br4 pr" style="margin-right: 1em;padding: .5em 0;top: -.5em;">购票</span>
   			</div>
   		</div>
   	</li>
   </ul>
  </div>
</template>

<script>
export default{
		data:function(){
					return{
						items:[
			   			{vsrc:"/static/image/file1.jpg",title:"美女与野兽",content:"能在电影院听到经典唱段就值了",pmodu1:"IMAX",pmodu2:"中国巨幕",sum:"122家影院上映365场"},
			   			{vsrc:"/static/image/file2.jpg",title:"一条狗的使命",content:"一条狗的使命",pmodu1:"IMAX",pmodu2:"中国巨幕",sum:"122家影院上映365场"},
			   			{vsrc:"/static/image/file3.jpg",title:"金刚狼3",content:"狼叔的最后一战，一个时代的落幕",pmodu1:"IMAX",pmodu2:"中国巨幕",sum:"122家影院上映365场"},
			   			{vsrc:"/static/image/file4.jpg",title:"生化危机",content:"爱丽丝最后一战勇斗丧尸",pmodu1:"IMAX",pmodu2:"中国巨幕",sum:"122家影院上映365场"},
			   			{vsrc:"/static/image/file5.jpg",title:"金刚",content:"我已在脑内和你过完一生",pmodu1:"IMAX",pmodu2:"中国巨幕",sum:"122家影院上映365场"},
			   			{vsrc:"/static/image/file6.jpg",title:"最终幻想",content:"真人写实CG电影巅峰之作",pmodu1:"IMAX",pmodu2:"中国巨幕",sum:"122家影院上映365场"},
			   			{vsrc:"/static/image/file7.jpg",title:"天才捕手",content:"科林费斯裘德'相爱相杀'",pmodu1:"IMAX",pmodu2:"中国巨幕",sum:"122家影院上映365场"},
			   			{vsrc:"/static/image/file8.jpg",title:"欢乐好声音",content:"月伯乐舍身擦车那段真的笑抽",pmodu1:"IMAX",pmodu2:"中国巨幕",sum:"122家影院上映365场"}
		   			]
				}
			}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
