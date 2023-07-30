<template>
    <button
        class="button"
        :class="[
            { success: buttonType === 'success' },
            { secondary: buttonType === 'secondary' },
            { outline: outline }
        ]"
    >
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    buttonType: {
        validator: function (value) {
            return ['', 'secondary', 'success'].includes(value);
        },
        default: ''
    },
    outline: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped>
.button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    width: 100%;
    padding: 5px 10px;
    font-weight: 700;
    color: #fff;
    border-radius: var(--border-radius);
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    &.outline {
        color: var(--primary-color);
    }
    &.secondary {
        color: var(--text-color-light);
        border: 1px solid var(--border-color);
        background-color: var(--border-color);
    }
    &.success {
        border: 1px solid var(--success-color);
        background-color: var(--success-color);
        &.outline {
            color: var(--success-color);
        }
    }
    &.outline {
        background-color: transparent;
    }
}
.button:hover {
    background-color: var(--primary-dark-color);
    &.outline {
        color: var(--primary-dark-color);
    }
    &.secondary {
        color: var(--text-color);
        border: 1px solid var(--border-hover-color);
        background-color: var(--border-hover-color);
    }
    &.success {
        border: 1px solid var(--success-dark-color);
        background-color: var(--success-dark-color);
        &.outline {
            color: var(--success-dark-color);
        }
    }
    &.outline {
        background-color: transparent;
    }
}
.button:active {
    background-color: var(--primary-darken-color);
    &.outline {
        color: var(--primary-darken-color);
    }
    &.secondary {
        color: #000;
        border: 1px solid var(--border-hover-color);
        background-color: var(--border-hover-color);
    }
    &.success {
        border: 1px solid var(--success-darken-color);
        background-color: var(--success-darken-color);
        &.outline {
            color: var(--success-darken-color);
        }
    }
    &.outline {
        background-color: transparent;
    }
}

@media (min-width: 768px) {
    .button {
        min-width: 150px;
        width: 100%;
    }
}
</style>
