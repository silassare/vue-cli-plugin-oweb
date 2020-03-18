<template></template>

<script lang="ts">
	// a grid is really a row
	// a grid-item is really a column
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import { Component } from "vue-property-decorator";

	@Component
	export default class OWGrid extends OWBaseComponent {}
</script>

<style lang="less" scoped></style>
