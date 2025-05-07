//首页登录相关接口
import Request from '@/utils/request.js'; 
export default {
	//获取验证码
	send: function(params) { 
		return Request.httpRequest({
			url: '/api/sms/send',
			method: 'POST',
			params: params
		});
	},
	//短信登录
	mobilelogin: function(params) {
		return Request.httpRequest({
			url: '/api/user/mobilelogin',
			method: 'POST',
			params: params
		});
	},
	//获取高德的key
	get_map_config: function(params) {
		return Request.httpRequest({
			url: '/api/index/get_map_config',
			method: 'POST',
			params: params
		});
	},
	
}