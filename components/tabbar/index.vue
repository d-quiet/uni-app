<template>
	<up-tabbar :value="active" :fixed="true" :placeholder="false" :safeAreaInsetBottom="true">
		<up-tabbar-item v-for="item,index in tabBarList" :key="index" :text='item.text' :icon="item.icon"
			@click="handleClick(item)"></up-tabbar-item>
	</up-tabbar>
</template>

<script setup>
	import {
		ref,
		reactive,
		computed
	} from 'vue'
	const {
		active
	} = defineProps({
		active: {
			type: Number,
			default: 0
		}
	})

	const tabBarList = ref([{
			text: '首页',
			icon: 'home',
			pagePath: 'index'
		},
		{
			text: '我的',
			icon: 'account',
			pagePath: 'my'
		}
	])

	const handleClick = (item) => {
		uni.switchTab({
			url: item.pagePath
		})
	}
</script>

<style lang="scss" scoped>

</style>