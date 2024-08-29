<template>
	<form
		class="about-me-block"
		@submit.prevent="handleFormSubmit"
	>
		<InputText
			title-text="ФИО"
			on-error-hint="Введите фаше ФИО"
			:model-value="fullName"
			@update:model-value="newValue => fullName = newValue"
		/>
		<InputText
            title-text="Город"
            on-error-hint="Введите город"
            :model-value="city"
            @update:model-value="newValue => city = newValue"
		/>
		<TextArea
            title-text="О себе"
            on-error-hint="Введите биографию"
			:content-limit="600"
            :is-required-form-field="false"
			:model-value="bio"
            @update:model-value="newValue => bio = newValue"
			id="edit-profile-textarea"
		/>

		<div class="new-password">
			<h3>Смена пароля</h3>
			<div class="fields flex space-between">
				<InputText
					title-text="Новый пароль"
					type="password"
					on-error-hint="Пароли не совпадают"
					:is-correct-field="samePasswords"
					:model-value="newPassword"
            		@update:model-value="newValue => newPassword = newValue"
				/>
				<InputText
					title-text="Повторите новый пароль"
					type="password"
					:is-correct-field="samePasswords"
					:model-value="newPasswordConfirm"
            		@update:model-value="newValue => newPasswordConfirm = newValue"
				/>
			</div>
		</div>

		<div class="buttons flex space-between">
			<Button
				button-type="button"
				router-link="/profile/"
			>
				Назад
			</Button>
			<Button button-style="primary">Сохранить</Button>
		</div>
	</form>
</template>

<script lang="ts">

import InputText from "@/components/InputText.vue";
import TextArea from "@/components/TextArea.vue";
import Button from "@/components/Button.vue";

import { useAuthStore } from "@/stores/authorization";
import { fetchUser } from "@/config/static";
import axios from "axios";


export default {
	setup() {
		const authStore = useAuthStore();
		return { 
			authStore
		};
	},
	components: {
		InputText,
		TextArea,
		Button,
	},
	async beforeMount() {
		let user = await fetchUser();

		if (user.status < 300) {
			let data = await user.data;

			this.fullName = data.full_name ? data.full_name : this.authStore.fullName;
			this.city = data.city ? data.city : this.authStore.city;
			this.bio = data.bio ? data.bio : this.authStore.bio;
        }
	},
	data() {
		return {
            fullName: "",
            city: "",
            bio: "",

			newPassword: "",
			newPasswordConfirm: "",
        };
	},
	methods: {
		async handleFormSubmit() {
			await axios.post(
				"user/",
				{
					full_name: this.fullName,
					city: this.city,
					bio: this.bio,
				}
			);

			if (this.samePasswords && this.newPassword) {
				await axios.patch(
					'user/password/',
					{
						password: this.newPassword,
					}
				);
			}

			this.authStore.fullName = this.fullName;
			this.authStore.city = this.city;
			this.authStore.bio = this.bio;

			this.$router.replace("/profile/");
		}
	},
	computed: {
		samePasswords() {
			return this.newPassword === this.newPasswordConfirm;
		}
	}
};

</script>

<style scoped>

@import url("../../assets/css/profile_router_view.css");

.new-password {
	margin-top: 30px;
}

h3 {
	height: 30px;
	font-size: 18px;
	font-weight: 700;
}

.fields {
	column-gap: 20px;
}

</style>
