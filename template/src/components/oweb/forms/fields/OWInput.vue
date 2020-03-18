<template>
	<div class="ow-field-wrap" :class="fieldClass">
		<div class="ow-field">
			<ow-icon v-if="iconLeft" v-bind="iconLeft"/>
			<component
				:is="tag"
				class="ow-field-input"
				v-bind="$attrs"
				v-model="realValue"
				v-i18n="i18n"
				@input="onInput"
				@blur="onBlur"
				@focus="onFocus"
				ref="input"
			/>
			<ow-icon v-if="iconRight" v-bind="iconRight"/>
		</div>
		<slot />
		<div class="ow-field-error" v-if="!isValid" v-i18n="errorMessage"></div>
	</div>
</template>

<script lang="ts">
	import OWField from "./OWField.vue";
	import { Component, Prop } from "vue-property-decorator";
	import {
		fnTypeI18n,
		fnTypeIcon,
		tOWValidatorFn,
		tOWMessage
	} from "../../ow.types";

	@Component({
		inheritAttrs: false // prevent attr
	})
	export default class OWInput extends OWField {
		@Prop(fnTypeI18n())
		i18n?: any;
		@Prop({ default: [Number, String] })
		value?: any;
		@Prop(fnTypeIcon())
		iconLeft?: any;
		@Prop(fnTypeIcon())
		iconRight?: any;
		@Prop({ type: Function })
		validator: tOWValidatorFn | undefined;

		tag: "input" | "textarea" = "input";

		isValid: boolean = true;
		hasFocus: boolean = false;
		errorMessage: tOWMessage = "";

		realValue = this.value;

		get hasValue() {
			return !(
				this.realValue === undefined ||
				this.realValue === null ||
				this.realValue === ""
			);
		}

		onInput(e: any) {
			this.$emit("input", e.target.value);
			this.runValidation();
		}

		onBlur(e: any) {
			this.hasFocus = false;
			this.$emit("blur", e);
			this.runValidation();
		}

		onFocus(e: any) {
			this.hasFocus = true;
			this.$emit("focus", e);
		}

		runValidation() {
			let el: any = this.$refs.input;

			if (this.validator) {
				let ret = this.validator(this.realValue);
				this.$nextTick(function() {
					this.isValid = ret.isValid;
					this.errorMessage = ret.errorMessage;
					this.realValue = ret.value;
				});
			} else if (el && typeof el.checkValidity === "function") {
				this.isValid = el.checkValidity();
			}
		}

		get fieldClass() {
			return {
				"is-valid": this.isValid,
				"is-invalid": !this.isValid,
				"is-focused": this.hasFocus,
				"is-empty": !this.hasValue,
				"has-value": this.hasValue,
				"has-icon-left": this.iconLeft,
				"has-icon-right": this.iconRight
			};
		}
	}
</script>
<style lang="less" scoped>
.ow-field-wrap {
	.ow-field {
		.ow-field-input {
		}
		.ow-field-label {
		}
	}

	&.has-icon-left {
	}
	&.has-icon-right {
	}
	&.has-value {
	}
	&.is-focused {
	}
	&.is-empty {
	}
	&.is-valid {
	}
	&.is-invalid {
	}
}
</style>
