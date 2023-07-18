<script>

import Slider from "@/components/Slider.vue";

export default {
    name: "Configurator",
    components: {Slider},
    data() {
        return {
            slider_one: {
                name: "Процессор",
                min: 1,
                max: 32,
            },
            slider_two: {
                type: "Мб",
                name: "Память",
                min: 1024,
                max: 32768
            },
            slider_three: {
                type: "Гб SSD",
                name: "Диск",
                min: 1,
                max: 1024
            }
        }
    }
}
</script>

<template>
    <section class="configurator">
<!--        <div class="configurator__image">
            <img>
            <span>Скидка 50% на VPS и бесплатный перенос сайта</span>
            <img>
        </div>-->
        <div>
            <span>Двигайте двигульки</span>
            <Slider v-bind="slider_one"></Slider>
            <Slider v-bind="slider_two"></Slider>
            <Slider v-bind="slider_three"></Slider>
        </div>

    </section>
</template>

<style scoped lang="scss">
.configurator__image {
    width: 352px;
    height: 488px;
    background-image: url("src/assets/configurator/configurator-image.svg");
}

.configurator {
    height: 632px;
    width: 100%;
    background: rgba(239, 245, 255, 1);
}
</style>