<template>
    <div class="iconsDesktop">
        <Icon name="ph:shopping-bag-light" size="4rem" />
    </div>
    <div class="iconsMobile">
        <IconMobile/>
    </div>
</template>

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