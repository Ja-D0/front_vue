<script>
import Menu from "@/components/Menu.vue";
import BannerBody from "@/components/BannerBody.vue";

export default {
    name: "Banner",
    components: {BannerBody, Menu},
    data() {
        return {
            images: {
                image_close: "../src/assets/banner/header/close.svg",
                image_pointer: "../src/assets/banner/header/pointer.svg",
                image_label: "../src/assets/banner/header/label.svg",
            },
            new_text: "Открыт маркетплейс приложений. ",
            new_text_information: "Получите готовый сервер с настроенным приложением в 2 клика"
        }

    }
}
</script>


<template>
    <section class="banner">
        <div class="header">
            <div class="header__right-items-container">
                <img class="header__new" :src="images['image_label']">
                <div>
                    <span class="text_weight">{{ new_text }}</span>
                    <span>{{ new_text_information }}</span>
                </div>
                <img class="header__pointer" :src="images['image_pointer']">
            </div>
            <img class="header__close" :src="images['image_close']">
        </div>
        <Menu></Menu>
        <BannerBody></BannerBody>
    </section>
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.banner {
    width: 1360px;
    height: 704px;
    background: url("../assets/banner/header/background-banner.png");
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 340px;
    font-family: OpenSans;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    width: 100%;
    height: 49px;
    background: rgba(255, 255, 255, 0.1);
}

.header__right-items-container {
    width: 771px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-left: 120px;
}

.header__new {
    width: 44px;
    height: 24px;
}

.header__close {
    height: 12px;
    width: 12px;
}

.text_weight {
    font-weight: 400;
}

.header__pointer {
    width: 5px;
    height: 8px;
}
</style>