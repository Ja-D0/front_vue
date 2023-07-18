<template>
Ну тут типо логин и
  <button @click="goBack">Назад</button>
</template>

<script>
export default {
    name: "Login",
    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>