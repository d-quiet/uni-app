//域名
const baseUrl = "https://yxq.clcwgyl.cn";
import utils from './utils';
// 从stores拿token
import {
	useStore
} from "@/stores/index.js"
//请求 
function http(opts) {
	const store = useStore()
	console.log(store.user_token,999)
	let thisBaseUrl = baseUrl; //单独配置的域名   
	let httpDefaultOpts = {
		url: thisBaseUrl + opts.url,
		data: opts.params,
		method: opts.method,
		timeout: 20000,
		sslVerify: false,
		header: opts.method == 'GET' ? {
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			'lng': store.lng,
			'lat': store.lat,
			'token':store.user_token,
			'content-Type': 'application/x-www-form-urlencoded'
		} : {
			'lng': store.lng,
			'lat': store.lat,
			'token':store.user_token,
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'json',
	}

	//判断当前是否有token有就添加到请求头里没有就不带
	//promise
	let promise = new Promise(function(resolve, reject) {
		let network; //网络状态
		//网络状态
		uni.getNetworkType({
			success: function(res) {
				network = res.networkType;
				if (res.networkType == 'none') {
					uni.showToast({
						title: '无网络',
						icon: 'none',
						duration: 5000
					});
				}
			}
		});

		uni.request(httpDefaultOpts).then(
			(res) => {
				//成功
				if (res) {
					if (res.statusCode == 200 || (res.data && res.data.status == "success")) {
						//请求成功，返回最终需要的业务数据
						resolve(res.data);
					} else {
						if (res.statusCode == 401 || (res.data && res.data.code == 401)) {
							uni.removeStorageSync('token');
							uni.removeStorageSync('userInfo');
							uni.navigateTo({
								url:'/pages/pageIndex/login/index'
							})
							uni.showToast({
								icon:'none',
								title: '请登陆后操作',
							})
							reject("登录超时")
							return
						}
						//其他情况的失败,返回失败原因
						reject(res.info)
					}

				} else {
					//失败
					reject("请求失败")
				}
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
}


//请求
const httpRequest = (opts) => {
	opts.params = opts.params ? opts.params : {};
	return http(opts);
};
// //请求 - 带Token
// const httpTokenRequest = (opts) => {
// 	opts.params = opts.params ? opts.params : {};
// 	return http(opts);
// };

export default {
	httpRequest,
	// httpTokenRequest
}