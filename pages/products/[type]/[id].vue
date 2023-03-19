<template>
    <Navbar />
    <div class="container">
        <Icon v-if="isLoading" class="loading" name="svg-spinners:180-ring" />
        <div v-else>
            <h1>{{ product.title }}</h1>
        </div>
    </div>
    <div class="menuContainer">
        <MenuMobile Homecolor="black" Cartcolor="black"/>
    </div>
</template>

<script>
import { getFirestore, getDoc, doc } from "firebase/firestore";
export default {
    data() {
        return {
            product: [],
            isLoading: true,
        };
    },
    created() {
        const db = getFirestore()
        const docRef = doc(db, this.$route.params.type, this.$route.params.id);
        getDoc(docRef)
            .then((doc) => {
                this.product = doc.data();
                setTimeout(() => {
                    this.isLoading = false;
                }, "1000");

            });
    },
}
</script>

<style scoped>
.container {
    height: 100vh;
    width: 100%;
}

.loading {
    height: 100%;
    width: 100%;
    color: #44af69 !important;

    display: flex;
    justify-content: center;
    align-items: center;
}

.loading:hover {
    cursor: wait;
    opacity: 1;
}

.menuContainer {
    display: none;
    width: 100vw;
    height: 10vh;
    border: 2px solid green;
    background-color: none;
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