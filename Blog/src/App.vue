<template>
	<Header :logged="logged"/>
	<RouterView v-slot="">

	</RouterView>	
</template>

<script lang="ts">

import Header from './components/Header.vue';

export default {
	components: {
		Header
	},
	data() {
		return {
			logged: false,
		}
	},
}

</script>
