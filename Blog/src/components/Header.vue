<template>
	<div 
		class="page-container header"
		:class="headerClasses"
	>
		<header>
			<div class="top">
				<div class="logo">
					<RouterLink
						to="/"
					>
						<svg width="183" height="41" viewBox="0 0 183 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M65.8386 33V12.2301H57.7068V9.28235H77.3247V12.2301H69.1929V33H65.8386ZM85.0234 33V15.0424H88.1406V19.9214L87.8356 18.7016C88.3326 17.4593 89.1683 16.5106 90.3429 15.8555C91.5175 15.2005 92.9632 14.8729 94.6799 14.8729V18.024C94.5443 18.0014 94.4088 17.9901 94.2733 17.9901C94.1603 17.9901 94.0474 17.9901 93.9345 17.9901C92.1952 17.9901 90.8173 18.5096 89.8008 19.5487C88.7843 20.5878 88.2761 22.0899 88.2761 24.0551V33H85.0234ZM113.426 33V29.2052L113.256 28.4936V22.0221C113.256 20.6442 112.85 19.5826 112.036 18.8372C111.246 18.0692 110.049 17.6852 108.445 17.6852C107.383 17.6852 106.344 17.8659 105.328 18.2273C104.311 18.5661 103.453 19.0292 102.753 19.6165L101.397 17.1769C102.323 16.4315 103.43 15.8668 104.718 15.4828C106.028 15.0762 107.394 14.8729 108.818 14.8729C111.28 14.8729 113.177 15.4715 114.51 16.6687C115.842 17.8659 116.509 19.6955 116.509 22.1576V33H113.426ZM107.53 33.2033C106.197 33.2033 105.023 32.9774 104.006 32.5256C103.012 32.0739 102.244 31.4527 101.702 30.6621C101.16 29.8489 100.889 28.9341 100.889 27.9176C100.889 26.9464 101.115 26.0654 101.567 25.2748C102.041 24.4842 102.798 23.8518 103.837 23.3774C104.898 22.9031 106.322 22.6659 108.106 22.6659H113.798V25.0038H108.242C106.615 25.0038 105.52 25.2748 104.955 25.8169C104.39 26.3591 104.108 27.0141 104.108 27.7821C104.108 28.6631 104.458 29.3746 105.158 29.9167C105.858 30.4362 106.83 30.696 108.072 30.696C109.292 30.696 110.354 30.4249 111.257 29.8828C112.183 29.3407 112.85 28.5501 113.256 27.5111L113.9 29.7473C113.471 30.8089 112.714 31.656 111.63 32.2885C110.546 32.8984 109.179 33.2033 107.53 33.2033ZM131.82 33L123.959 15.0424H127.347L134.327 31.3059H132.701L139.816 15.0424H143.001L135.14 33H131.82ZM158.45 33.2033C156.53 33.2033 154.836 32.808 153.367 32.0174C151.922 31.2268 150.792 30.1426 149.979 28.7647C149.188 27.3868 148.793 25.8056 148.793 24.0212C148.793 22.2367 149.177 20.6555 149.945 19.2776C150.736 17.8998 151.809 16.8268 153.164 16.0588C154.542 15.2682 156.089 14.8729 157.806 14.8729C159.545 14.8729 161.081 15.2569 162.414 16.0249C163.747 16.7929 164.786 17.8772 165.531 19.2776C166.299 20.6555 166.683 22.2706 166.683 24.1228C166.683 24.2584 166.672 24.4165 166.649 24.5972C166.649 24.7779 166.638 24.9473 166.615 25.1054H151.334V22.7675H164.921L163.6 23.5807C163.622 22.4287 163.385 21.4009 162.888 20.4974C162.391 19.5939 161.702 18.8936 160.821 18.3967C159.963 17.8772 158.958 17.6174 157.806 17.6174C156.676 17.6174 155.671 17.8772 154.79 18.3967C153.909 18.8936 153.22 19.6052 152.724 20.5313C152.227 21.4348 151.978 22.4739 151.978 23.6485V24.1906C151.978 25.3878 152.249 26.4607 152.791 27.4094C153.356 28.3355 154.135 29.0584 155.129 29.5779C156.123 30.0974 157.264 30.3572 158.551 30.3572C159.613 30.3572 160.573 30.1765 161.431 29.8151C162.312 29.4536 163.08 28.9115 163.735 28.1887L165.531 30.2894C164.718 31.2381 163.701 31.9609 162.482 32.4579C161.284 32.9548 159.94 33.2033 158.45 33.2033ZM176.113 33V7.85929H179.365V33H176.113Z" fill="white"/>
							<path d="M41.5 28.5H1" stroke="white" stroke-linecap="round"/>
							<path d="M31.5 32.5H1.5" stroke="white" stroke-linecap="round"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M29.6633 4.26893L29 3C28.8616 3.46734 28.7241 3.92333 28.5871 4.36877C27.1769 8.95537 25.8239 12.4223 24.0856 15.622L19.7769 8.15908L19.1077 7C18.9657 7.43397 18.8248 7.85599 18.6845 8.26699C16.3394 15.1356 14.1519 18.9269 9.62277 24C9.3303 24.3276 9.02806 24.6605 8.71539 25H10.0689H17.5H18.7981H28.3453H29.5H39.3716H40.5L39.9773 24L29.6633 4.26893ZM27.7679 24H19.6083C21.3866 21.7736 22.8389 19.7314 24.0913 17.6319L27.7679 24ZM24.6695 16.6333L28.9226 24H38.8489L29.2431 5.62361C27.8404 10.0507 26.4574 13.4492 24.6695 16.6333ZM23.5166 16.6364C22.1099 19.0657 20.4466 21.3902 18.3239 24H10.9563C12.9517 21.7097 14.499 19.6257 15.8185 17.3417C17.1606 15.0187 18.2524 12.5139 19.3457 9.41227L23.5166 16.6364Z" fill="white"/>
						</svg>
					</RouterLink>
				</div>
				<div
					v-if="authStore.isAuthenticated"
					class="user"
				>
					<img :src=" authStore.hasImage ? fetchedProfileImage : '/src/assets/images/nophoto.jpg'" alt="Your icon">
					<button
						type="button"
						@mouseover="isHoveredOnUser = true"
						@mouseout="isHoveredOnUser = false"
					>
						{{ authStore.fullName }}
						<i class='bx bxs-down-arrow' v-if="!isHoveredOnUser"></i>
						<i class='bx bxs-up-arrow' v-if="isHoveredOnUser"></i>
					</button>
					<div
						v-if="authStore.isAuthenticated"
						id="dropdown-menu"
						:class="isHoveredOnUser ? 'active' : 'inactive'"
						@mouseover="isHoveredOnUser = true"
						@mouseout="isHoveredOnUser = false"
					>
						<RouterLink
							class="dropdown-menu-content"
							to="/profile/"
						>
							Профиль
						</RouterLink>
						<button
							class="dropdown-menu-content"
							type="button"
							@click="
								(() => {
									authStore.logout();
									isHoveredOnUser = false;
									replaceToAuth();
								})()
							"
						>
							Выйти
						</button>
					</div>
				</div>
				<RouterLink
					v-else
					to="/authorization/"
					@click="loginClick"
				>
					Войти
				</RouterLink>
			</div>
			<h1 :class="h1Classes">{{ headerContent }}</h1>
		</header>
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
	props: {
		fullName: {
			type: String,
			required: false
		},
		userIcon: {
			type: String,
			required: false,
		},
		id: {
			type: Number,
			required: false,
		},
	},
	data() {
		return {
			isHoveredOnUser: false,
		}
	},
	methods: {
		loginClick(): void {
			this.$router.push({
				name: "auth"
			});
		},
		replaceToAuth() {
			this.$router.replace({ path: "/authorization/" });
		}
	},
	computed: {
		fetchedProfileImage(): string {
			return getServersImageSource(this.authStore.photo);
		},
		headerClasses() {
			return {
				'header__home': this.$router.currentRoute.value.path === "/"
			}
		},
		h1Classes() {
			return {
				"h1__home": this.$router.currentRoute.value.path === "/"
			}
		},
		headerContent(): string {
			if (this.$router.currentRoute.value.path === "/") {
				return "ТАМ ГДЕ МИР НАЧИНАЕТСЯ С ПУТЕШЕСТВИЙ";
			}

			return "ИСТОРИИ ВАШИХ ПУТЕШЕСТВИЙ";
		}
	}
}

</script>

<style scoped>

header {
	width: 1172px;
}

.top {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
	height: 100px;
	border-bottom: 1px solid white;
	margin-bottom: -100px;
}

.logo {
	align-content: center;
}

h1 {
	position: relative;
	font-weight: 700;
	font-size: 48px;
	color: white;
	text-align: center;
	top: 139px;
}

.h1__home {
	top: 208px;
}

a, button {
	color: white;
	align-content: center;
	font-weight: 400;
	font-size: 16px;
}

.user {
	display: flex;
	flex-direction: row;
	color: white;
	align-content: center;
	padding: 15px;
	column-gap: 8px;
	height: 30px;
	align-self: center;
}

.user img {
	height: 30px;
	width: 30px;
	border-radius: 15px;
	align-self: center;
}

i {
	color: white;
	font-size: 11px;
}

#dropdown-menu {
	row-gap: 4px;
	background-color: white;
	align-self: flex-end;
	height: 48px;
	width: 54px;
	padding: 8px;
	border-radius: 2px;
	margin-bottom: -64px;
	margin-left: -78px;
	z-index: 1;
}

.dropdown-menu-content {
	color: #262626;
	height: 22px;
	font-size: 12px;
	text-align: left !important;
}

.active {
	display: flex;
	flex-direction: column;
}

.inactive {
	display: none;
}

.header {
	background: url("../assets/images/header-small.jpg");
	height: 251px;
	margin-bottom: 30px;
}

.header__home {
	background: url("../assets/images/header-large.jpg");
	height: 422px;
	margin-bottom: 60px;
}

</style>
