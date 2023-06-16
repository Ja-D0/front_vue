<script>

import {defineComponent} from "vue";
import Banner from "@/components/Banner.vue";
import Product from "@/components/Product.vue";
import Footer from "@/components/Footer.vue";
import CompanyInformation from "@/components/CompanyInformation.vue";
import Configurator from "@/components/Configurator.vue";
import TrustCompany from "@/components/TrustCompany.vue";
import Slider from "@/components/Slider.vue";

export default defineComponent({
    components: {Slider, TrustCompany, Configurator, CompanyInformation, Footer, Product, Banner},
    data() {
        return {
            product_one: {
                id: 1,
                title: "Виртуальная машина 1С-Битрикс",
                desc: "Производительность 180 ед. TOP 3 в рейтинге.",
                price: "от 350 ₽",
                img: "src/assets/products/PC.svg"
            },
            product_two: {
                id: 2,
                title: "Виртуальный сервер VPS/VDS",
                desc: "Гарантия предоставления ресурсов.<br>Виртуализация VMWare.",
                price: "от 350 ₽",
                img: "src/assets/products/server.svg"
            },
            product_three: {
                id: 3,
                title: "1С облако",
                desc: "Работа с 1С:<br>Предприятие через интернет.",
                price: "от 350 ₽",
                img: "src/assets/products/cloud.svg"
            },
            trust_one: {
                image: "src/assets/trustCompanies/aeroflot.svg"
            },
            trust_two: {
                image: "src/assets/trustCompanies/dc.svg"
            },
            trust_three: {
                image: "src/assets/trustCompanies/delta.svg"
            },
            trust_four: {
                image: "src/assets/trustCompanies/palata_rf.svg"
            }
        }
    }

})
</script>


<template>
    <Banner></Banner>
    <section class="products">
        <div class="products__items">
            <Product v-bind="product_one"></Product>
            <Product v-bind="product_two"></Product>
            <Product v-bind="product_three"></Product>
        </div>
        <div class="products__btns">
            <button class="products__btn">
                <img class="btn_icon" src="src/assets/products/chevron left.svg">
            </button>
            <button class="products__btn">
                <img class="btn_icon rotate" src="src/assets/products/chevron left.svg">
            </button>
        </div>
    </section>
    <section class="trust-companies">
        <div class="trust-companies-container">
            <span class="trust-companies__title">Компании, которые нам доверяют</span>
            <div class="trust-companies__companies">
                <TrustCompany v-bind="trust_one"></TrustCompany>
                <TrustCompany v-bind="trust_two"></TrustCompany>
                <TrustCompany v-bind="trust_three"></TrustCompany>
                <TrustCompany v-bind="trust_four"></TrustCompany>
                <TrustCompany v-bind="trust_two"></TrustCompany>
                <TrustCompany v-bind="trust_three"></TrustCompany>
                <TrustCompany v-bind="trust_four"></TrustCompany>
            </div>
        </div>
    </section>
    <Configurator></Configurator>
    <CompanyInformation></CompanyInformation>
    <Footer></Footer>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.trust-companies {
    height: 186px;
}

.trust-companies__companies {
    display: flex;
    gap: 16px;
}

.trust-companies__title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    color: #373633;
}

.trust-companies-container {
    position: relative;
    left: 119px;
    display: flex;
    flex-direction: column;
    width: 1202px;
    height: 146px;
    gap: 40px;
}

.rotate {
    transform: rotate(200grad);
}

.products__btn:hover .btn_icon {
    filter: brightness(100);
}

.products__btn:hover {
    background: rgba(63, 109, 214, 1);
}

.products__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: none;
    background: rgba(239, 245, 255, 1);
}

.products__btns {
    display: flex;
    gap: 9px;
    position: relative;
    bottom: 45px;
}

.products {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 289px;
    align-items: center;
    justify-content: flex-end;
}

.products__items {
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    align-items: center;
    top: -174px;
}
</style>
