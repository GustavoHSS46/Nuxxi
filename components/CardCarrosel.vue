<template>
    <div class="content">
        <div class="card">
            <div class="desc"></div>
            <div class="img"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.content {
    height: 40%;
    width: 100%;
    background-color: none;

    position: relative;

}

.card {
    height: 90%;
    width: 100%;
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: #2B2D42;

    border-radius: 25px;
    display: flex;

}

.card > * {
    width: 50%;
    height: 100%;
}
</style>