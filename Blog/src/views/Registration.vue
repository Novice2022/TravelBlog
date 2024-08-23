<template>
    <div class="page-container">
        <div class="page-content-container container">
            <form
                class="page-content-block"
                @submit.prevent="handleFormSubmit"
            >
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
                <Button
                    button-style="primary"
                    button-type="submit"
                >
                    Зарегистрироваться
                </Button>
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
            email: "",
            password: "",
            confirmPassword: "",
            samePasswords: true,
            occupiedEmail: false,
		};
    },
    methods: {
        handleFormSubmit() {
            if ( !this.email || !this.password || this.occupiedEmail || !this.samePasswords ) {
                console.log(`
                    !this.email:\t\t\t${!this.email}
                    !this.password:\t\t\t${!this.password}
                    this.occupiedEmail:\t\t${this.occupiedEmail}
                    !this.samePasswords:\t${!this.samePasswords}
                `);
                return console.log("Something went wrong...");
            }

            fetch(
                APIRoot + "register/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                }
            ).then(
                response => response.json()
            ).then(
                data => {
                    if (!Object.keys(data).indexOf("messages")) {
                        this.occupiedEmail = true;
                    } else {
                        this.occupiedEmail = false;
                        this.email = "";
                    }
                }
            ).catch(
                error => {
                    console.error(`Error occurred while fetching [${ APIRoot + "login/" }]`, error);
                }
            )

            this.email = this.password = this.confirmPassword = "";
            console.log()
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
