import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import Registration from '@/views/Registration.vue';
import Authorization from '@/views/Authorization.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/authorization/",
			name: "auth",
			component: Authorization,
		},
		{
			path: "/registration/",
			name: "sign-up",
            component: Registration,
            meta: {
                layout: 'empty-layout'
            }
		},
		{
			path: '/:pathMatch(.*)*',
			name: "not-found",
            component: NotFoundView,
			meta: {
				layout: 'empty-layout'
			}
		}
	]
})

export default router;
