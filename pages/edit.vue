<template>
    <Navbar />
    <div class="container">
        <h1>edit your account</h1>









        <div class="button">
            <button @click="Save()">
                <h1>Save</h1>
            </button>
        </div>
    </div>
</template>

<script setup>
import { getAuth, updateProfile } from "firebase/auth";

let photo = "https://i.dailymail.co.uk/i/pix/scaled/2012/12/10/article-2245683-166F99E3000005DC-243_308x185.jpg"
let Username = "EL CABRON"

function Save() {

    updateProfile(getAuth().currentUser, {
        displayName: Username, photoURL: photo
    }).then(() => {
        navigateTo({path: '/account', force: true})
    }).catch((error) => {
        console.log(error)
    });

}
</script>

<style scoped>
.container {
    border: 2px solid red;
    width: 100%;
    height: 90vh;

    position: relative;
}

.button {
    position: absolute;
    bottom: 0;

    height: 8vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    border: 0;
    border-radius: 8px;

    background-color: #44AF69;
    width: 75%;
    height: 100%;
}
</style>