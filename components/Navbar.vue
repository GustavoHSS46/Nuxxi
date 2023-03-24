<template>
    <div class="nav">
        <div @click="Home()" class="logo">
            <h1>Nuxxi</h1>
        </div>
        <NavButton />
    </div>
</template>

<script setup>

function Home() {
    navigateTo('/')
}

</script>

<style scoped>
.nav {
    width: 100%;
    height: 85px;

    box-shadow: 0px 0px 0px #000000;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    letter-spacing: 1.5px;
    color: #44af69;
    user-select: none;
    cursor: pointer;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .nav {
        padding-left: 45px;
        padding-right: 45px;
    }
}

@media screen and (max-width: 767px) {
    .nav {
        height: 3%;
    }

    .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>