<script>
	export default {
		onLaunch: function() {
			//监听无网络切换到有网络的
			uni.onNetworkStatusChange(function(res) {
				if (res.isConnected) {
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}
			});

			// 隐藏TabBar
			uni.hideTabBar()
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-plus/index.scss";
</style>