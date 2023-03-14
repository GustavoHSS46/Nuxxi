<template>
    <div class="content">
        <div class="cardsContainer">
            <div class="card red">
                <div class="boxImg">
                    <img src="../assest/smartphones.png" alt="">
                </div>
                <h3>Smartphones</h3>
            </div>
            <div class="card yellow">
                <div class="boxImg">
                    <img src="../assest/Sneakers.png" alt="">
                </div>
                <h3>Sneakers</h3>
            </div>
        </div>
        <div class="cardsContainer">
            <div class="card green">
                <div class="boxImg">
                    <img src="../assest/videoGames.png" alt="">
                </div>
                <h3>Video Games</h3>
            </div>
            <div class="card blue">
                <div class="boxImg">
                    <img src="../assest/books.png" alt="">
                </div>
                <h3>Books</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

img {
    filter: invert(100%);
}

.content {
    width: 100%;
    height: 30%;

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
        height: 40%;
    }
}

@media screen and (min-width: 1441px) and (max-width: 1920px) {
    .content {
        flex-direction: row;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
    .content {
        flex-direction: row;
        height: 45%;
    }
}
</style>