<template>
	<ow-page :fixed="true">
		<ow-loader-full/>
	</ow-page>
</template>

<script lang="ts">
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import { Component } from "vue-property-decorator";

	@Component
	export default class OWSplash extends OWBaseComponent {}
</script>

<style lang="less" scoped></style>
