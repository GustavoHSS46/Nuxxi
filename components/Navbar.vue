<template>
    <div class="nav">
        <div class="logo">
            <h1>Nuxxi</h1>
        </div>
        <NavButton/>
    </div>
</template>

<script setup>
</script>
<style scoped>
.nav {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo {
    letter-spacing: 1.5px;
    color: #44AF69;
}

@media screen and (min-width: 220px) and (max-width: 767px)  {
    .nav {
        height: 10%;
    }
}
</style>