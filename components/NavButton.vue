<template>
    <div class="iconsDesktop">
        <div class="profile">
        </div>
        <div class="icons">
            <Icon name="material-symbols:search-sharp" size="3rem" />
            <Icon name="ph:shopping-bag" size="3rem" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.iconsDesktop {
    height: 100%;
    width: 50%;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: right;
}

.iconsMobile {
    display: none;
}

.profile {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icons {
    height: 100%;
    width: 30%;
    
    display: flex;
    justify-content: space-around;
}

.icons > svg {
    
    height: 95%;
    width: 50%;
}

/* Ultrawide Monitors */
@media screen and (min-width: 1921px) and (max-width: 2560px) {
    .profile {
        width: 30%;
    }
}

/* FullHD Monitors */
@media screen and (min-width: 1441px) and (max-width: 1920px) {
    .profile {
        width: 30%;
    }
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

}
</style>