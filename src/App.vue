<template>
  <div id="app">
  	<vhead></vhead>
    <router-view class="pb55"></router-view>
    <vfoot class="pf bottom_0 left_0 h50 wp"></vfoot>
  </div>
</template>

<script>
import vhead from "./components/headList"
import vfoot from "./components/footlist"
export default {
  name: 'app',
  components:{
  		"vhead":vhead,
  		"vfoot":vfoot
  }
}
</script>

<style>
.pb55{padding-bottom: 55px;}
</style>
