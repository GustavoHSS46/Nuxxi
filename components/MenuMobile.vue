<template>
    <div class="bg">
        <video autoplay muted loop id="myVideo">
            <source src="../assest/Dots.webm" type="video/webm">
        </video>
    </div>
    <div class="containerMenu">
        <div class="content">

            <div class="column close">
                <Icon name="ion:close-sharp" size="4rem" @click="Menu.toggleMenu" />
            </div>
            <div class="column">
                <Icon name="ion:cart" size="2.5rem" />
                <h2>Cart</h2>
            </div>
            <div class="column">
                <Icon name="ion:search" size="2.5rem" />
                <h2>Search</h2>
            </div>
            <div v-if="isConected" @click="Account()" class="column">
                <Icon name="material-symbols:account-circle-sharp" size="2.5rem" />
                <h2>{{ Username }}</h2>
            </div>
            <div v-else class="column">
                <Icon name="material-symbols:account-circle-sharp" size="2.5rem" />
                <h2>Not Conected</h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAuth } from "firebase/auth";
import { useMenu } from '../stores/isOpen'

const Menu = useMenu()
let Username = ""
let isConected = false;

const auth = getAuth();
const user = auth.currentUser;
if (user) {
    Username = user.displayName!;
    isConected = true;
} else {
    Username = "not signed in"
}

function Account() {
    if (user) {
        return navigateTo('/account')
    } else {
        alert("Not signed in")
    }
}
</script>

<style  scoped>
.bg {
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: 0;
    background-color: black;
}

.bg video {
    width: 100%;
    height: 100%;
    opacity: .35;
    object-fit: cover;
}

.content {
    width: 100%;
    height: 100%;
    z-index: 1;
}

.containerMenu {
    width: 100vw;
    height: 100vh;
    background-color: none;
    display: flex;
    flex-direction: column;

    padding: 20px;

    position: absolute;
    top: 0;
    left: 0;

    z-index: 2;
}

.column {
    width: 100%;
    height: 20%;
    display: flex;
    gap: 50px;
    align-items: center;
}

.close {
    justify-content: flex-end;
    align-items: center;
    height: 10%;
}

.icon {
    color: white;
}

h2 {
    color: white !important;
    letter-spacing: 1px;
}
</style>