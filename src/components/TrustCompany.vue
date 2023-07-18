<script>
export default {
    data() {
        return {
            offset: 0,
            frec: 1
        }
    },
    mounted() {
        setInterval(this.slideImages, 2);
    },
    methods: {
        slideImages() {
            this.offset -= this.frec;
            if (this.offset < -this.frec * (1200 - 1)) {
                this.offset = 1400;
            }
        },
    },
    name: "TrustCompany",
    props: {
        image: {
            required: true
        }
    }
}
</script>

<template>
    <img :src="image" :alt="image" :style="{ transform: `translateX(${offset}px)` }">
</template>


<style scoped lang="scss">
.trust-companies__companies__company {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 96px;

  .img {
    transition: transform 0.3s ease;
  }
}

</style>