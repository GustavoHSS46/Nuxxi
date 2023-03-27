<template>
    <div class="container">
        <h2>{{title}}</h2>
        <Product :type="title" class="row"/>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
})

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 60vh;
    width: 100%;

    padding: 0;
    overflow: hidden;
}

.row {
    padding-top: 20px;

    height: 100%;
}

</style>