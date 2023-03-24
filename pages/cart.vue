<template>
    <Navbar/>
    <div>
        <h1>cart</h1>
    </div>
    <div class="menuContainer">
        <MenuMobile/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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