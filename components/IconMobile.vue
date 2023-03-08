<template>
    <div>
        <Icon name="heroicons-solid:menu-alt-3" size="3rem" @click="Menu.toggleMenu" />
        <Transition name="slide-fade" appear>
        <div v-if="Menu.isOpen" class="menu">
                <MenuMobile />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { useMenu } from '../stores/isOpen'

const Menu = useMenu()

</script>

<style>
.menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
}


.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all .7s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(200px);
    opacity: 0;
}
</style>