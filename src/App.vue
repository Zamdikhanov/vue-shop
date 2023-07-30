<template>
    <component :is="layout">
        <router-view> </router-view>
    </component>
</template>

<script setup>
import { computed, defineAsyncComponent, onBeforeMount, provide, ref } from 'vue';
import { useRoute } from 'vue-router';

const app_layouts = {
    default: defineAsyncComponent(() => import('./layouts/DefaultLayout.vue')),
    empty: 'div'
};

const route = useRoute();
const route_layout = computed(() => {
    return route.meta?.layout;
});

const layout = computed(() => {
    return Object.keys(app_layouts).includes(route_layout.value)
        ? app_layouts[route_layout.value]
        : app_layouts.default;
});

const purchases = ref([]);
const totalCounts = ref(0);

onBeforeMount(() => {
    const localPurchases = localStorage.getItem('purchases');
    purchases.value = localPurchases ? JSON.parse(localPurchases) : [];
    const localTotalCounts = localStorage.getItem('totalCounts');
    totalCounts.value = localTotalCounts ? +localTotalCounts : 0;
});

function changeLocalStorage() {
    localStorage.setItem('purchases', JSON.stringify(purchases.value));
    localStorage.setItem('totalCounts', totalCounts.value);
}

function addPurchase(id, variantId = null) {
    purchases.value.push({ id, variantId, count: 1 });
    totalCounts.value = totalCounts.value + 1;
    changeLocalStorage();
}

function deletePurchase(id, variantId = null) {
    const deleteCounts = purchases.value.find(
        (el) => el.id === id && el.variantId === variantId
    ).count;
    totalCounts.value = totalCounts.value - deleteCounts;
    purchases.value = purchases.value.filter((el) => !(el.id === id && el.variantId === variantId));
    changeLocalStorage();
}

function increaseQuantityProduct(id, variantId = null) {
    const selectedProduct = purchases.value.find(
        (el) => el.id === id && el.variantId === variantId
    );
    selectedProduct.count++;
    totalCounts.value = totalCounts.value + 1;
    changeLocalStorage();
}

function decreaseQuantityProduct(id, variantId = null) {
    const selectedProduct = purchases.value.find(
        (el) => el.id === id && el.variantId === variantId
    );
    if (selectedProduct.count > 1) {
        selectedProduct.count--;
        totalCounts.value = totalCounts.value - 1;
        changeLocalStorage();
    }
}

provide('state', {
    totalCounts,
    purchases,
    addPurchase,
    deletePurchase,
    increaseQuantityProduct,
    decreaseQuantityProduct
});
</script>

<style lang="scss"></style>
