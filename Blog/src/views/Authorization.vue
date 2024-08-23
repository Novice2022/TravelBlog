<template>
    <div class="page-container">
        <div class="page-content-container container">
            <form
                class="page-content-block"
                @submit.prevent="handleFormSubmit"
            >
                <h1 class="content-container-h1">Вход в профиль</h1>
                <p
                    v-if="!(loginIsCorrect || passwordIsCorrect)"
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
                <div class="buttons">
                    <Button
                        :on-click="redirectToSignUp"
                        button-type="button"
                        router-link="/registration/"
                        :redirecting="true"
                    >
                        Зарегистрироваться
                    </Button>
                    <Button
                        button-style="primary"
                        router-link="/authorization/"
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

import { APIRoot } from '@/config/constants';

export default {
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
        redirectToSignUp() {
            this.$router.push({
                name: "sign-up"
            });
        },
        handleFormSubmit() {
            let serverResponse: Object;

            /*
            {
                "email": "t23_email@test.com",
                "password": "qweR_12345"
            }
            */

            fetch(
                APIRoot + "login/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        login: this.login,
                        password: this.password
                    })
                }
            ).then(
                response => {
                    return response.json();
                }
            ).then(
                data => {
                    serverResponse = data;
                    if ("Bad credentials." in Object.values(serverResponse)) {
                        this.loginIsCorrect = false;
                        this.passwordIsCorrect = false;
                    } else {
                        this.loginIsCorrect = true;
                        this.passwordIsCorrect = true;
                        this.$router.push({
                            name: "main-page"
                        });
                    }
                    console.log(this.loginIsCorrect, this.passwordIsCorrect);
                }
            ).catch(
                error => {
                    console.error(`Error occurred while fetching [${ APIRoot + "login/" }]`, error);
                    this.loginIsCorrect = false;
                    this.passwordIsCorrect = false;
                }
            )

            this.login = this.password = "";

            // console.log(`Able to fetch [${ APIRoot + "login/" }] with ${ this.login }:${ this.password }`);
        }
	}
}

</script>

<style scoped>

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.error-message {
    margin-top: -10px;
    margin-bottom: 10px;
    text-align: center;
    color: var(--danger-color);
}

</style>
