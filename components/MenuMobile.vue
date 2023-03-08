<template>
    <div class="bg"></div>
    <div class="containerMenu">
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
        <div class="column">
            <Icon name="material-symbols:account-circle-sharp" size="2.5rem" />
            <h2>My Account</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMenu } from '../stores/isOpen'

const Menu = useMenu()

</script>

<style  scoped>
.bg {
    width: 100%;
    height: 100%;
    
    position: absolute;
    z-index: 1;

    background-image: radial-gradient(
        rgba(255, 255, 255, 1) 9%,
        transparent 9%,
    ); 

    background-position: 0% 0%;
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