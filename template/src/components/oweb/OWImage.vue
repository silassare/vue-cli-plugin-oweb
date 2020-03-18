<template>
	<!-- permettre un placeholder, obliger de spécifier la taille dimension de l'image cible 
	ou tout au moins des dimenssions avec le même ratio -->
</template>

<script lang="ts">
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import { Component } from "vue-property-decorator";

	@Component
	export default class OWImage extends OWBaseComponent {}
</script>

<style lang="less" scoped></style>
