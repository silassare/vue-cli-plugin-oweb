<template>
	<div class="ow-card">
		<div class="ow-card-header" v-if="hasSlot('header')">
			<slot name="header" />
		</div>
		<div class="ow-card-body">
			<slot v-if="hasSlot()" />
			<slot v-else-if="hasSlot('body')" name="body" />
		</div>
		<div class="ow-card-footer" v-if="hasSlot('footer')">
			<slot name="footer" />
		</div>
	</div>
</template>

<script lang="ts">
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import { Component } from "vue-property-decorator";

	@Component
	export default class OWCard extends OWBaseComponent {}
</script>

<style lang="less" scoped>
	.ow-card {
		.ow-card-header {}
		.ow-card-body {}
		.ow-card-footer {}
	}
</style>
