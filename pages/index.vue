<template>
    <Navbar />
    <div class="contentMain">
        <CardCarrosel />
        <Cards />
    </div>
</template>

<script setup>
</script>

<style scoped>
.contentMain {
    height: 100%;
    width: 100%;


    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .contentMain {
        padding-left: 45px;
        padding-right: 45px;
    }
}
</style>