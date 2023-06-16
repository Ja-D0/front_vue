<script>
export default {
    name: "Slider",
    data() {
        return {
            sliderValue: 1,
            price: 50,
            info: "src/assets/slider/info.svg"
        }
    },
    props: {
        type: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>
    <div class="slider-container">
        <div class="slider-result">
            <span class="product-title">{{ name }}: <span
                    class="product-title__value">{{ sliderValue === 1 && name === "Память" ? sliderValue = 1024 : sliderValue }} {{ type }}</span></span>
            <img class="info" :src="info">
            <span>{{ name === "Память" ? sliderValue / 512 * price : sliderValue * price }}Р/мес</span>
        </div>
        <input class="slider" v-model="sliderValue" type="range" :min="min" :max="max"
               :step="name === 'Память'? 1024: 1">
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.product-title__value {
    position: absolute;
    font-family: OpenSans;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(40, 40, 40, 1);
}

.product-title {
    width: 90px;
    font-family: OpenSans, bold;
    font-weight: 900;
    font-size: 14px;
    line-height: 24px;
    color: #282828;
}

.info {
    position: relative;
    width: 19px;
    height: 19px;
}

.slider-result {
    font-family: OpenSans;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(40, 40, 40, 1);
    display: flex;
    flex-direction: row;
    gap: 80px;
}

.slider-container {
    max-width: 340px;
    height: 80px;
}

.slider {
    -webkit-appearance: none;
    width: 340px;
    height: 3px;
    background: rgba(187, 192, 203, 1);
    outline: none;
    opacity: 0.7;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(255, 205, 45, 1);
    cursor: pointer;
}
</style>