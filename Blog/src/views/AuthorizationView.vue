<template>
	<div class="page-container">
		<div class="page-content-container container">
			<form
				class="page-content-block form"
				@submit.prevent="handleFormSubmit"
			>
				<div class="form-content">
					<h1 class="content-container-h1">Вход в профиль</h1>
					<p
						v-if="!isCorrectFormData"
						class="error-message"
					>
						Неправильный логин или пароль
					</p>
					<InputText
						title-text="Логин"
						:is-correct-field="loginIsCorrect"
						on-error-hint=""
						:model-value="login"
						@update:model-value="(newValue) => login = newValue"
					/>
					<InputText
						type="password"
						title-text="Пароль"
						:is-correct-field="passwordIsCorrect"
						on-error-hint=""
						:model-value="password"
						@update:model-value="(newValue) => password = newValue"
					/>
				</div>
				<div class="buttons">
					<Button
						button-type="button"
						router-link="/registration/"
					>
						Зарегистрироваться
					</Button>
					<Button
						button-style="primary"
						:prevent-redirect="true"
					>
						Войти
					</Button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts">

import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';

import { useAuthStore } from '../stores/authorization';
import {
	ResponseError,
} from '@/config/static';


export default {
	setup() {
		const authStore = useAuthStore();
		return {
			authStore
		};
	},
	components: {
		InputText,
		Button,
	},
	data() {
		return {
			login: "",
			password: "",
			loginIsCorrect: true,
			passwordIsCorrect: true,
		};
	},
	methods: {
		async handleFormSubmit() {
			try {
				await this.authStore.login(
					this.login,
                    this.password
				);
				this.$router.replace("/");
			}
			catch (error) {
				if (error instanceof ResponseError) {
					console.warn(`Handling the ${ error }`);

					if (error.status === 400) {
						this.loginIsCorrect = false;
					}
					if (error.status === 401) {
						this.loginIsCorrect = true;
						this.passwordIsCorrect = false;
					}
				} else {
					// throw error;
				}
			}
		}
	},
	computed: {
		isCorrectFormData() {
			return this.loginIsCorrect && this.passwordIsCorrect;
		}
	}
}

</script>
