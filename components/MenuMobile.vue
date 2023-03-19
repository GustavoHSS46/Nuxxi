<template>
    <div class="container">
        <div class="menuContent">
            <div class="profile">
                <Profile />
            </div>
            <NuxtLink to="/">
                <div class="home" :style="{'color': Homecolor}">
                    <Icon name="material-symbols:home-outline-sharp" size="3rem" />
                </div>
            </NuxtLink>
            <NuxtLink to="/cart" :style="{'color': Cartcolor}">
                <div class="shopping">
                    <Icon name="ph:shopping-bag" size="3rem" />
                </div>
            </NuxtLink>
            <NuxtLink to="/search">
                <div class="search" :style="{'color': color}">
                    <Icon name="material-symbols:search-sharp" size="3rem" />
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        Homecolor: String,
        Cartcolor: String,
    }
}
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

    border: 2px solid red;
}

.menuContent {
    width: 100%;
    height: 10vh;
    margin: 0px 8px 8px 8px;
    background-color: #b3b3b3;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;

    border-radius: 18px;
}

.menuContent> * {
    height: 100%;
    width: 20%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>