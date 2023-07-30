<template>
    <div class="page-404">
        <div class="empty"></div>
        <div class="page-404__container">
            <h1 class="page-404__title">Ошибка 404</h1>
            <div>К сожалению данная страница не найдена</div>
            <router-link class="page-404__link" to="/">Перейти на главную</router-link>
        </div>
        <div class="empty"></div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.page-404 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    align-items: center;
    min-height: 40vh;
    height: 100%;
    width: 100%;
}
.page-404__container {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    .page-404__title {
        font-size: var(--font-size-lg);
        font-weight: 700;
    }
    .page-404__link {
        font-weight: 700;
    }
}
</style>
