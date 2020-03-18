<template>
	<div class="ow-loader"></div>
</template>

<script lang="ts">
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import { Component } from "vue-property-decorator";

	@Component
	export default class OWLoader extends OWBaseComponent {}
</script>

<style lang="less" scoped>
.ow-loader {
}
</style>
