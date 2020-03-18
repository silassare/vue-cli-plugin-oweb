<template>
	<section class="ow-page-wrapper" :class="{'ow-page-fixed':fixed}">
		<slot/>
	</section>
</template>

<script lang="ts">
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import { Component, Prop } from "vue-property-decorator";

	@Component
	export default class OWPage extends OWBaseComponent {
		@Prop({ type: Boolean, default: false })
		fixed: boolean = false;
	}
</script>

<style lang="less" scoped>
.ow-page-wrapper {
	position: relative;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	&.ow-page-fixed {
		position: fixed;
		z-index: calc(var(--z-index-header) + 1);
	}
}
</style>
