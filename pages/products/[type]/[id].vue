<template>
    <Navbar />
    <div class="container">
        <div class="img">
            <img :src="product.poster" alt="">
        </div>
        <div class="desc">
            <h1>{{ product.title }}</h1>
            <div class="more">
                <div>
                    <h3 v-if="product.pages">
                        <Icon name="material-symbols:book-outline-rounded" /> {{ product.pages }}
                    </h3>
                    <h3 v-if="product.origin">
                        <Icon name="ph:globe-stand-bold" /> {{ product.origin }}
                    </h3>
                </div>
                <div>
                    <h3 v-if="product.language">
                        <Icon name="ph:globe-stand-bold" /> {{ product.language }}
                    </h3>
                    <h3 v-if="product.gender">
                        <Icon name="ph:gender-female" /> {{ product.gender }}
                    </h3>
                </div>
                <div>
                    <h3 v-if="product.editor">
                        <Icon name="maki:city-11" /> {{ product.editor }}
                    </h3>
                    <h3 v-if="product.material">
                        <Icon name="material-symbols:recycling" /> {{ product.material }}
                    </h3>
                </div>
                <div>
                    <h3 v-if="product.author">
                        <Icon name="ic:baseline-person-2" /> {{ product.author }}
                    </h3>
                    <h3 v-if="product.brand">
                        <Icon name="material-symbols:factory" /> {{ product.brand }}
                    </h3>
                </div>
            </div>
            <div class="star">
                <div v-for="star in product.stars" :class="{ super: starColor }">
                    <Icon name="material-symbols:star" />
                </div>
            </div>
        </div>
        <div class="price">
            <h1 class="red">R${{ product.price }}</h1>
            <button class="buy">
                <h1>Buy Now</h1>
            </button>
            <button class="cart">
                <h1>Add To Cart</h1>
            </button>
        </div>
    </div>
    <div class="menuContainer">
        <MenuMobile Homecolor="black" Cartcolor="black" />
    </div>
</template>

<script>
import { getFirestore, getDoc, doc } from "firebase/firestore";
export default {
    data() {
        return {
            product: [],
            isLoading: true,
            stars: 0,
            starColor: false,
        };
    },
    created() {
        const db = getFirestore()
        const docRef = doc(db, this.$route.params.type, this.$route.params.id);
        getDoc(docRef)
            .then((doc) => {
                this.product = doc.data();
                this.stars = doc.data().stars
                console.log(this.stars)
                if (this.stars > 4) {
                    this.starColor = true
                }
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

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
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
    height: 8vh;
    background-color: none;

    overflow: hidden;

    position: relative;
}

.img {
    height: 40%;
    width: 100%;
}

img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.desc {
    width: 100%;
    text-align: center;
}

.more {
    width: 100%;
    height: 20%;

    position: relative;

    flex-direction: row;
    display: flex;
    justify-content: space-between;
}


.more::after {
    content: '';
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    border-top: 3px solid #6944af;
    border-radius: 6px;
}

.star {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 10px;
}

.red {
    color: #A30B37;
    font-size: 48px;
}

.price {
    height: 30%;
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    gap: 10px;
}

.price button {
    width: 100%;
    border: none;

    height: 90%;

    border-radius: 6px;
}

.buy {
    background-color: #44af69;
}

.super {
    color: #44af69;
}

.cart {
    background-color: #eeb243;
}

@media screen and (max-width: 767px) {
    .menuContainer {
        position: fixed;
        bottom: 0;
        left: 0;
        display: block;
    }

    .star svg {
        font-size: 24px;
    }

    .more h3 {
        font-size: 14px;
    }


    button h1 {
        font-size: 24px;
    }


}
</style>