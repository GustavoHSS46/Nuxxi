<template>
    <div class="content">
        
        <div class="card">
            <div class="desc">
                <h2>Discounts In every setor</h2>
                <h1>50% OFF</h1>
            </div>
            <div class="img">
                <Icon name="mdi:lightning-bolt-outline" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
svg {
    color: white;
    height: 125%;
    width: 125%;
}

h2 {
    color: white;
    text-transform: uppercase;
    white-space: nowrap;
}

h1 {
    color: #2B2D42;
    text-transform: uppercase;
    white-space: nowrap;
    background-color: #A30B37;
    padding: 15px;
}
.logo h1 {
    letter-spacing: 1.5px;
    color: rgb(68, 175, 105);
    user-select: none;
    cursor: pointer;
    background-color: #2B2D42;
}

.content {
    height: 40%;
    width: 100%;
    background-color: none;

    position: relative;

}

.card {
    height: 90%;
    width: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: #2B2D42;

    border-radius: 25px;
    display: flex;

}

.card>* {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: relative;
}

.desc {
    width: 70%;
    gap: 25px;
}

.img {
    width: 30%
}

@media screen and (min-width: 1921px) and (max-width: 2560px) {
    .content {
        height: 30%;
    }
}

@media screen and (min-width: 1441px) and (max-width: 1920px) {
    .content {
        height: 35%;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
    .content {
        height: 50%;
    }
}

@media screen and (max-width: 767px) {
    h2 {
        font-size: 1.5rem;
        font-family: "Bebas Neue", cursive !important;
    }
}
</style>