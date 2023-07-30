<template>
    <div class="container">
        <AppButton class="button" @click="$emit('decreaseValue')">-</AppButton>
        <div>{{ countValue }}</div>
        <AppButton class="button" @click="$emit('increaseValue')">+</AppButton>
    </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue';

defineProps({
    countValue: {
        type: Number,
        default: 0
    }
});

const $emit = defineEmits(['increaseValue', 'decreaseValue']);
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    border: 1px solid var(--primary-color);
    border-radius: var(--border-radius);
    height: 50px;
    min-width: 150px;
}
.button {
    min-height: auto;
    min-width: auto;
    height: 40px;
    width: 40px;
}
</style>
