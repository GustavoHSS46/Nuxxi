<template>
    <Navbar />
    <div class="contentMain">
        <CardCarrosel />
        <h2>{{ userId }}</h2>
    </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";
let userId = useStorage('macaco', '')
</script>

<style scoped>
.contentMain {
    height: 100%;
    width: 100%;;

    padding-top: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>