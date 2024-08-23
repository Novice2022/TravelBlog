<template>
	<div class="input-text-container">
		<p class="input-text-title">
			<span><span class="danger-content">* </span>{{ titleText }}</span>
		</p>
		<textarea
			type="text"
			:class="isCorrectField ? 'correct' : 'danger-field'"
			:placeholder="placeholderText ?? titleText"
			v-model="value"
			:maxlength="contentLimit"
		/>
		<div class="bottom">
			<p
				v-if="!isCorrectField"
				class="danger-content"
			>
				{{ onErrorHint }}
			</p>
			<p class="correct-content">
				{{ value?.toString().length }}&nbsp;/&nbsp;{{ getPrettyContentLengthLimit }}
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
		contentLimit: Number,
		placeholderText: {
			type: String,
			default: '',
			required: false,
		},
		value: {
			type: [String, Number],
			reqired: true,
		},
	},
	computed: {
		getPrettyContentLengthLimit(): String {
			let result = "";
			let limit = (this.contentLimit ?? 0).toString();

			while (limit !== "") {
				result = limit.slice(-3) + " " + result;
				limit = limit.slice(0, -3);
			}

			return result.trimStart();
		}
	}
};
</script>

<style scoped>
@import url("../assets/css/textFields.css");
</style>
