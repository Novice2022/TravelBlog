<template>
	<div class="page-container">
		<div class="page-content-container container">
			<form
				class="page-content-block form"
				@submit.prevent="handleFormSubmit"
			>
				<div class="form-content">
					<h1 class="content-container-h1">Регистрация</h1>
	
					<InputText
						title-text="Email"
						on-error-hint="Аккаунт с данным email уже существует"
						:is-correct-field="!occupiedEmail"
						:model-value="email"
						@update:model-value="newValue => email = newValue"
					/>
					<div class="passwords-row">
						<InputText
							title-text="Пароль"
							type="password"
							on-error-hint="Пароли не совпадают"
							:model-value="password"
							@update:model-value="(newValue) => password = newValue"
							:is-correct-field="checkPasswords"
						/>
						<InputText
							title-text="Повторите пароль"
							type="password"
							on-error-hint=""
							:model-value="confirmPassword"
							@update:model-value="(newValue) => confirmPassword = newValue"
							:is-correct-field="checkPasswords"
						/>
					</div>
				</div>
				<div class="buttons">
					<Button
						button-style="primary"
						button-type="submit"
					>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts">

import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';

import { APIRoot } from '@/config/static';
import axios, { AxiosError } from 'axios';

export default {
	components: {
		InputText,
		Button,
	},
	data() {
		return {
			email: "",
			password: "",
			confirmPassword: "",
			samePasswords: true,
			occupiedEmail: false,
		};
	},
	methods: {
		async handleFormSubmit() {
			try {
				let response = await axios.post(
					"register/",
					{
						email: this.email,
						password: this.password
					}
				);

				if (response.statusText === "OK") {
					if ("messages" in response.data) {
						this.occupiedEmail = true
					} else {
						this.$router.replace("/profile/");
					}
				}
			} catch (error) {
				if (error instanceof AxiosError) {
					switch (error.status) {
						case 400:
							this.occupiedEmail = true;
							break;
					
						default:
							break;
					}
				}
			}

			this.email = this.password = this.confirmPassword = "";
		},
	},
	computed: {
		checkPasswords(): boolean {
			return this.samePasswords = this.password === this.confirmPassword;
		}
	}
}

</script>

<style scoped>

.passwords-row {
	display: flex;
	justify-content: space-between;
	column-gap: 20px;
}

</style>
