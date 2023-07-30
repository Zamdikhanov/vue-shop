<template>
    <div v-if="purchases.length" class="purchases">
        <div class="purchases__list">
            <h1 class="purchases__list-title">Корзина</h1>
            <div v-for="product in purchasedProducts" :key="product.id" class="basket-row">
                <div class="image-block">
                    <img
                        :src="getSrcImage(product)"
                        :alt="product.title"
                        class="image-block__image"
                    />
                </div>
                <div class="description-block">
                    <div class="basket-row__subtitle">Наименовние</div>
                    <div class="basket-row__product-title">{{ product.title }}</div>
                    <div v-if="product.type === 'configurable'" class="basket-row__product-price">
                        Цвет <span>{{ getProductAttribute(product, 'color').label }}</span>
                    </div>
                    <div v-if="product.type === 'configurable'" class="basket-row__product-size">
                        Размер <span>{{ getProductAttribute(product, 'size').label }}</span>
                    </div>
                </div>
                <div class="basket-row__counter">
                    <BasketCountInput
                        class="basket-row__counter-input"
                        :count-value="product.totalProductCount"
                        @increase-value="
                            increaseQuantityProduct(product.id, product.selectedProductVariantId)
                        "
                        @decrease-value="
                            decreaseQuantityProduct(product.id, product.selectedProductVariantId)
                        "
                    />
                </div>
                <div class="basket-row__price">
                    <div class="basket-row__subtitle basket-row__subtitle--right">Стоимость</div>
                    <div class="basket-row__price-value">
                        {{ product.regular_price?.value }} {{ product.regular_price?.currency }}
                    </div>
                    <AppButton
                        :outline="true"
                        class="basket-row__delete-btn"
                        @click="deletePurchase(product.id, product.selectedProductVariantId)"
                    >
                        Удалить
                    </AppButton>
                </div>
            </div>
        </div>
        <div class="purchases__total-container">
            <div class="purchases__total-title">Итого</div>
            <div class="purchases__total-counts">
                Общее количество товаров: {{ totalCounts }} шт.
            </div>
            <div class="purchases__total-cost">{{ totalCost }} USD</div>
            <AppButton class="purchases__total-button">Заказать</AppButton>
        </div>
    </div>

    <div v-else class="not-purchases__container">
        <h1 class="not-purchases__title">В корзине пока пусто</h1>
        <div>Загляните на главную, чтобы выбрать товары</div>
        <router-link class="not-purchases__link" to="/">Перейти на главную</router-link>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue';
import AppButton from '@/components/AppButton.vue';
import BasketCountInput from '../components/BasketCountInput.vue';
import { getProducts } from '../services/api.js';

const products = getProducts();

const { purchases, totalCounts, increaseQuantityProduct, decreaseQuantityProduct, deletePurchase } =
    inject('state');

const purchasedProducts = computed(() => {
    return purchases.value.map((purchase) => {
        const purchasedProduct = products.find((product) => product.id === purchase.id);
        if (purchasedProduct) {
            if (purchasedProduct.type === 'simple') {
                return { ...purchasedProduct, totalProductCount: purchase.count };
            } else {
                return {
                    ...purchasedProduct,
                    totalProductCount: purchase.count,
                    selectedProductVariantId: purchase.variantId
                };
            }
        }
        return { id: 'null', title: 'Продукт закончился' };
    });
});

const totalCost = computed(() => {
    return purchasedProducts.value.reduce((acc, el) => {
        return Math.round((acc + el.regular_price.value * el.totalProductCount) * 100) / 100;
    }, 0);
});

function getSrcImage(product) {
    if (product.type === 'configurable') {
        const variant = product.variants.find(
            (variant) => variant.product.id === product.selectedProductVariantId
        );
        if (variant) {
            return variant.product.image;
        }
    }
    return product.image;
}

function getProductAttribute(product, attributeName) {
    const variant = product.variants.find(
        (variant) => variant.product.id === product.selectedProductVariantId
    );
    if (!variant) return {};
    const attributeValueIndex = variant.attributes.find(
        (attr) => attr.code === attributeName
    ).value_index;
    const productAttributes = product.configurable_options.find(
        (option) => option.attribute_code === attributeName
    ).values;
    const attribute = productAttributes.find(
        (attribute) => attribute.value_index === attributeValueIndex
    );
    return attribute;
}
</script>

<style lang="scss" scoped>
.purchases {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.purchases__list {
    flex: 1 1 auto;
    padding: 20px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: #fff;
}
.purchases__list-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: 15px;
}
.basket-row {
    display: grid;
    grid-template-areas:
        'image description'
        'counter counter'
        'price price';
    grid-template-columns: 105px 1fr;
    gap: 20px 10px;
    padding: 10px;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 20px;
    &:last-of-type {
        border-bottom: none;
        margin-bottom: 0px;
    }
}
.image-block {
    grid-area: image;
    align-self: start;
    display: block;
    position: relative;
    width: 100px;
    padding-top: 100px;
    text-decoration: none;
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
.description-block {
    grid-area: description;
    display: grid;
    grid-template-rows: auto 1fr auto auto;
}
.basket-row__subtitle {
    color: var(--text-color-light);
    font-size: var(--font-size-sm);
    margin-bottom: 8px;
    &--right {
        text-align: end;
    }
}
.basket-row__product-title {
    font-weight: 700;
    margin-bottom: 10px;
}
.basket-row__product-price,
.basket-row__product-size {
    color: var(--text-color-light);
    span {
        color: var(--text-color);
    }
}
.basket-row__counter {
    grid-area: counter;
    display: flex;
    align-items: end;
}
.basket-row__counter-input {
    width: 100%;
}
.basket-row__price {
    grid-area: price;
    display: grid;
    grid-template-columns: 1fr;
}
.basket-row__price-value {
    font-weight: 700;
    text-align: end;
    margin-bottom: 10px;
}
.basket-row__delete-btn {
    height: 50px;
    min-width: auto;
    width: 100%;
    align-self: flex-end;
}
.purchases__total-container {
    flex: 0 0 auto;
    height: fit-content;
    padding: 20px 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: #fff;
}
.purchases__total-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: 20px;
}
.purchases__total-counts {
    font-size: var(--font-size);
    color: var(--text-color-light);
    margin-bottom: 10px;
}
.purchases__total-cost {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--primary-color);
    text-align: end;
    margin-bottom: 25px;
}

.not-purchases__container {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    text-align: center;
    .not-purchases__title {
        font-size: var(--font-size-lg);
        font-weight: 700;
    }
    .not-purchases__link {
        font-weight: 700;
    }
}

@media (min-width: 768px) {
    .basket-row {
        grid-template-areas:
            'image description description '
            'image counter price';
        grid-template-columns: 110px 1fr 1fr;
    }
    .purchases__total-container {
        padding: 20px 20px 20px 10px;
    }
    .purchases__total-button {
        width: max-content;
        min-width: 150px;
        margin: 0 0 0 auto;
    }
}

@media (min-width: 1400px) {
    .purchases {
        flex-direction: row;
        gap: 30px;
    }
    .purchases__list {
        flex: 1 1 auto;
        padding: 30px;
    }
    .purchases__list-title {
        margin-bottom: 20px;
    }
    .basket-row {
        grid-template-areas: 'image description counter price';
        grid-template-columns: 100px 1fr 150px 150px;
        gap: 10px 20px;
        padding: 20px 10px;
    }
    .description-block {
        display: grid;
        grid-template-rows: auto 1fr auto auto;
    }
    .basket-row__product-title {
        margin-bottom: 20px;
    }
    .basket-row__price-value {
        font-weight: 700;
        text-align: end;
        margin-bottom: 10px;
    }
    .purchases__total-container {
        flex: 0 0 350px;
        height: fit-content;
        padding: 30px 40px 40px;
        position: sticky;
        top: 20px;
    }
    .purchases__total-title {
        margin-bottom: 20px;
    }
    .purchases__total-cost {
        margin-bottom: 25px;
    }
}
</style>
