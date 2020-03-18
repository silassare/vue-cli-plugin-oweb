<script lang="ts">
	import OWInput from "./OWInput.vue";
	import { Component } from "vue-property-decorator";

	@Component
	export default class OWTextarea extends OWInput {
		tag: "textarea" = "textarea";
	}
</script>
