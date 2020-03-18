<template>
	<i :class="iconClass" v-bind="$attrs" :style="styles"/>
</template>

<script lang="ts">
	import OWBaseComponent from "@/components/oweb/OWBaseComponent.vue";
	import { Component, Prop } from "vue-property-decorator";

	@Component
	export default class OWIcon extends OWBaseComponent {

		@Prop({ type: String, required: true })
		icon?: string;

		@Prop({
			type: String,
			validator: function(v: string) {
				return ["small", "normal", "medium"].indexOf(this.size) >= 0;
			},
			default: "normal"
		})
		size?: String;

		@Prop({ type: String, default: 'inherit' })
		color?: String;

		get iconClass() {
			return ["ow-icon-" + this.size];
		}
		get styles(){
			let styles = {};

			if (this.color){
				styles["color"] = this.color; 
			}

			return styles;
		}
	}
</script>

<style lang="less" scoped>
.ow-icon-small {
	font-size: var(--font-small);
}
.ow-icon-normal {
	font-size: var(--font-normal);
}
.ow-icon-medium {
	font-size: var(--font-medium);
}
</style>
