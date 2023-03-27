<template>
    <div class="content">
        <div class="cardsContainer">
            <div class="card red" @click="navigate('Smartphones')">
                <div class="boxImg">
                    <img src="../assest/smartphones.png" alt="">
                </div>
                <h3>Smartphones</h3>
            </div>
            <div class="card yellow" @click="navigate('Shoes')">
                <div class="boxImg">
                    <img src="../assest/Sneakers.png" alt="">
                </div>
                <h3>Sneakers</h3>
            </div>
        </div>
        <div class="cardsContainer">
            <div class="card green" @click="navigate('Games')">
                <div class="boxImg">
                    <img src="../assest/videoGames.png" alt="">
                </div>
                <h3>Video Games</h3>
            </div>
            <div class="card blue" @click="navigate('Books')">
                <div class="boxImg">
                    <img src="../assest/books.png" alt="">
                </div>
                <h3>Books</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
function navigate(id: any) {
    navigateTo({ path: `/section/category/${id}`})
}
</script>

<style scoped>
img {
    filter: invert(100%);
}

.content {
    width: 100%;
    height: 35%;


    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 15px;
}

.cardsContainer {
    display: flex;
    justify-content: center;

    height: 50%;
    width: 100%;

    gap: 15px;
}

.card {
    border-radius: 16px;
    height: 100%;
    width: 50%;
    background-color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
}

.red {
    background-color: #A30B37;
}

.green {
    background-color: #44AF69;
}

.yellow {
    background-color: #eeb243;
}

.blue {
    background-color: #6944AF;
}

.boxImg {
    height: 60%;
    width: 50%;
}

img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}





@media screen and (min-width: 1921px) and (max-width: 2560px) {
    .content {
        flex-direction: row;
        height: 10%;
    }

    .cardsContainer {
        height: 100%;
    }
}

@media screen and (min-width: 1441px) and (max-width: 1920px) {
    .content {
        flex-direction: row;
        height: 15%;
    }

    .cardsContainer {
        height: 100%;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
    .content {
        flex-direction: row;
        height: 15%;
    }

    .cardsContainer {
        height: 100%;
    }
}
</style>