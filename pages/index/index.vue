<template>
	<view class="fixed" :style="{height: getTopHeight()+'px'}">

	</view>
	<view :style="{marginTop: getTopHeight()+'px'}">
		<up-button text="月落1"></up-button>
		<up-button text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button><up-button
			text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button><up-button
			text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button><up-button
			text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button><up-button
			text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button>
		<up-button text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button><up-button
			text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button><up-button
			text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button><up-button
			text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button><up-button
			text="月落"></up-button><up-button text="月落"></up-button><up-button text="月落"></up-button>
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
	.fixed {
		background: white;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
	}
</style>