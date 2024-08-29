<template>
	<div class="page-container">
		<div class="page-content-container">
			<div class="photo-block">
				<div class="image-container">
					<img
						:src="authStore.hasImage ? fetchedProfileImage : '/src/assets/images/nophoto.jpg'"
						alt="Your image"
					>
				</div>
				<button>
					<img src="/src/assets/images/photoapparat.png" alt="photoapparat">
					<span>Изменить фото</span>
				</button>
			</div>
			<RouterView />
		</div>
	</div>
</template>

<script lang="ts">

import { useAuthStore } from '@/stores/authorization';
import {
	getServersImageSource,
} from '@/config/static';


export default {
	setup() {
		return { 
			authStore: useAuthStore()
		};
	},
	computed: {
		/**
		 * @returns { string } Servers source for the users photo.
		 */
		fetchedProfileImage(): string {
			return getServersImageSource(this.authStore.photo);
		}
	}
};

</script>

<style scoped>

.page-content-container {
	padding: 0;
	width: 1110px;
	gap: 30px;
	display: flex;
}

.photo-block {
	padding-top: 6px;
	width: 240px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
}

.image-container {
	width: 240px;
	height: 240px;
}

.image-container img {
	width: 240px;
	height: 240px;
	border-radius: 10px;
}

.photo-block button {
	width: 159px;
	font-size: 16px;
	margin-top: 15px;
	color: var(--orange-color);
	text-decoration: underline;
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 6px;
	justify-self: center
}

.photo-block button img {
	height: 32px;
	width: 32px;
}

</style>
