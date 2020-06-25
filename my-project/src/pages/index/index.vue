<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{JSON.stringify(fly)}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				fly:{
					a:null,
					b:null,
					c:[
						{name:1},{name:2}
					]
				}
			}
		},
		onLoad() {
			
			this.intit()
			this.$con('fly',this.fly)
		},
		methods: {
			intit(){
				this.fly.a=123
				this.fly.b=456
				this.fly.c.forEach(e => {
					e.name+=1
				});
				this.init()
			},
			init(){
				this.$con(this.$options,'optios')
				Object.assign(this.$data , this.$options.data())
	
			}
		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
