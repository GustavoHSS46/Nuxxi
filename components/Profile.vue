<template>
    <div>
        <div v-if="Show" class="user">
            <h3>{{ Username }}</h3>
            <Icon @click="Account()" name="material-symbols:account-circle-outline" size="3rem" />
        </div>
        <button v-else @click="Login()">
            <h3>login</h3>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useConexion } from '../stores/isConnect'
const Conected = useConexion()  

let Username = useStorage('macaco', '')
Conected.connect()


let Show =  useStorage('conexion', false)

function Account() {
    navigateTo('/account')
}

function Login() {
    navigateTo('/login')
}
</script>

<style scoped>
.user {
    display: flex;
    align-items: center;
    gap: 15px;
    height: 100%;
}

.user>* {
    cursor: pointer;
}
</style>