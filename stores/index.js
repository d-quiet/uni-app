import {
	defineStore
} from 'pinia'

export const useStore = defineStore('main', {
	state: () => {
		return {
			user_token: 'c4ed17f4-7157-45a3-aca6-6a6108bb4a82',
			tabBarValue: 'index', //底部tabbar默认index首页
			lng: '25.014752', //经度
			lat: '102.743075', //维度
			userInfo: {},
		}
	},
	getters: {},
	actions: {
		// 设置token
		setToken(token) {
			this.user_token = token
		},
		//设置底部tabbar
		setTabBar(value) {
			this.tabBarValue = value
		},
		//设置用户信息
		setUserInfo(data) {
			this.userInfo = data
		},
		//设置经纬度
		setLat(lng, lat) {
			this.lng = lng
			this.lat = lat
		}
	},
	unistorage: true
})