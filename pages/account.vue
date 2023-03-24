<template>
    <Navbar />
    <div class="contentMain">
        <Icon v-if="Conected.isLoading" class="loading" name="svg-spinners:180-ring" />
        <div v-else class="userFetch">
            <div v-if="Show" class="main">
                <div class="profile">
                    <Profile />
                </div>
            </div>
            <h1 v-else>Are you connected?</h1>
        </div>
    </div>
    <div class="menuContainer">
        <MenuMobile/>
    </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useConexion } from '../stores/isConnect.client'

const Conected = useConexion()
Conected.connect()


let photo = useStorage('profilePic', '').value
let Show = useStorage('isConnected', false).value
let Username = useStorage('name', '').value

Conected.Loading()


function logOut() {
    navigateTo('/login')
}

</script>

<style scoped>
.contentMain {
    height: 100vh;
    width: 100%;

    position: relative;

    display: flex;
    flex-direction: column;

    border: 2px solid red;
}
.profile {
    border: 2px solid green;
    width: 100%;
    height: 25%;
}

.user {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 20%;
    cursor: pointer;
}
.name{
    width: 80%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: left;
}
.userIMG {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
}
.user img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.loading {
    color: rgb(68, 175, 105) !important;
    height: 50%;
    width: 50%;
    border: 2px solid red;
}

.menuContainer {
    display: none;
    width: 100vw;
    height: 8vh;
    background-color: none;
    padding: 0;
    margin: 0;
}

@media screen and (max-width: 767px) {
    .menuContainer {
        position: fixed;
        bottom: 0;
        left: 0;
        display: block;
    }
}
</style>