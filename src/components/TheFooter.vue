<template>
    <footer class="footer">
        <div class="footer__start-block">
            <div class="footer-wrap">
                <div class="start-block__inner">
                    <div class="start-block__about-block">
                        <div class="start-block__subtitle">Использовано</div>
                        <div>VUE 3 - разработка страниц</div>
                        <div>Vue Router - переключения между страницами</div>
                        <div>Без state management, т.к. нет необходимости</div>
                    </div>
                    <div class="start-block__text-block">
                        Проект двухстраничного сайта магазина. Состоит из страницы каталога и
                        корзины товаров. Нет конкретного макета, за основу взят этот
                        <a
                            href="https://themeforest.net/item/clickboom-multipurpose-psd-template/screenshots/15093696?index=2"
                            >макет дизайнa</a
                        >, hover при наводке на карточки сделал как на
                        <a href="https://www.wildberries.ru">wildberries</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__end-block">
            <div class="footer-wrap">
                Copyright © 2023 by
                <a href="https://github.com/Zamdikhanov" target="”_blank”" class="footer__link"
                    >Zamdikhanov
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
    color: #fff;
}
.footer__start-block,
.footer__end-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--text-color);
    width: 100%;
}
.footer__end-block {
    background-color: #191919;
}
.footer-wrap {
    display: flex;
    align-items: center;
    max-width: 1360px;
    width: 100%;
    height: 100%;
    padding: 15px 10px;
}
.start-block__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}
.start-block__about-block {
    color: var(--text-color-light);
}
.start-block__subtitle {
    color: #fff;
    margin-bottom: 0.5em;
}
.start-block__text-block {
    text-align: justify;
    line-height: 1.5;
}
.footer__link {
    padding: 0 0.5em;
}

@media (min-width: 768px) {
    .footer-wrap {
        padding: 20px 20px;
    }
    .start-block__inner {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
}

@media (min-width: 1400px) {
    .footer-wrap {
        max-width: 1360px;
        padding: 30px 0px;
    }
    .start-block__inner {
        gap: 50px;
    }
    .start-block__about-block {
        line-height: 2;
    }
    .start-block__text-block {
        line-height: 2;
    }
}
</style>
