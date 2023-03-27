<template>
    <div class="containerProduct">
        <div @click="navigate(product.id)" class="item" v-for="product in Products" :key="product.id">
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
                        Products.push({ ...doc.data(), id: doc.id, stars: doc.data().stars })
                    })
                    this.Products = Products;
                    console.log("section  "+this.type)
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        navigate(id) {
            this.$nuxt.$router.push({ path: `/products/${this.type}/${id}`, })
        }

    },
    created() {
        this.gettinBooks();
    },
};
</script>


<style scoped>
::-webkit-scrollbar {
    width: 1px;
}

::-webkit-scrollbar-track {
    background: #00000000;
}

::-webkit-scrollbar-thumb {
    background: #00000000;
}


.containerProduct {
    height: 100%;
    width: 100%;

    overflow: auto;
    white-space: nowrap;
    overflow-x: hidden;

    display: flex;
    align-items: center;

    flex-direction: column;
}

.item {
    height: 100%;
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-bottom: 15px;
}

.red {
    color: #A30B37;
}

.img {
    height: 60%;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
}

img {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    object-fit: contain;
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