<template>
  <div>
   		<ul class="wp clearfix db">
   		<li class="fl w25p tac mt10" v-for="(item,index) in datas">
   			<div class="oh pr">
   				<img :src=item.imgs alt="" class="db ma0 scale1 animate1" style="width: 6em;" @click="getMovieDetail(item.dataId)" />
   				<div class="c_11 pa top_0 bc_41" style="right: 0;padding: 1px;">{{item.score}}</div>
   			</div>
   			<div class="nwarp">{{item.txt}}</div>
   		</li>
   	</ul>
  </div>
</template>

<script> 
export default {
   	data:function(){
   		return{
   		datas:[]
   		}
   	},
   	mounted:function(){
   			 $.get("/static/phpData/movie.json").then(function(d) {
   			 	this.datas=d.items
      }.bind(this));
   	},
   	methods:{
   		getMovieDetail(id){
      this.$router.push({ name: 'filmDetail', params: { id: id }})
    	}
   	}
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
