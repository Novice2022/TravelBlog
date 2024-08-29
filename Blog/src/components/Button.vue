<template>
	<button
		class="button-body"
		:class="buttonStyle + '-button'"
		:type="buttonType"
		@click="onClick"
	>
		<p
			v-if="preventRedirect"
			:class="buttonStyle + '-content'"
		>
			<slot/>
		</p>
		<RouterLink
			v-else
			:to="routerLink"
		>
		    <p :class="buttonStyle + '-content'">
				<slot/>
			</p>
		</RouterLink>
	</button>
</template>

<script lang="ts">

function styleValidator(value: string): boolean {
	return value === "primary" || value === "secondary"
}

export default {
	props: {
		buttonStyle: {
			type: String,
			default: 'secondary',
			validator: styleValidator,
			required: false,
		},
		buttonType: {
			type: String,
			default: "submit",
			required: false,
		},
		onClick: {
            type: Function,
            required: false,
        },
		routerLink: {
			type: String,
			required: false,
		},
		preventRedirect: {
			type: Boolean,
            default: false,
		}
	}
};

</script>

<style scoped>

.button-body {
	border: 2px solid var(--orange-color);
	border-radius: 10px;
	cursor: pointer;
}

.primary-button {
	background-color: var(--orange-color);
}

.secondary-button {
    background-color: rgba(red, green, blue, 0);
}

.primary-content {
	color: white;
	padding: 11px 30px;
}

.secondary-content {
	color: var(--orange-color);
	padding: 11px 30px;
}

.button-slot {
	display: flex;
	align-items: center;
	font-weight: 600;
	color: white;
	text-decoration: none;
}

</style>
