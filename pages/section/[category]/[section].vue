<template>
    <Navbar />
    <div class="containerSection">
        <h1>{{ route }}</h1>
        <ProductsSection :type="route" />
    </div>
    <Footer />

    <div class="menuContainer">
        <MenuMobile />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute().params.section;
</script>

<style scoped>
::-webkit-scrollbar {
    width: 1px;
}

::-webkit-scrollbar-track {
    background: #00000000;
}

::-webkit-scrollbar-thumb {
    background: #00000000;
}

.containerSection {
    text-align: center;
}

.menuContainer {
    display: none;
    width: 100vw;
    height: 8vh;
    background-color: none;

    overflow: hidden;

    position: relative;
}

@media screen and (max-width: 767px) {
    .menuContainer {
        position: fixed;
        bottom: 0;
        left: 0;
        display: block;
    }

    .contentMain {
        height: 210vh;
    }

}
</style>