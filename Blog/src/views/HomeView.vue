<template>
	<div class="page-container">
		<div class="panel">
			<Post
				v-for="(post, index) in posts"
				:key="index"
				:id="index"
				:title="post.title"
				:excerpt="post.excerpt"
				:county="post.county"
				:city="post.city"
				:photo-path="imagesPath + post.photo"
			/>
		</div>
		<Button
			v-if="logged"
			button-type="button"
			button-style="primary"
			style="margin-bottom: 30px;"
			:on-click="redirectToCreatePost"
			router-link="/authorization"
		>
			Добавить моё путешествие
		</Button>
	</div>
</template>

<script lang="ts">

import Button from '@/components/Button.vue';
import Post from '@/components/Post.vue';
import Header from '@/components/Header.vue';

interface PostInterface {
	id: number;
	title: string;
	excerpt: string;
	county: string;
	city: string;
	photo: string;
}

export default {
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
			posts: [] as PostInterface[],
			imagesPath: "http://10.10.129.20:8000",

			logged: false,
		};
	},
	methods: {
		async loadPosts() {
			fetch(
				"http://10.10.129.20:8000/api/posts/"
			).then(
				response => response.json()
			).then(
				result => this.posts = result
			).catch(
				error => console.error("Error:", error)
			)
		},
		redirectToCreatePost() {
			this.$router.push({
				name: "create-post"
			})
		}
	},
	computed: {
		headerContent() {
			if (this.logged) {
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

</style>
