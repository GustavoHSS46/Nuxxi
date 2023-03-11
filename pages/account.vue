<template>
    <Navbar />
    <div class="content">
        <div v-if="Show" class="main">
            <div class="profile">
                <h2>{{ Username }}</h2>
                <img :src="photoURL" alt="">
            </div>
        </div>
        <h1 v-else>Are you connected?</h1>
    </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useConexion } from '../stores/isConnect'


const Conected = useConexion()
Conected.connect()
let photoURL = useStorage('profilePic', '')
let Username = useStorage('name', '')
let Show = useStorage('isConnected', false)


</script>

<style scoped>
.content {
    border: 2px solid black;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
}
</style>