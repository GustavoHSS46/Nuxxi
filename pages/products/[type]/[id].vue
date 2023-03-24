<template>
    <Navbar />
    <div class="contentMain">
        <ProductsDetails />
        <Products :title="this.$route.params.type" />
        <Comments />
    </div>
    <div class="menuContainer">
        <MenuMobile />
    </div>
</template>

<script>
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