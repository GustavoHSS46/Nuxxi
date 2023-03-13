<template>
    <div class="mainProfile">
        <Icon v-if="Conected.isLoading" class="loading" name="svg-spinners:180-ring" />
        <div v-else class="info">
            <Transition name="nested" :duration="700" v-if="Show" appear>
                <div @click="Account()" class="user">
                    <h3 class="inner">{{ Username }}</h3>
                    <div class="icon outer">
                        <img :src="photo" alt="">
                    </div>
                </div>
            </Transition>

            <Transition name="fade" appear v-else>
                <button @click="Login()">
                    <h2>login</h2>
                </button>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useConexion } from '../stores/isConnect'
const Conected = useConexion()
Conected.connect()
setTimeout(Conected.Loading, 2000)


let Username = useStorage('name', '').value
let photo = useStorage('profilePic', 'https://media.ipassio.com/media/blog/benefits-of-solving-rubiks-cube/blog_icon/benefits-of-solving-rubiks-cube.jpg').value

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

.loading {
    color: rgb(68, 175, 105) !important;
}

.mainProfile {
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.info {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.user {
    display: flex;
    align-items: center;
    gap: 15px;
    height: 100%;
    cursor: pointer;
    width: 100%;
    justify-content: right;
    gap: 25px;
}

button {
    color: white;
    background-color: #007EA7;
    border: none;
    outline: none;
    width: 90%;
    height: 90%;
    border-radius: 6px;
    text-align: center;
    text-transform: uppercase;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(80px);
  opacity: 0;
}

.nested-enter-active .inner {
  transition-delay: 0.35s;
}

.nested-enter-active .outer,
.nested-leave-active .outer {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .outer,
.nested-leave-to .outer {
  transform: translateY(30px);
  opacity: 0;
}

</style>