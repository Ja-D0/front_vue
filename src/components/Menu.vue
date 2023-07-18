<script>
export default {
    name: "Menu",
    data(){
        return{
            phone_number: "+7 495 644-04-04",
            products: "Продукты",
            clients: "Клиенты",
            help: "Поддержка",
            login: "Войти",
            phone_image: "src/assets/banner/menu/phone.svg",
            logo: "src/assets/banner/menu/logo.svg",
            chevron_down: "src/assets/banner/menu/chevron-down.svg"
        }
    },
    methods: {
        goToLogin() {
           return this.$router.push('/login')
        }
    }
}
</script>


<template>
<div class="menu">
  <div class="menu__container-left-items">
      <img class="menu__logo" :src="logo">
      <div class="menu__items">
          <span>{{ products }}</span>
          <img class="menu__chevron" :src="chevron_down">
      </div>
      <span>{{clients}}</span>
  </div>
  <div class="menu__container-right-items">
      <div class="menu__items">
          <span>{{ help }}</span>
          <img class="menu__chevron" :src="chevron_down">
      </div>
      <div class="menu__call">
          <button class="menu__call-button">
              <img :src="phone_image">
          </button>
          <span class="text_weight">{{ phone_number }}</span>
      </div>
      <button class="menu__login-button" @click="goToLogin">
          <span>{{login}}</span>
      </button>
  </div>
</div>
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.menu{
    display: flex;
    flex-direction: row;
    height: 70px;
    border-bottom: 1px solid rgba(215, 221, 234, 0.3);
    gap: 216px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1px;
    color: white;
}
.menu__container-left-items{
    display: flex;
    align-items: center;
    gap: 48px;
    margin-left: 120px;
}
.menu__container-right-items{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 55px;
}
.menu__items{
    display: flex;
    align-items: center;
    gap: 8px;
}
.menu__logo{
    width: 100px;
    height: 36px;
}
.menu__chevron{
    width: 10px;
    height: 6px;
}
.text_weight{
    font-weight: 400;
}
.menu__call-button{
    background: transparent;
    border-radius: 50%;
    border: 1px solid rgba(215, 221, 234, 0.3);
    height: 40px;
    width: 40px;
}
.menu__call-button:hover{
    background: rgba(255, 255, 255, 0.1);
}
.menu__call{
    display: flex;
    gap: 12px;
    align-items: center;
}
.menu__login-button{
    text-transform: uppercase;
    position: relative;
    left: -25px;
    color: white;
    font-size: 12px;
    width: 112px;
    height: 40px;
    background: transparent;
    border: 1px solid rgba(215, 221, 234, 0.3);
    border-radius: 5px;
}
.menu__login-button:hover{
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
}

</style>