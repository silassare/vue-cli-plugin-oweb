<template>
	<components :is="pageComponent"/>
</template>

<script lang="ts">
	import BaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import app from "@/app";
	import { Component } from "vue-property-decorator";

	@Component
	export default class WMain extends BaseComponent {
		get pageComponent() {
			let page = app.store.page;
			return page && page.getComponent();
		}
	}
</script>
