<template>
    <div class="card container">
        <img :src="photoPath" alt="Photo">
        <div class="content">
            <div class="top">
                <h2>{{ title }}</h2>
                <p class="excerpt">{{ excerpt }}</p>
            </div>
            <div class="bottom">
                <h3 class="place">{{ county }}, {{ city }}</h3>
                <RouterLink :to="`/posts/${id}/`">Подробнее</RouterLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        id: Number,
        title: String,
        excerpt: String,
        county: String,
        city: String,
        photoPath: String
    }
}

</script>

<style scoped>

.card {
    background-color: white;
    height: 552px;
    width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

img {
    width: 100%;
    height: 288px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.content {
    height: 213px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.top {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    max-height: calc(213px - 56px - 20px);

    h2 {
        font-size: 18px;
        font-weight: 600;
    }

    .excerpt {
        color: var(--grey-color);
    }
}

.bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 56px;

    h3 {
        font-weight: 600;
        font-size: 14px;
    }

    a {
        color: var(--orange-color);
    }
}

</style>
