<template>
    <Navbar />
    <div class="contentMain">
        <CardCarrosel class="carrosel" />
        <Cards />
        <Products title="Books" />
        <Products title="videoGames" />
        <Products title="Smartphones" />
        <Products title="Shoes" />
    </div>
    <div class="menuContainer">
        <MenuMobile/>
    </div>
</template>

<script setup>
</script>

<style scoped>
.contentMain {
    height: 100%;
    width: 100%;


    overflow: hidden;

    gap: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.menuContainer {
    display: none;
    width: 100vw;
    height: 8vh;
    background-color: none;
    padding: 0;
    margin: 0;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .contentMain {
        padding-left: 45px;
        padding-right: 45px;
        height: 100vh;
    }
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