<template>
  <div class="mainDiv">
    <div class="pictureDiv">
      <div class="topDiv">
        <div class="languageDiv">
          Russian
        </div>
        <div></div>
        <div></div>
        <div>
<!--          <Burger></Burger>-->
        </div>
      </div>

      <div/>

      <div class="botDiv">
        <div class="linksDiv">
          <div>
            <img src="/images/icons/facebook.svg" alt="Иконка Facebook"/>
          </div>
          <div>
            <img src="/images/icons/twitter.svg" alt="Иконка Twitter"/>
          </div>
          <div>
            <img src="/images/icons/vk.svg" alt="Иконка VK"/>
          </div>
          <div>
            <img src="/images/icons/instagram.svg" alt="Иконка Instagram"/>
          </div>
        </div>

        <div/>

        <div class="anchorDiv">
          <a href="#Маршруты">
            Маршруты
          </a>
          <a href="#Фото">
            Фото
          </a>
          <a href="#">
            Контакты
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Burger from '@/components/svgComponents/Burgerpic'

export default {
  name: 'MainBlock',

  components: {
    // Burger,
  }
}
</script>

<style scoped>

.pictureDiv {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
}

a {
  text-decoration: none;
  color: white;
}

.mainDiv {
  background-image: url("/siberia.jpg");
  background-size: cover;
  background-position: center;
}

.topDiv {
  display: flex;
  justify-content: space-around;
}

.languageDiv {
  color: white;
  text-decoration: underline;
}

.botDiv {
  display: flex;
  justify-content: space-around;
}

.linksDiv {
  display: flex;
  justify-content: space-between;
  width: 8.5%;
}

.anchorDiv {
  display: flex;
  justify-content: space-between;
  width: 24%;
}
</style>
