<template>
  <div class="wp pa hp" style="background:url(../../../static/detail/detail7.jpg) no-repeat 68% 0%;top: 50px;left: 0;">
  		<div class="clearfix">
  			<div class="fl ml10 mt10"><router-link to="/"><img src="../../../static/detail/detail6.png" alt="" title="返回"  class="w1em"/></router-link></div>
  			<div class="fr mt10">
  				<router-link to="" style="margin-right: 15px;"><img src="../../../static/detail/detail8.png" alt="" title=""  class="w2em"/></router-link>
  				<span class="" style="margin-right: 15px;"><img src="../../../static/detail/detail4.png" alt="" title="分享" class="w2em" @click="tipShow"/></span>
  			</div>
  			<div class="wp bc_11 fs14" style="margin-top: 150px;">
  					<div class="clearfix">
  						<div class="fl w30p"><img :src="items.imgs" class="wp" style="margin-top: -80px;" /></div>
	  					<div class="fl">
	  						<div class="fs20 c_11 ml10" style="margin-top: -70px;">
	  							<div>{{items.title}}</div>
	  							<div class="w10em nwarp">{{items.etitle}}</div>
	  						</div>
	  						<div class="mt20 fwb ml-5em">{{items.vtime}}</div>
	  						<div class="mt-5em fwb ml-5em">{{items.vtype}}</div>
	  						<div class="mt-5em fwb ml-5em">{{items.vshow}}</div>
	  						<div class="mt-5em ">
	  							<span class="b_15 br4 pt5l10 ml2em cp">我想看</span><span class="b_43 c_41 br4 pt5l10 ml2em cp">我要评分</span>
	  						</div>
	  					</div>
  					</div>
  					<div class="wp tac fs20 c_42 mt-5em">{{items.vprofile}}</div>
  					<div class="wp h-5em bc_13"></div>
  					<div class="wp">
  							<div class="w80p ma0" style="margin-top: 2em;padding-bottom: 2em;">{{items.vdescription}}</div>
  					</div>
  					<div class="wp h-5em bc_13"></div>
  					<div class="wp">
  						<div class="wp tnt1 fs20 fwb mt-5em">
  							61演职人员
  						</div>
  						<div class="clearfix mt-5em">
  							<div class="fl w30p fs12 tac">
  								<div class="wp tal tnt1">导演</div>
  								<div class="wp mt-5em">
  									<img :src="items.vdirector" class="db w80p ma0" alt="" />
  								</div>
  								<div>{{items.vdname}}</div>
  							</div>
  							<div class="fl w70p fs12 tac" style="border-left: 1px solid #E0E0E0;">
  								<div class="tal tnt1">主要演员</div>
  								<div class="clearfix wp mt-5em">
  									<div class="fl w50p">
  											<img :src="items.vactor1" class="db w80p ma0" alt="" />
  											<div>{{items.vaname1}}</div>
  									</div>
	  								<div class="fl w50p">
	  									<img :src="items.vactor2" class="db w80p ma0" alt="" />
  											<div>{{items.vaname2}}</div>
	  								</div>
	  								<div class="fl w50p">
	  									<img :src="items.vactor3" class="db w4em ma0" alt="" />
  											<div>饰:{{items.vaname3}}</div>
	  								</div>
	  								<div class="fl w50p">
	  									<img :src="items.vactor4" class="db w4em  ma0" alt="" />
  											<div>饰:{{items.vaname4}}</div>
	  								</div>
  								</div>
  							</div>
  						</div>
  					</div>
  			</div>
  			<div class="wp pa hp bottom_0 top_0 left_0 bc_27" style="z-index: 9998;" @click="tipHidden" v-show="tips" @wheel="handscrolled">
  				<div class="pf bottom_0 wp bc_11">
  					<p class="tac fs16" style="padding: 8px 0;border-bottom:1px solid #E2E2E2 ;" show-data>分享</p>
  					<ul class="clearfix db wp mt10" style="opacity: 1;z-index: 9999;">
  						<li class="fl w33p">
  							<img src="../../../static/detail/detail9.jpg" alt=""  class="db w5em ma0"/>
  							<p class="tac mt5">新浪微博</p>
  						</li>
  						<li class="fl w33p">
  							<img src="../../../static/detail/detail10.jpg" alt="" class="db w5em ma0"/>
  							<p class="tac mt5">qq空间</p>
  						</li>
  						<li class="fl w33p">
  							<img src="../../../static/detail/detail11.jpg" alt="" class="db w5em ma0"/>
  							<p class="tac mt5">百度</p>
  						</li>
  					</ul>
  				</div>
  			</div>
  		</div>
  </div>
</template>

<script>
export default{
		data:function(){
					return{
					items:"",
					tips:false
				}
		},
		methods:{
			tipShow:function(){
				this.tips = !this.tips;
			},
			handscrolled(){
					if(window.scrollY>0){
						this.tips = !this.tips;
					}
			},
			tipHidden:function(e){
				var _e =e.target;
				if(_e.tagName=="UL"||_e.tagName=="LI"||_e.tagName=="IMG"||_e.tagName =="P"){
					return
				}else{
						this.tips = !this.tips;}
			}
			
		},
		mounted:function(){
			$.ajax({url:"/static/phpData/filmDetail.json",
			success:function(d){
				this.items = d.items[this.$route.params.id]
			}.bind(this)
			})
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
