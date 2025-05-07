import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import uviewPlus from '@/uni_modules/uview-plus'

import dayjs from 'dayjs';

import * as Pinia from 'pinia'
import {
	createUnistorage
} from "@/uni_modules/pinia-plugin-unistorage";

export function createApp() {
	const app = createSSRApp(App)
	const store = Pinia.createPinia();
	store.use(createUnistorage());
	app.use(uviewPlus)
	app.use(store);
	app.use(dayjs);
	return {
		app,
		Pinia
	}
}
// #endif