<template>
    <div class="containerProduct">
        <div class="item" v-for="product in Products">
            <div class="img">
                <img :src="product.poster" alt="">
            </div>
            <h1>{{ product.title }}</h1>
            <h1 class="red">R$ {{ product.price }}</h1>
            <div class="star">
                <div v-for="star in product.stars">
                    <Icon name="material-symbols:star" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
export default {
    props: {
        type: String,
    },
    data() {
        return {
            Products: [],
        };
    },
    methods: {
        async gettinBooks() {
            const db = getFirestore()
            const colRef = collection(db, this.type);
            getDocs(colRef)
                .then((snapshot) => {
                    let Products = [];
                    snapshot.docs.forEach((doc) => {
                        Products.push({ ...doc.data(), stars: doc.data().stars })
                    })
                    this.Products = Products;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    created() {
        this.gettinBooks();
    },
};
</script>


<style scoped>
.containerProduct {
    height: 100%;
    width: 100%;

    overflow: auto;
    white-space: nowrap;
    overflow-y: hidden;

    display: flex;
    align-items: center;

    gap: 95px;
}

.item {
    height: 80%;
    min-width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-bottom: 15px;
}

.red {
    color: red;
}

.img {
    min-height: 60%;
    min-width: 100%;
}

.star {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
}

.star svg {
    font-size: 24px;
}

img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

@media screen and (max-width: 767px) {
    .containerProduct {
        gap: 55px;
    }

    .img {
        min-height: 60%;
        min-width: 100%;
    }

    .item {
        min-height: 100%;
        min-width: 50%;
    }
}
</style>