<script>
export default {
    name: "TrustCompany",
    props: {
        image: {
            required: true
        }
    }
}
</script>

<template>
    <img :src="image" :alt="image">
</template>


<style scoped lang="scss">
.trust-companies__companies__company {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 96px;
}
</style>