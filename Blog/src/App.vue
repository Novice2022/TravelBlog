<template>
	<Header />
	<RouterView/>	
</template>

<script lang="ts">

import Header from './components/Header.vue';

export default {
	components: {
		Header
	}
}

</script>
