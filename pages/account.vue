<template>
    <Navbar />
    <div class="contentMain">
        <Icon v-if="Conected.isLoading" class="loading" name="svg-spinners:180-ring" />
        <div v-else class="userFetch">
            <div v-if="Show" class="main">
                <div class="profile">
                    <div @click="logOut()" class="user">
                        <div class="userIMG">
                            <img :src="photoURL" alt="">
                        </div>
                        <div class="name">
                            <h2>{{ Username }}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <h1 v-else>Are you connected?</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useConexion } from '../stores/isConnect'

const Conected = useConexion()
Conected.connect()
let photoURL = useStorage('profilePic', 'https://media.ipassio.com/media/blog/benefits-of-solving-rubiks-cube/blog_icon/benefits-of-solving-rubiks-cube.jpg')
let Username = useStorage('name', '')
let Show = useStorage('isConnected', false)


function logOut() {
    navigateTo('/login')
}

</script>

<style scoped>
.contentMain {
    height: 100%;
    width: 100%;;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
}
.profile {
    padding-top: 15px;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
    margin-right: 2%;
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
</style>