<template>
    <header class="header">
        <div class="header__main">
            <div class="header-wrap">
                <div class="logo">
                    <div class="logo__title">Zamdikhanov</div>
                    <div class="logo__subtitle">family online store</div>
                </div>
                <router-link to="/basket" class="header__basket">
                    <div class="header__basket-icon-container">
                        <IconBasket class="icon-basket" />
                        <div v-if="totalCounts" class="icon-basket__counts">{{ totalCounts }}</div>
                    </div>
                    <div class="header__basket-content">
                        <div class="header__basket-title">Корзина покупок</div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="header__subheader">
            <div class="header-wrap">
                <router-link to="/" class="header__subheader-home">
                    <IconHome class="icon-home" />
                </router-link>
                <div class="header__subheader-contacts">Social</div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { inject } from 'vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconBasket from '@/components/icons/IconBasket.vue';

const { totalCounts } = inject('state');
</script>

<style lang="scss" scoped>
.header {
    --subheader-height: 30px;
    height: var(--header-height);
}
.header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px 10px;
}

.header__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(var(--header-height) - var(--subheader-height));
}

.logo {
    padding: 8px 0px;
}
.logo__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    &::first-letter {
        color: var(--primary-dark-color);
    }
}
.logo__subtitle {
    font-size: 12px;
    font-weight: 700;
    text-align: end;
}
.header__basket {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 16px;
    height: calc(var(--header-height) - var(--subheader-height));
    width: 60px;
    background-color: var(--border-color);
    text-decoration: none;
    &:hover .icon-basket {
        color: #000;
        transform: scale(1.05);
    }
    &:hover .header__basket-title {
        color: #000;
    }
}
.header__basket-icon-container {
    position: relative;
}
.icon-basket {
    height: 25px;
    width: 25px;
    color: var(--text-color);
    transition: color, transform ease-in-out 0.2s;
}
.icon-basket__counts {
    position: absolute;
    top: -5px;
    left: 62%;
    border-radius: 50%;
    font-size: var(--font-size-sm);
    padding: 2px 1px;
    color: #fff;
    font-weight: 700;
    min-width: 1.5em;
    text-align: center;
    background-color: var(--danger-color);
}
.header__basket-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.header__basket-title {
    display: none;
    color: var(--text-color);
}
.header__subheader {
    height: var(--subheader-height);
    width: 100%;
    background-color: var(--text-color);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header__subheader-home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: var(--primary-color);
    color: #fff;
    text-decoration: none;
    padding: 0 3px;
    &:hover {
        background-color: var(--primary-dark-color);
    }
}
.icon-home {
    height: 25px;
    width: 25px;
}
.header__subheader-contacts {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 60px;
    width: auto;
    background-color: #000;
}

@media (min-width: 768px) {
    .header {
        --subheader-height: 40px;
    }
    .header-wrap {
        padding: 0px 20px;
    }
    .logo__title {
        font-size: 30px;
    }
    .header__basket {
        padding: 16px;
        width: 220px;
    }
    .icon-basket {
        height: 30px;
        width: 30px;
    }
    .header__basket-title {
        display: block;
    }
    .header__subheader-home {
        padding: 0 8px;
    }
    .icon-home {
        height: 25px;
        width: 25px;
    }
    .header__subheader-contacts {
        min-width: 220px;
    }
}

@media (min-width: 1400px) {
    .header {
        --subheader-height: 50px;
    }
    .header-wrap {
        max-width: 1360px;
        padding: 0px 0px;
    }
    .logo {
        padding: 8px 0px;
    }
    .logo__title {
        font-size: 38px;
    }
    .header__basket {
        padding: 16px;
        width: 248px;
    }
    .icon-basket {
        height: 50px;
        width: 50px;
    }
    .icon-basket__counts {
        top: 0;
        left: 62%;
        transform: translateX(-50%);
        min-width: 1.5em;
        font-size: var(--font-size);
    }
    .header__subheader-home {
        padding: 0 16px;
    }
    .header__subheader-contacts {
        width: 248px;
    }
}
</style>
