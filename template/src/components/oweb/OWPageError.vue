<template>
	<section class="ow-page-error">
		
	</section>
</template>

<script lang="ts">
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import {Component, Prop} from "vue-property-decorator";
	import {fnTypeI18n} from "@/components/oweb/ow.types";

	@Component
	export default class OWPageError extends OWBaseComponent {
		@Prop(fnTypeI18n())
		error?: any;
	}
</script>

<style lang="less" scoped></style>
