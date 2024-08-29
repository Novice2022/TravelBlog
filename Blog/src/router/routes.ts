import { createRouter, createWebHistory } from 'vue-router';

import NotFoundView from '@/views/NotFoundView.vue';
import HomeView from '@/views/HomeView.vue';
import Registration from '@/views/RegistrationView.vue';
import Authorization from '@/views/AuthorizationView.vue';
import ProfileView from '@/views/profile/ProfileView.vue';
import MyProfileView from '@/views/profile/MyProfileView.vue';
import EditProfileView from '@/views/profile/EditProfileView.vue';
import CreatePostView from '@/views/CreatePostView.vue';
import PostView from '@/views/PostView.vue';
import CreateComment from '@/views/CreateCommentView.vue';


const onlyAuthorized = {
	requiresAuth: true,
	redirect: { path: "/authorization/" }
};

export const router = createRouter({
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
		},
		{
			path: "/posts/:id/",
			component: PostView,
			props: true,
		},
		{
			path: "/profile/",
			name: "profile",
            component: ProfileView,
			children: [
				{
                    path: "",
					name: "my-profile",
					meta: onlyAuthorized,
                    component: MyProfileView,
                },
				{
					path: "edit/",
                    name: "edit-profile",
					meta: onlyAuthorized,
                    component: EditProfileView,
				}
			],
		},
		{
            path: "/create-post/",
            name: "create-post",
			meta: onlyAuthorized,
            component: CreatePostView,
        },
		{
            path: "/create-comment/:id",
            name: "create-comment",
			meta: onlyAuthorized,
            component: CreateComment,
			props: true,
        },
		{
			path: '/:pathMatch(.*)*',
			name: "not-found",
            component: NotFoundView,
		}
	]
})
