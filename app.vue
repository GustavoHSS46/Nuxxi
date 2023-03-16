<template>
    <div class="container">
        <NuxtPage />
        <Footer />
    </div>

</template>

<script setup lang="ts">
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#__nuxt {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    overflow-x: hidden;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
}

.blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

.icon:hover {
    cursor: pointer;
    opacity: .5;
    transition: all 380ms cubic-bezier(1, 0.5, 0.8, 1);
}




/* Ultrawide Monitors */
@media screen and (min-width: 1921px) and (max-width: 2560px) {
    .container {
        width: 1920px;
        overflow-x: hidden;

    }

    h1 {
        font-family: "Bebas Neue", cursive !important;
        font-size: 4rem;
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 2.5rem;
    }

    h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 2rem;
    }

    h4 {
        font-family: "Roboto", sans-serif;
        font-weight: 200;
        font-size: 1.5rem;
    }

    h5 {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-size: 1rem;
    }
}

/* FullHD Monitors */
@media screen and (min-width: 1441px) and (max-width: 1920px) {
    .container {
        width: 1440px;
    }

    h1 {
        font-family: "Bebas Neue", cursive !important;
        font-size: 4rem;
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 2.5rem;
    }

    h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 2rem;
    }

    h4 {
        font-family: "Roboto", sans-serif;
        font-weight: 200;
        font-size: 1.5rem;
    }

    h5 {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-size: 1rem;
    }
}

/* HD Monitors */
@media screen and (min-width: 1024px) and (max-width: 1440px) {

    #__nuxt {
        height: 320vh;
    }

    .container {
        width: 1024px;
    }

    h1 {
        font-family: "Bebas Neue", cursive !important;
        font-size: 4rem;
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 2.5rem;
    }

    h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 2rem;
    }

    h4 {
        font-family: "Roboto", sans-serif;
        font-weight: 200;
        font-size: 1.5rem;
    }

    h5 {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-size: 1rem;
    }
}

/* Tablets Monitors */
@media screen and (min-width: 768px) and (max-width: 1023px) {
    .container {
        width: 100%;
    }

    h1 {
        font-family: "Bebas Neue", cursive !important;
        font-size: 2.5rem;
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 2rem;
    }

    h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 1.5rem;
    }

    h4 {
        font-family: "Roboto", sans-serif;
        font-weight: 200;
        font-size: 1rem;
    }

    h5 {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-size: 0.5rem;
    }
}

/* Phones Monitors */
@media screen and (max-width: 767px) {
    .container {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }

    h1 {
        font-family: "Bebas Neue", cursive !important;
        font-size: 2rem;
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
    }

    h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 1rem;
    }

    h4 {
        font-family: "Roboto", sans-serif;
        font-weight: 200;
        font-size: 0.75rem;
    }

    h5 {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-size: 0.5rem;
    }

}
</style>