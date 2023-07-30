<template>
    <TheHeader />
    <main class="main">
        <slot></slot>
    </main>
    <TheFooter />
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    flex: 1 0 auto;
    height: 100%;
    padding: 15px 10px;
}

@media (min-width: 768px) {
    .main {
        padding: 25px 20px;
    }
}

@media (min-width: 1400px) {
    .main {
        max-width: 1360px;
        flex: 1 0 auto;
        padding: 30px 0px;
        margin: 0 auto;
    }
}
</style>
