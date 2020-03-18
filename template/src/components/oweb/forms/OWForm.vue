<template>
	<form @submit.prevent="$emit('submit',$event)">
		<slot/>
	</form>
</template>

<script lang="ts">
	import OWBaseComponent from "../OWBaseComponent.vue";
	import { Component } from "vue-property-decorator";

	@Component
	export default class OWForm extends OWBaseComponent {}
</script>

<style lang="less" scoped></style>
