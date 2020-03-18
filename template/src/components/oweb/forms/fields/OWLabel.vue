<template>
	<div class="ow-label-wrap">
		<label class="ow-label" v-bind="$attrs">
			<span v-i18n="i18n"/>
			<slot v-if="hasSlot()" />
		</label>
	</div>
</template>

<script lang="ts">
	import { Component, Prop } from "vue-property-decorator";
	import { fnTypeI18n } from "../../ow.types";
	import OWBaseComponent from "../../OWBaseComponent.vue";

	@Component({
		inheritAttrs: false
	})
	export default class OWLabel extends OWBaseComponent {
		@Prop(fnTypeI18n())
		i18n?: any;
	}
</script>
<style lang="less" scoped>
.ow-label-wrap {
	.ow-label {
	}
}
</style>
