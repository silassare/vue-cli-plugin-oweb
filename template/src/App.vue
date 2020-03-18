<template>
	<section id="oweb-root">
		<ow-main v-if="ready"></ow-main>

		<ow-freezer v-if="frozen"></ow-freezer>

		<ow-dialog-view></ow-dialog-view>

		<ow-splash v-if="splash"></ow-splash>
	</section>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import OWDialog from "./components/oweb/OWDialog.vue";
	import OWMain from "./components/oweb/OWMain.vue";
	import OWSplash from "./components/oweb/OWSplash.vue";
	import OWFreezer from "./components/oweb/OWFreezer.vue";
	import app from "./app";

	@Component({
		components: {
			OWDialog,
			OWMain,
			OWSplash,
			OWFreezer
		}
	})
	export default class App extends Vue {
		data() {
			return app.store;
		}
	}
</script>

<style lang="less">
@import url("./assets/styles/bundle.less");
</style>
