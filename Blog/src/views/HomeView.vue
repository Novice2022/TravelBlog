<template>
	<div class="page-container">
		<div class="panel">
			<Post
				v-for="(post, index) in posts"
				:key="index"
				:id="index + 1"
				:title="post.title"
				:excerpt="post.excerpt"
				:county="post.county"
				:city="post.city"
				:photo-path="getImageLocation(post.photo)"
			/>
		</div>
		<Button
			v-if="authStore.isAuthenticated"
			button-type="button"
			button-style="primary"
			router-link="/create-post/"
			id="create-post"
		>
			Добавить моё путешествие
		</Button>
	</div>
</template>

<script lang="ts">

import Button from '@/components/Button.vue';
import Post from '@/components/Post.vue';
import Header from '@/components/Header.vue';

import { useAuthStore } from '@/stores/authorization';
import { getServersImageSource } from '@/config/static';

import axios from 'axios';


interface PostShortInterface {
	id: number
	title: string
	excerpt: string
	county: string
	city: string
	photo: string
}


export default {
	setup() {
		const authStore = useAuthStore();
		return {
			authStore
		};
	},
	components: {
		Post,
        Button,
		Header,
	},
	beforeMount() {
		this.loadPosts();
	},
	data() {
		return {
			posts: [] as PostShortInterface[],
		};
	},
	methods: {
		async loadPosts(): Promise<void> {
			try {
				this.posts = (await axios.get("posts/")).data;
			} catch (error) {
				console.error(error);
			}
		},
		getImageLocation: getServersImageSource
	},
	computed: {
		headerContent(): string {
			if (this.authStore.isAuthenticated) {
				return "ИСТОРИИ ВАШИХ ПУТЕШЕСТВИЙ"
			}

			return "ТАМ ГДЕ МИР НАЧИНАЕТСЯ С ПУТЕШЕСТВИЙ";
		}
	}
}

</script>

<style scoped>

.panel {
	display: grid;
	gap: 30px;
	grid-template-columns: repeat(3, 370px);
	justify-self: center;
	margin-bottom: 30px;
}

#create-post {
	margin: 30px 0;
}

</style>
