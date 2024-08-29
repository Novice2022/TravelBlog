<template>
	<div class="input-text-container">
		<p class="input-text-title">
			<span>
				<span
					class="danger-content"
					v-if="isRequiredFormField"
				>* </span>
				{{ titleText }}
			</span>
		</p>
		<textarea
			type="text"
			:class="isCorrectField ? 'correct' : 'danger-field'"
			:placeholder="placeholderText ?? titleText"
			:value="modelValue"
			@input="$emit(
				'update:modelValue',
				($event.target as HTMLInputElement).value
			)"
			:maxlength="contentLimit"
			:id="id"
		/>
		<div class="bottom">
			<p class="danger-content"> {{ !isCorrectField ? onErrorHint : '' }} </p>
			<p class="correct-content">
				{{ modelValue?.toString().length }}&nbsp;/&nbsp;{{ getPrettyContentLengthLimit }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		titleText: String,
		onErrorHint: String,
		contentLimit: {
			type: Number,
            required: true,
		},
		isCorrectField: {
			type: Boolean,
            default: true,
            required: false,
		},
		placeholderText: {
			type: String,
			default: '',
			required: false,
		},
		modelValue: {
			type: [String, Number],
			reqired: true,
		},
		isRequiredFormField: {
			type: Boolean,
            default: true,
            required: false,
		},
		id: {
			type: String,
            default: "",
            required: false,
		}
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

#edit-profile-textarea {
	height: 125px;
}

</style>
