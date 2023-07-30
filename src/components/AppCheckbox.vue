<template>
    <label class="custom-checkbox">
        <input :checked="isChecked" type="checkbox" :value="value" @change="onHandleClick" />
        <span>{{ label }}</span>
    </label>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    modelValue: { type: [Boolean, Array], default: false },
    label: { type: String, default: '' },
    value: { type: [String, Number], default: 'on' },
    trueValue: { type: Boolean, default: true },
    falseValue: { type: Boolean, default: false }
});

const value = ref(props.modelValue);

const $emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => {
    if (props.modelValue instanceof Array) {
        return props.modelValue.includes(props.value);
    }
    return props.modelValue === props.trueValue;
});

function onHandleClick(event) {
    let isChecked = event.target.checked;
    if (props.modelValue instanceof Array) {
        let newValue = [...props.modelValue];
        if (isChecked) {
            newValue.push(props.value);
        } else {
            newValue.splice(newValue.indexOf(props.value), 1);
        }
        $emit('update:modelValue', newValue);
    } else {
        $emit('update:modelValue', isChecked ? props.trueValue : props.falseValue);
    }
}
</script>

<style lang="scss" scoped>
.custom-checkbox {
    cursor: pointer;
}
.custom-checkbox > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
}

/* создание в label псевдоэлемента before со следующими стилями */
.custom-checkbox > span::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
}

/* стили при наведении курсора на checkbox */
.custom-checkbox > input:not(:disabled):not(:checked) + span:hover::before {
    border-color: var(--border-hover-color);
}

/* стили для активного чекбокса (при нажатии на него) */
.custom-checkbox > input:not(:disabled):active + span::before {
    background-color: var(--primary-dark-color);
    border-color: var(--primary-dark-color);
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox > input:focus-visible:not(:checked) + span::before {
    border-color: var(--primary-color);
}

/* стили для чекбокса, находящегося в состоянии checked */
.custom-checkbox > input:checked + span::before {
    border-color: var(--primary-color);
    background-color: var(--primary-color);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox > input:focus-visible + span::before {
    box-shadow: var(--box-shadow);
    border-color: var(--text-color);
}
.custom-checkbox > input:focus-visible + span {
    color: #000;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox > input:disabled + span::before {
    background-color: var(--border-color);
}
</style>
