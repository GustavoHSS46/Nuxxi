<template>
    <div class="container">
        <div class="menuContent">
            <div class="profile">
                <Profile />
            </div>
            <div class="shopping">
                <Icon name="ph:shopping-bag" size="3rem" />
            </div>
            <div class="search">
                <Icon name="material-symbols:search-sharp" size="3rem" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0px 8px 8px 8px;
}

.menuContent {
    width: 100%;
    height: 100%;
    background-color: #b3b3b3;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;

    border-radius: 18px;
}

.menuContent > * {
    height: 100%;
    width: 20%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>