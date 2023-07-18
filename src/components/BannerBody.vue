<script>
export default {
    name: "BannerBody",
    data() {
        return {
            nav_images: {
                left: "src/assets/banner/body/left.svg",
                right: "src/assets/banner/body/right.svg"
            },
            vps: "src/assets/banner/body/vps.svg",
            vps_text: "VPS/VDS",
            title: "Виртуальный сервер VPS/VDS с бесплатным периодом 7 дней",
            desc: "Гарантированное выделение ресурсов: CPU, ОЗУ, дисков. Скорость канала 10 Гбит/сек. 3 строчка для примера."
        }
    }
}
</script>


<template>
    <div class="banner__body">
        <button class="banner__information__side-btn">
            <img :src="nav_images['left']">
        </button>
        <div class="banner__information">
            <div class="banner__text">
                <span class="banner__information__title">{{ title }}</span>
                <span class="banner__information__description" v-html="desc"></span>
            </div>
            <div class="banner__information__nav-btns">
                <!-- Кнопки не уменьшаются до таких размеров какой он в макете)-->
                <button class="banner__information__nav-btn"></button>
                <button class="banner__information__nav-btn"></button>
                <button class="banner__information__nav-btn"></button>
                <button class="banner__information__nav-btn"></button>
                <button class="banner__information__nav-btn"></button>
            </div>
            <div class="banner__information__vps">
                <img class="banner__information__vps__image" :src="vps">
                <span class="banner__information__vps__text">{{vps_text}}</span>
            </div>
        </div>
        <button class="banner__information__side-btn">
            <img :src="nav_images['right']">
        </button>
    </div>
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
.banner__information__vps{
    width: max-content;
    display: flex;
    gap: 20px;
    opacity: 0.7;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    position: relative;
    bottom: 380px;
    left: 2px;
}
.banner__information__vps__image{
    width: 24px;
    height: 24px;
}
.banner__information__nav-btn{
    width: 6px;
    height: 12px;
    opacity: 0.5;
    border-radius: 100%;
    border: 2px solid white;
    background: transparent;
}
.banner__information__nav-btn:hover{
    background: white;
}
.banner__information__nav-btns{
    display: flex;
    gap: 18px;
    align-items: center;
}
.banner__information__side-btn{
    position: relative;
    bottom: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
    border: none;
}
.banner__information__side-btn:hover{
    background: rgba(255, 255, 255, 0.3);;
}
.banner__information__title{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 56px;
}
.banner__information__description{
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    mix-blend-mode: normal;
    opacity: 0.7;
    width: 400px;
}
.banner__body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 585px;
    gap: 49px;
    color: white;
}
.banner__text{
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 592px;
}
.banner__information{
    position: relative;
    top: 42px;
    display: flex;
    align-self: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 1120px;
    gap: 70px;
}
</style>