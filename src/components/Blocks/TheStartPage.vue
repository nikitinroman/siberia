<template>
  <div class="mainDiv">
    <div class="pictureDiv">
      <div class="topDiv">
        <div class="languageDiv">
          Russian
        </div>
      </div>

      <div />

      <div class="botDiv">
        <div class="linksDiv">
          <a href="https://ru-ru.facebook.com/">
            <img src="/images/icons/facebook.svg" alt="Иконка Facebook" />
          </a>
          <a href="https://twitter.com/?lang=ru">
            <img src="/images/icons/twitter.svg" alt="Иконка Twitter" />
          </a>
          <a href="https://vk.com/nikitin__roman">
            <img src="/images/icons/vk.svg" alt="Иконка VK" />
          </a>
          <a href="https://www.instagram.com/nikitoss420/">
            <img src="/images/icons/instagram.svg" alt="Иконка Instagram" />
          </a>
        </div>

        <div />

        <div class="anchorDiv">
          <a href="#Roads">
            Маршруты
          </a>
          <a href="#Photo">
            Фото
          </a>
          <a href="Footer">
            Контакты
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainBlock"
};
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
  justify-content: flex-start;
}

.languageDiv {
  color: white;
  text-decoration: underline;
  margin-left: 13.5%;
}

.languageDiv:hover {
  cursor: pointer;
}

.botDiv {
  display: flex;
  justify-content: space-around;
}

.linksDiv {
  display: flex;
  justify-content: space-between;
  width: 100px;
}

.anchorDiv {
  display: flex;
  justify-content: space-between;
  width: 300px;
}

@media screen and (max-width: 600px) {
  .anchorDiv {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
}
</style>
