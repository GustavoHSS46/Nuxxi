<template>
    <div class="mainLogout" @click="LogOut()">
        <h1>logOut</h1>
        <Icon name="material-symbols:logout" />
    </div>
</template>

<script setup>
import { useConexion } from '../stores/isConnect.client'

const Conected = useConexion()
function LogOut() {
    Conected.logOut()
    navigateTo('/')
}
</script>

<style scoped>
.mainLogout {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    height: 100%;
    width: 100%;

    color: #A30B37;
}

.mainLogout svg {
    font-size: 40px;
    color: #A30B37;
}
</style>