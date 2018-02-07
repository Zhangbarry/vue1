<template>
  <div class="h50 fs14 bc_15">
  	<ul>
  		<li class="fl pt5l10 ml10 mt10" v-for="item in items">
  			<router-link :to=item.vurl>{{item.txt}}</router-link>
  		</li>
  	</ul>
  </div>
</template>
	
<script>
export default{
		data:function(){
					return{
						items:[
							{txt:"首页",vurl:"/first"},
							{txt:"图片",vurl:"/second"},
							{txt:"视频",vurl:"/third"},
							{txt:"新闻",vurl:"/fourth"},
							{txt:"关于",vurl:"/fifth"}
						]
				}
			}
}
</script>
<style scoped>
</style>
