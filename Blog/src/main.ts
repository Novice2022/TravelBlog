import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';

import App from './App.vue'

import { router } from './router/routes'
import { useAuthStore } from './stores/authorization';


const app = createApp(App)

app.use(createPinia())
app.use(router)

const authStore = useAuthStore();


router.beforeEach((to) => {
	if (to.meta.requiresAuth && !authStore.isAuthenticated) {
		router.replace(to.meta.redirect ?? '/');
	}
})

app.mount('#app')

console.clear()
