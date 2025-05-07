<template>
	<view :style="{marginTop: getTopHeight()+'px'}">
		<up-button text="月落"></up-button>
	</view>

	<Tabbbar :active="0"></Tabbbar>
</template>

<script setup>
	import Tabbbar from "@/components/tabbar/index.vue"
	import {
		ref,
		reactive,
		computed
	} from 'vue'
	import {
		getTopHeight
	} from "../../utils/utils"
</script>

<style lang="scss" scoped>

</style>