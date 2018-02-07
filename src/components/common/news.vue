<template>
  <div class="wp">
  	<ul class="wp db">
  		<li class="clearfix" v-for="item in items">
  			<div class="fl ml-5em mt-5em">
  				<img :src=item.vsrc  class="w10em db"/>
  			</div>
  			<div class="fl" style="width: calc(100% - 10.5em);">
  				<div class="mt-5em ml-5em fs18 fwb wp nwarp">{{item.title}}</div>
  				<div class="tal tnt1 mt-5em ml-5em c_20 wp nwarp">{{item.content}}</div>
  				<div class="tal tnt1 mt-5em ml-5em c_20  wp nwarp">{{item.time}}</div>
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
						{vsrc:"/static/new/news1.jpg",title:"好莱坞动画里的中国好声音",content:"深挖动画电影国配幕后轶事",time:"2017-02-17 16:12:27"},
						{vsrc:"/static/new/news2.jpg",title:"《变形金刚5》主创专访",content:"迈克尔贝：电影为观众而拍",time:"2017-02-17 16:12:27"}
					]
				}
			}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
