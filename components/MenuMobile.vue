<template>
    <div class="container">
        <div class="menuContent">
            <div class="profile">
            </div>
            <NuxtLink to="/">
                <div class="home">
                    <Icon name="material-symbols:home-outline-sharp" />
                </div>
            </NuxtLink>
            <NuxtLink to="/cart">
                <div class="shopping">
                    <Icon name="ph:shopping-bag" />
                </div>
            </NuxtLink>
            <NuxtLink to="/search">
                <div class="search" >
                    <Icon name="material-symbols:search-sharp" />
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;

}

.menuContent {
    width: 100vw;
    height: 8vh;
    margin: 0;
    padding: 0;
    background-color: #2b2d42;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;
}

.menuContent> * {
    height: 100%;
    width: 20%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

svg {
    color: #f1edee;
    font-size: 32px;
}
</style>