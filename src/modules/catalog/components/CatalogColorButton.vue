<template>
    <button class="color-button" :class="[{ active: isActive }]">
        <div class="color-button__inner" :style="{ backgroundColor: color.value }"></div>
    </button>
</template>

<script setup>
defineProps({
    color: {
        type: Object,
        default: () => ({})
    },
    isActive: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
.color-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    &:hover {
        border: 1px solid var(--border-hover-color);
    }
    &:active {
        border: 1px solid var(--text-color);
    }
    &.active {
        border: 1px solid var(--primary-color);
        box-shadow: 0px 0px 0px 1px var(--primary-color);
        &:active {
            background-color: var(--border-color);
        }
    }
}
.color-button__inner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
</style>
