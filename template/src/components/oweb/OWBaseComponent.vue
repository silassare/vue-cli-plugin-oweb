<script lang="ts">
	import app from "@/app";
	import { Component, Vue } from "vue-property-decorator";

	@Component
	export default class OWBaseComponent extends Vue {
		get $app() {
			return app;
		}

		get $store() {
			return this.$app.store;
		}

		get $services() {
			return this.$app.services;
		}

		hasSlot(name: string = "default") {
			const slot = this.$slots[name];

			if (!slot) return false;
			if (slot.length > 1) return true;

			return !!(slot[0].text || "").trim();
		}
	}
</script>
