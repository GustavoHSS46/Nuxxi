<template>
    <div>
        <h1 v-if="user">Home {{ user }}</h1>
        <h1 v-else>Connect Your Account {{ user }}</h1>
    </div>
</template>

<script setup>
import { getAuth } from "firebase/auth"


const auth = getAuth()
const user = auth.currentUser;

</script>

<style scoped>

</style>