<template>
	<div class="input-text-container">
		<p class="input-text-title">
			<span><span class="danger-content">* </span>{{ titleText }}</span>
		</p>
		<input
			maxlength="255"
			:class="isCorrectField ? 'correct' : 'danger-field'"
			:placeholder="placeholderText || titleText"
			:type="type"
			:value="modelValue"
			@input="$emit(
				'update:modelValue',
				($event.target as HTMLInputElement).value
			)"
		/>
		<div class="bottom">
			<p
				v-if="!isCorrectField"
				class="danger-content"
			>
				{{ onErrorHint }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		titleText: String,
		onErrorHint: String,
		isCorrectField: Boolean,
		placeholderText: {
			type: String,
            default: '',
			required: false,
		},
		type: {
			type: String,
            default: 'text',
            required: false,
		},
		modelValue: [String, Number],
	},
	data() {
		return {
			fieldContent: "",
        }
	},
	emits: [
		'update:modelValue',
	]
};
</script>

<style scoped>
@import url("../assets/css/textFields.css");
</style>
