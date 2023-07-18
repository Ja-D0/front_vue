<script>
export default {
    name: "Product",
    data() {
        return {
            top: "src/assets/products/top.svg",
            bnt: "Заказать"
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    }
}
</script>


<template>
    <div class="product__item" :class="id===1 ? 'background_one': id===2 ? 'background_two': 'background_three'">
        <div class="product__description">
            <span class="product__description__title">{{ title }}</span>
            <span class="product__description__specification" v-html="desc"></span>
            <span class="product__description__price">{{ price }}</span>
        </div>
        <img class="product__item__image-top" :src="top">
        <div class="product__description__bottom-items">
            <button class="product__item__button">
                <span>{{ bnt }}</span>
            </button>
            <img class="product__description__image" :src="img">
        </div>
    </div>
</template>


<style scoped lang="scss">
.product__description__bottom-items {
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 90px;
}

.product__description__image {
    position: relative;
    bottom: 18px;
    width: 140px;
    height: 140px;
}

.product__item__image-top {
    width: 41px;
    height: 24px;
    display: flex;
    align-self: flex-end;
    position: relative;
    bottom: 154px;
    right: 24px;
}

.product__item {
    width: 352px;
    height: 352px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
}

.background_one {
    background: linear-gradient(45deg, #50608D 0%, #3B486D 100%);;
}

.background_two {
    background: linear-gradient(45deg, #3F6DD6 0%, #2755C1 99.88%);
}

.background_three {
    background: linear-gradient(45deg, #1E7DB7 0%, #125582 100%);
}

.product__item__button {
    position: relative;
    bottom: 24px;
    left: 24px;
    color: white;
    text-transform: uppercase;
    width: 116px;
    height: 48px;
    font-family: OpenSans;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    background: transparent;
    border-radius: 4px;
    mix-blend-mode: normal;
    border: 1px solid rgba(255, 255, 255, 0.5);
    align-self: flex-end;
}

.product__item__button:hover {
    background: rgba(255, 255, 255, 0.2);;
}

.product__description__title {
    width: 217px;
    min-height: 64px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
}

.product__description__specification {
    width: 217px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}

.product__description__price {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
}

.product__description {
    color: white;
    position: relative;
    top: 21px;
    left: 24px;
    width: 217px;
    display: flex;
    flex-direction: column;
    gap: 19px;
}
</style>