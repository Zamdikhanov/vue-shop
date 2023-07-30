<template>
    <div class="catalog-page">
        <aside class="filters-container">
            <h3 class="filters-container__title">Фильтровать по</h3>
            <div class="filter">
                <div
                    class="filter__title-block"
                    :class="{ 'filter__title-block--closed': !isShowFilters }"
                >
                    <h3 class="filter__title">Бренды</h3>
                    <AppButton
                        :outline="true"
                        button-type="secondary"
                        class="filter-button"
                        @click="toggleShowFilters"
                    >
                        <IconArrowRight
                            class="filter-icon"
                            :class="{ 'filter-icon--up': isShowFilters }"
                        />
                    </AppButton>
                </div>
                <div class="filter__list" :class="{ 'filter__list--hide': !isShowFilters }">
                    <AppCheckbox
                        v-for="brand in brandsPlusAll"
                        :key="brand.id"
                        v-model="checkedBrands"
                        :value="brand.id?.toString()"
                        :label="brand.title"
                        @change="onSelectBrand"
                    />
                </div>
            </div>
        </aside>

        <div class="card-container">
            <h1 class="card-container__title">Наш каталог</h1>
            <div class="card-container__list">
                <CatalogCard
                    v-for="product in filteredProducts"
                    :key="product.id"
                    :product="product"
                    :brand="getBrandFromId(product.brand)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue';
import AppCheckbox from '../../../components/AppCheckbox.vue';
import CatalogCard from '../components/CatalogCard.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';

import { getProducts, getBrands } from '../services/api.js';
import AppButton from '@/components/AppButton.vue';

const products = getProducts();
const brands = getBrands();

const filteredProducts = computed(() => {
    if (checkedBrands.value[0] === 'AllId') return products;
    return products.filter((el) => {
        return checkedBrands.value.includes(el.brand?.toString());
    });
});

const brandsPlusAll = ref([]);
const checkedBrands = ref(['AllId']);

onBeforeMount(() => {
    brandsPlusAll.value = [{ id: 'AllId', title: 'Все' }, ...brands];
});

const isShowFilters = ref(false);

function toggleShowFilters() {
    isShowFilters.value = !isShowFilters.value;
}

function getBrandFromId(id) {
    return brands.find((el) => el.id === id);
}

function onSelectBrand() {
    if (
        checkedBrands.value.length > 1 &&
        checkedBrands.value[checkedBrands.value.length - 1] === 'AllId'
    ) {
        checkedBrands.value = ['AllId'];
    } else {
        if (checkedBrands.value.length > 1 && checkedBrands.value.includes('AllId')) {
            checkedBrands.value = checkedBrands.value.filter((el) => el !== 'AllId');
        }
    }
    if (checkedBrands.value.length === 0) {
        checkedBrands.value.push('AllId');
    }
}
</script>

<style lang="scss" scoped>
.catalog-page {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    position: relative;
}
.filters-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: fit-content;
}
.card-container__title,
.filters-container__title {
    font-weight: 700;
    font-size: var(--font-size);
}
.card-container__title {
    margin-bottom: 16px;
}
.filter {
    width: 100%;
    padding: 16px;
    background-color: #fff;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
}
.filter__title-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 16px;
    margin-bottom: 16px;
    &--closed {
        padding-bottom: 0px;
        margin-bottom: 0px;
        border-bottom: none;
    }
}
.filter-button {
    width: fit-content;
    height: fit-content;
    min-width: auto;
    min-height: auto;
    padding: 5px;
}
.filter-icon {
    height: 18px;
    width: 18px;
    transform: rotateZ(90deg);
    transition: transform ease-in-out 0.3s;
    &--up {
        transform: rotateZ(-90deg);
    }
}
.filter__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px 30px;
    &--hide {
        display: none;
    }
}
.card-container {
    width: 100%;
}
.card-container__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
}

@media (min-width: 576px) {
    .card-container__list {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }
}

@media (min-width: 992px) {
    .card-container__list {
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
}

@media (min-width: 1400px) {
    .catalog-page {
        display: grid;
        grid-template-columns: 248px 1fr;
        gap: 30px;
        position: relative;
    }
    .filters-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: sticky;
        top: 20px;
        height: fit-content;
    }
    .filter-button {
        display: none;
    }
    .card-container__title,
    .filters-container__title {
        font-weight: 700;
        font-size: var(--font-size);
    }
    .card-container__title {
        margin-bottom: 16px;
    }
    .filter {
        width: 100%;
        padding: 16px;
        background-color: #fff;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
    }
    .filter__title-block {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: 700;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 16px;
        margin-bottom: 16px;
    }
    .filter__list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .card-container {
        width: 100%;
    }
    .card-container__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        width: 100%;
    }
}
</style>
