<template>
	<div class="about-me-block">
		<h1>
			<span>{{ authStore.fullName }}</span>
			<RouterLink to="/profile/edit/">
				<img src="../../assets/images/edit-profile.png" alt="Edit profile icon">
			</RouterLink>
		</h1>
		
		<div class="about-blocks">
			<div class="content-block">
				<label for="city">Город:</label>
				<p class="city" name="city">{{ authStore.city }}</p>
			</div>
			<div class="content-block">
				<label for="bio">О себе:</label>
				<p class="bio" name="bio">{{ authStore.bio }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import { useAuthStore } from '@/stores/authorization';

export default {
	setup() {
		const authStore = useAuthStore();
		return { 
			authStore
		};
	},
};

</script>

<style scoped>

@import url("../../assets/css/profile_router_view.css");

h1 {
	display: flex;
	justify-content: space-between;
	align-content: center;
	margin-bottom: 5px;
}

h1 span {
	font-size: 36px;
	font-weight: 700;
	align-self: center;
}

h1 a {
	align-content: center;
}

h1 img {
	height: 32px;
	width: 32px;
}

.about-blocks {
	display: flex;
	flex-direction: column;
	row-gap: 30px;
}

label {
	font-size: 14px;
}

.city {
	font-size: 18px;
}

.bio {
    font-size: 16px;
}

</style>
