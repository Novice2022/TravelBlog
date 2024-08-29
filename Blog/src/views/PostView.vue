<template>
	<div class="page-container">
		<div class="page-content-container container flex-column">
			<img :src="postPhoto" alt="Post photo">
			<div class="content">
				<div class="about flex-column">
					<div class="description flex-column">
						<h2>{{ post?.title }}</h2>
						<p
							class="post-description-paragraph"
							v-for="paragraph in post?.description.split('\n')"
						>
							{{ paragraph }}
						</p>
					</div>
					<div class="comments flex-column">
						<Comment
							v-for="comment, index in post?.comments"
							:key="index"
							:owner-firstname="comment.ownerFirstname"
							:date-timestamp="comment.dateTimestamp"
							:content="comment.content"
						/>
					</div>
				</div>
				<div class="buttons">
					<Button
						button-type="button"
						router-link="/"
					>
						Назад
					</Button>
					<Button
						v-if="authStore.isAuthenticated"
						button-style="primary"
						:router-link="`/create-comment/${ post?.id }/`"
					>
						Ваше впечатление об этом месте
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import Button from '@/components/Button.vue';

import { getServersImageSource } from '@/config/static';
import { useAuthStore } from '@/stores/authorization';

import axios from 'axios';


interface CommentInterface {
	ownerFirstname: string
	dateTimestamp: string
	content: string
}

interface UserInterface {
	full_name: string
	city: string
	bio: string
}

interface PostFullInterface {
	id: number
    title: string
    description: string
    county: string
    city: string
    photo: string
    comments: CommentInterface[]
    userInfo: UserInterface
}


export default {
	props: {
		id: String,
	},
	components: {
		Comment,
		Button,
	},
	setup() {
		const authStore = useAuthStore();
		return {
			authStore,
		}
	},
	async beforeCreate() {
		const response = await axios.get<PostFullInterface>(
            `posts/${this.id}`
        );

		this.post = response.data;
		this.postPhoto = getServersImageSource(this.post.photo);
		console.log(this.postPhoto);
	},
	data() {
		return {
			post: null as PostFullInterface | null,
			postPhoto: "",
		};
	},
}

</script>

<style scoped>

.container {
	padding-top: 0;
}

img {
	border-radius: 10px 10px 0 0;
	width: 100%;
	height: 450px;
	margin-bottom: 30px;
}

.content {
	row-gap: 30px;
	width: 968px;
	align-self: center;
}

.description {
	row-gap: 15px;
}

.description h2 {
	font-size: 36px;
	font-weight: 700;
}

.comments {
	row-gap: 30px;
}

.post-description-paragraph {
	margin-bottom: 20px;
}

.about {
	row-gap: 50px;
}

</style>
