<template>
    <div class="iconsDesktop">
        <Icon name="ph:shopping-bag-light" size="4rem" />
    </div>
    <div class="iconsMobile">
        <Icon name="heroicons-solid:menu-alt-3" size="3rem" />
    </div>
</template>

<script setup>

</script>
<style scoped>

.iconsMobile {
    display: none;
}


@media screen and (min-width: 220px) and (max-width: 767px) {
    .iconsDesktop {
        display: none;
    }

    .iconsMobile {
        display: block;
    }
}
</style>