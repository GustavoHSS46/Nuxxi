<template>
    <div class="iconsDesktop">
        <Profile />
        <Icon name="material-symbols:search-sharp" size="3rem" />
        <Icon name="ph:shopping-bag" size="3rem" />
    </div>
    <div class="iconsMobile">
        <IconMobile />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.iconsDesktop {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.iconsMobile {
    display: none;
}

.loading {
    color: rgb(68, 175, 105) !important;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .iconsDesktop {
        width: 50%;
    }
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