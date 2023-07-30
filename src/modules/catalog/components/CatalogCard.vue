<template>
    <div class="catalog-card">
        <div class="catalog-card__wrapper">
            <div class="catalog-card__image-block">
                <img class="image-block__image" :src="srcImage" alt="" />
            </div>

            <div class="catalog-card__middle-block">
                <h3 class="middle-block__product-name">{{ product.title }}</h3>
                <div class="middle-block__price">
                    Цена:
                    <span>
                        {{ product.regular_price?.value }} {{ product.regular_price?.currency }}
                    </span>
                </div>
                <div class="middle-block__brand-name">
                    Брэнд:
                    <span>
                        {{ brand.title }}
                    </span>
                </div>
                <div class="middle-block__variants">
                    Варианты: {{ product.variants?.length ?? '1' }}
                </div>

                <div class="catalog-card__end-block">
                    <div v-if="colors" class="end-block__color-container">
                        <CatalogColorButton
                            v-for="currentColor in colors.values"
                            :key="currentColor.value_index"
                            :color="currentColor"
                            :is-active="selectedColorIndex === currentColor.value_index"
                            @click="changeColor(currentColor.value_index)"
                        />
                    </div>
                    <div v-if="sizes" class="end-block__size-container">
                        <AppButton
                            v-for="currentSize in sizes.values"
                            :key="currentSize.value_index"
                            class="end-block__size"
                            :button-type="
                                selectedSizeIndex === currentSize.value_index ? '' : 'secondary'
                            "
                            :outline="true"
                            @click="changeSize(currentSize.value_index)"
                        >
                            {{ currentSize.label }}
                        </AppButton>
                    </div>
                    <AppButton
                        :button-type="isProductInBasket ? 'success' : ''"
                        class="end-block__basket-button"
                        @click="
                            () => {
                                !isProductInBasket && addProductToBasket();
                            }
                        "
                    >
                        {{ isProductInBasket ? 'В корзине' : 'В корзину' }}
                    </AppButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, toRaw, inject, onBeforeMount } from 'vue';
import AppButton from '../../../components/AppButton.vue';
import CatalogColorButton from './CatalogColorButton.vue';

const props = defineProps({
    product: {
        type: Object,
        default: () => ({})
    },
    brand: {
        type: Object,
        default: () => ({})
    }
});

const { purchases, addPurchase } = inject('state');

const isProductInBasket = ref(false);
const selectedSizeIndex = ref(null);
const selectedColorIndex = ref(null);
const selectedVariantId = ref(null);

const colors = computed(() => {
    if (props.product.configurable_options?.length) {
        const idx = props.product.configurable_options.findIndex(
            (el) => el.attribute_code === 'color'
        );
        if (idx >= 0) {
            return props.product.configurable_options[idx];
        }
    }
    return null;
});

const sizes = computed(() => {
    if (props.product.configurable_options?.length) {
        const idx = props.product.configurable_options.findIndex(
            (el) => el.attribute_code === 'size'
        );
        if (idx >= 0) {
            return props.product.configurable_options[idx];
        }
    }
    return null;
});

onBeforeMount(() => {
    if (props.product.type === 'configurable') {
        const purchase = purchases.value.find((purchase) => purchase.id === props.product.id);
        if (purchase) {
            const variant = props.product.variants.find(
                (variant) => variant.product.id === purchase.variantId
            );
            selectedSizeIndex.value = variant.attributes.find(
                (el) => el.code === 'size'
            ).value_index;
            selectedColorIndex.value = variant.attributes.find(
                (el) => el.code === 'color'
            ).value_index;
            isProductInBasket.value = true;
            selectedVariantId.value = purchase.variantId;
        } else {
            selectedSizeIndex.value = props.product.variants[0].attributes.find(
                (el) => el.code === 'size'
            ).value_index;
            selectedColorIndex.value = props.product.variants[0].attributes.find(
                (el) => el.code === 'color'
            ).value_index;
            selectedVariantId.value = props.product.variants[0].product.id;
        }
    } else {
        setIsProductInBasket();
    }
});

const srcImage = computed(() => {
    if (props.product.type === 'configurable') {
        const variant = props.product.variants.find(
            (el) => el.product.id === selectedVariantId.value
        );
        if (variant) {
            return variant.product.image;
        }
    }
    return props.product.image;
});

function setIsProductInBasket() {
    if (props.product.type === 'simple') {
        isProductInBasket.value = purchases.value.some((el) => el.id === props.product.id);
    } else {
        isProductInBasket.value = purchases.value.some(
            (purchaseEl) =>
                purchaseEl.id === props.product.id &&
                purchaseEl.variantId === selectedVariantId.value
        );
    }
}

function addProductToBasket() {
    let id = toRaw(props.product.id);
    let variantId = toRaw(selectedVariantId.value);
    addPurchase(id, variantId);
    isProductInBasket.value = true;
}

function changeColor(colorIndex) {
    const variant = props.product.variants.find((el) => {
        return (
            hasIndexInAttributes(el, 'color', colorIndex) &&
            hasIndexInAttributes(el, 'size', selectedSizeIndex.value)
        );
    });
    if (variant) {
        selectedVariantId.value = variant.product.id;
    } else {
        const altVariant = props.product.variants.find((el) => {
            return hasIndexInAttributes(el, 'color', colorIndex);
        });
        selectedSizeIndex.value = altVariant.attributes.find(
            (el) => el.code === 'size'
        ).value_index;
        selectedVariantId.value = altVariant.product.id;
    }
    selectedColorIndex.value = colorIndex;
    setIsProductInBasket();
}

function changeSize(sizeIndex) {
    const variant = props.product.variants.find((el) => {
        return (
            hasIndexInAttributes(el, 'color', selectedColorIndex.value) &&
            hasIndexInAttributes(el, 'size', sizeIndex)
        );
    });
    if (variant) {
        selectedVariantId.value = variant.product.id;
    } else {
        const altVariant = props.product.variants.find((el) => {
            return hasIndexInAttributes(el, 'size', sizeIndex);
        });
        selectedColorIndex.value = altVariant.attributes.find(
            (el) => el.code === 'color'
        ).value_index;
        selectedVariantId.value = altVariant.product.id;
    }
    selectedSizeIndex.value = sizeIndex;
    setIsProductInBasket();
}

function hasIndexInAttributes(el, attr, idx) {
    const attribute = el.attributes.find((el) => el.code === attr);
    if (attribute) {
        return attribute.value_index === idx;
    }
    return false;
}
</script>

<style lang="scss" scoped>
.catalog-card {
    background-color: #fff;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 16px;
}
.catalog-card__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 100%;
}
.catalog-card__image-block {
    display: block;
    position: relative;
    height: fit-content;
    width: 100%;
    padding-top: 100%;
    text-decoration: none;
    margin-bottom: 15px;
}
.catalog-card__middle-block {
    display: grid;
    grid-template-rows: auto auto auto 1fr;
}
.image-block__image {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
}
.middle-block__product-name {
    font-weight: 700;
    margin-bottom: 1em;
}
.middle-block__brand-name {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15px;
}
.middle-block__price {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5px;
    span {
        font-weight: 700;
        color: var(--primary-color);
    }
}
.middle-block__variants {
    display: none;
    justify-content: center;
    color: var(--text-color-light);
    font-size: var(--font-size-sm);
}
.catalog-card__end-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
}
.end-block__color-container {
    display: flex;

    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
}

.end-block__size-container {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
}
.end-block__size {
    display: flex;
    padding: 2px 8px;
    min-width: auto;
    min-height: auto;
    width: fit-content;
    height: fit-content;
}
.end-block__basket-button {
    margin-top: 15px;
}

@media (min-width: 1400px) {
    .catalog-card {
        padding: 16px;
        position: relative;
        &:hover {
            .catalog-card__wrapper {
                z-index: 1;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: fit-content;
                box-shadow: 0px 0px 1px 1px var(--border-color), var(--box-shadow);
                padding: 16px;
                background-color: #fff;
                border-radius: var(--border-radius);
            }
            .catalog-card__middle-block .middle-block__variants {
                display: none;
            }
            .catalog-card__end-block {
                display: flex;
            }
        }
    }
    .catalog-card__wrapper {
        position: relative;
    }
    .middle-block__variants {
        display: flex;
    }
    .catalog-card__end-block {
        display: none;
    }
}
</style>
