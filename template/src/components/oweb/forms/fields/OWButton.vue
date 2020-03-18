<template>
	<component :is="tag" class="ow-field-button" :class="buttonClass" v-bind="$attrs">
		<ow-icon v-if="iconLeft" v-bind="iconLeft"/>
		<span class="ow-field-button-label" v-if="i18n" v-i18n="i18n"/>
		<span class="ow-field-button-label" v-else-if="hasSlot()">
			<slot />
		</span>
		<ow-icon v-if="iconRight" v-bind="iconRight"/>
	</component>
</template>

<script lang="ts">
	import { Component, Prop } from "vue-property-decorator";
	import { tI18nOptions } from "oweb";
	import { fnTypeI18n, fnTypeIcon } from "../../ow.types";
	import OWBaseComponent from "../../OWBaseComponent.vue";

	@Component
	export default class OWButton extends OWBaseComponent {
		@Prop(fnTypeI18n())
		i18n?: any;
		@Prop(fnTypeIcon())
		iconLeft?: any;
		@Prop(fnTypeIcon())
		iconRight?: any;

		@Prop({
			type: Object,
			default: "button",
			validator: function(v: string) {
				return ["button", "a", "span"].indexOf(v) >= 0;
			}
		})
		tag?: any;

		get buttonClass() {
			return {
				"has-icon-left": this.iconLeft,
				"has-icon-right": this.iconRight
			};
		}
	}
</script>
<style lang="less" scoped>
.ow-field-button {
	&.has-icon-left {
	}
	&.has-icon-right {
	}
}
</style>
