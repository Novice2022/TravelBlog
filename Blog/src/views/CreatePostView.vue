<template>
	<div class="page-container">
		<div class="page-content-container">
			<form
				class="page-content-block"
				@submit.prevent="handleFormSubmit"
			>
				<div class="form-content">
					<h1 class="content-container-h1">
						Добавление истории о путешествии
					</h1>
					
					<div class="upload-image-block">
						<button
							type="button"
							class="upload-image"
							:onclick="uploadImage"
						>
							<img src="../assets/images/upload.png" alt="Upload">
							<span>{{ imageFileName || "Загрузите ваше фото" }}</span>
						</button>
						<span class="error-message">{{ uploadImageError }}</span>
					</div>
					
					<InputText
						title-text="Заголовок"
						on-error-hint="Напишите заголовок"
						:is-correct-field="(!tryedFormUpload) || title.length > 0"
						:model-value="title"
						@update:model-value="newValue => title = newValue"
					/>
	
					<div class="form-fields-row">
						<InputText
							title-text="Страна"
							on-error-hint="Напишите название страны"
							:is-correct-field="(!tryedFormUpload) || country.length > 0"
							:model-value="country"
							@update:model-value="newValue => country = newValue"
						/>
						<InputText
							title-text="Город"
							on-error-hint="Напишите название города"
							:is-correct-field="(!tryedFormUpload) || city.length > 0"
							:model-value="city"
							@update:model-value="newValue => city = newValue"
						/>
					</div>
	
					<TextArea
						title-text="Описание"
						on-error-hint="Добавьте описание"
						placeholder-text="Добавьте описание вашей истории"
						:is-correct-field="(!tryedFormUpload) || description.length > 0"
						:content-limit="2000"
						:model-value="description"
						@update:model-value="newValue => description = newValue"
					/>
				</div>
				<div class="buttons">
					<Button
						button-type="button"
						router-link="/"
					>
						Назад
					</Button>
					<Button button-style="primary">Сохранить</Button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts">

import Button from '@/components/Button.vue';
import InputText from '@/components/InputText.vue';
import TextArea from '@/components/TextArea.vue';
import axios from 'axios';

import { APIRoot } from '@/config/static';


export default {
	components: {
		Button,
		InputText,
		TextArea,
	},
	data() {
		return {
			title: "",
			country: "",
			city: "",
			description: "",
			
			// title: "Один зимний день в Венеции",
			// country: "Италия",
			// city: "Венеция",
			// description: "Говорят, что Венецию покинуло 70% местных жителей. Говорят, что это из-за сверх туризма. Еще говорят, что Венеци...",

			imageSource: null as File | null,
			imageFileName: "",
			uploadImageError: "",

			tryedFormUpload: false,
		}
	},
	methods: {
		uploadImage() {
			const input = document.createElement("input");
			input.type = "file";
			input.accept = "image/jpg, image/jpeg, image/png";  // Server allows...
		
			input.onchange = (event: Event) => {
				const target = event.target as HTMLInputElement;
				
				if (!target.files) return;

				const file = target.files[0];

				this.imageSource = file;
				this.imageFileName = file.name;
				this.uploadImageError = "";
			}

			input.click();
        },
		async handleFormSubmit(event: Event) {
			event.preventDefault();

			if (!this.imageSource) {
				this.uploadImageError = "Обязательное поле для заполнения";
			}
			if (
				this.title.length &&
				this.country.length &&
				this.city.length &&
				this.description.length &&
				this.uploadImageError === ""
			) {
				this.tryedFormUpload = false;

				const formResponse = new FormData();

				formResponse.append(
					"title",
					this.title,
				);
				formResponse.append(
					"description",
					this.description,
				);
				formResponse.append(
					"country",
					this.country,
				);
				formResponse.append(
					"city",
					this.city,
				);
				formResponse.append(
					"photo",
					this.imageSource ?? "",
				);

				try {
					const request = axios.create(
						{
                            baseURL: APIRoot,
							headers: {
                                "Content-Type": "multipart/form-data",
								"Authorization": `Bearer ${ localStorage.getItem('authToken')}`,
                            },
                        },
					);

					const response = await request.post(
						"posts/",
						formResponse,
					);

					if (response.statusText === "OK") {
						alert("Ваша история успешно добавлена!");
					} else {
						alert(`Произошла ошибка при добавлении вашей истории: ${ response.statusText }`);
					}
				} catch (error) {
					console.error(error);
				}
			}

			else {
				this.tryedFormUpload = true;
			}
		}
	}
}

</script>

<style scoped>

.upload-image-block {
	margin-bottom: 30px;
}

.upload-image {
	display: flex;
	column-gap: 8px;
	align-items: center;
	border: 1px solid var(--light-grey-color);
	border-radius: 2px;
    padding: 0 16px;
	height: 32px;
}

.upload-image span {
	font-size: 14px;
}

.buttons {
	position: relative;
	top: 30px;
}

</style>
