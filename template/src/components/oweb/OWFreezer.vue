<template>
	<div class="ow-freezer">
		<ow-loader-full/>
	</div>
</template>

<script lang="ts">
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import OWLoaderFull from "@/components/oweb/OWLoaderFull.vue";
	import { Component } from "vue-property-decorator";

	@Component({
		components: {
			OWLoaderFull
		}
	})
	export default class OWFreezer extends OWBaseComponent {}
</script>

<style lang="less" scoped>
.ow-freezer {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: var(--freezing-bg);
}
</style>
