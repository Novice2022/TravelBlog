<template>
	<div class="page-container">
		<div class="page-content-container">
			<form
				class="page-content-block"
				@submit.prevent="handleFormSubmit"
			>
				<h1 class="content-container-h1">
					Добавление отзыва
				</h1>
				
			</form>
		</div>
	</div>
</template>

<script lang="ts">

import TextArea from '@/components/TextArea.vue';
import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';



export default {
	props: {
		id: String,
	},
	components: {
		InputText,
		TextArea,
		Button,
	},
	data() {
		return {
			
		}
	},
	methods: {
		async handleFormSubmit() {

		}
	},
}

</script>

<style scoped>

</style>
