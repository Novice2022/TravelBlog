<template>
    <div class="comment">
        <p class="info">
            <span class="owner">{{ ownerFirstname }}</span><br>
            <span class="date">{{ formattedDate }}</span><br>
        </p>
        <p class="content">{{ content }}</p>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        ownerFirstname: String,
        dateTimestamp: String,
        content: String,
    },
    computed: {
        formattedDate(): string {
            let date = this.dateTimestamp ?? "";
            return date.slice(0, date.indexOf('T')).split('-').reverse().join('.');
        }
    }
};

</script>

<style>

/* row-gap: 30px; */

.comment {
    width: 100%;
}

.info {
    margin-bottom: 5px;
}

.owner {
    font-weight: 600;
}

.date {
    color: #868383;
}

</style>
