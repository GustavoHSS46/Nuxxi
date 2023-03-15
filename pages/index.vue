<template>
    <Navbar />
    <div class="contentMain">
        <CardCarrosel />
        <Cards />
        <Products title="Books"/>
        <Products title="videoGames"/>
        <Products title="Smartphones"/>
        <Products title="Shoes"/>
    </div>
</template>

<script setup>
</script>

<style scoped>
.contentMain {
    height: 100%;
    width: 100%;

    gap: 25px;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .contentMain {
        padding-left: 45px;
        padding-right: 45px;
    }
}
</style>