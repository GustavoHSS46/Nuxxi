<template>
    <div>
        <div v-if="Show" @click="Account()" class="user">
            <h3>{{ Username }}</h3>
            <div class="icon">
                <img :src="photo" alt="">
            </div>
        </div>
        <button v-else @click="Login()">
            <h2>login</h2>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useConexion } from '../stores/isConnect'
const Conected = useConexion()  
Conected.connect()

let Username = useStorage('name', '').value
let photo = useStorage('profilePic', '').value

let Show = useStorage('isConnected', false).value

function Account() {
    navigateTo('/account')
}

function Login() {
    navigateTo('/login')
}
</script>

<style scoped>

.icon {
    height: 60px;
    width: 60px;

    border-radius: 50%;

    overflow: hidden;
}

.icon img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.user {
    display: flex;
    align-items: center;
    gap: 15px;
    height: 100%;
    cursor: pointer;
}

button {
    color: white;
    background-color: #007EA7;
    border: none;
    outline: none;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 6px;
    padding-bottom: 6px;

    border-radius: 6px;
}
</style>