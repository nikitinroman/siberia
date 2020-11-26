<template>
  <div class="mainDiv">
    <div class="contentDiv">
      <div class="innerDiv">
        <p class="pPoster">Сибирь есть. Она неизвестная. Она настоящая!</p>
        <button>Подобрать тур</button>
      </div>
      <div class="linksDiv">
        <div class="smallDiv">
          <a href="#About Us">О нас</a>
          <a href="#Start">Контакты</a>
        </div>
        <div class="smallDiv">
          <a href="#Roads">Маршруты</a>
          <a href="#Photo">Фото</a>
        </div>
        <div class="smallDiv">
          <a href="#Reviews">Отзывы</a>
          <a style="width: 130px" href="#Asks answers">Вопросы и ответы</a>
        </div>
        <div class="smallDiv" style="margin-top: -18px">
          <p class="pRenewal">Подпишитесь на наши обновления</p>
          <div>
            <input type="text" placeholder="Email" />
            <button class="buttonRenewal">Клац :)</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.mainDiv {
  background-image: url("/FooterForest.jpg");
  height: 60vh;
  background-size: cover;
  background-position: center;
}

.contentDiv {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

button {
  width: 258px;
  height: 47px;
  background: #777777;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 18px;
  margin-top: 20px;
}

button:hover {
  cursor: pointer;
}

.innerDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #ffffff;
  width: 100px;
}

.linksDiv {
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  margin-top: 30px;
  justify-content: space-around;
}

.smallDiv {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

input {
  height: 41px;
  width: 285px;
}

.pPoster {
  font-family: "Streamster(RUS BY LYAJKA)", archivo, sans-serif;
  font-size: 40px;
}

.pRenewal {
  margin: 0;
  color: #ffffff;
}

.buttonRenewal {
  height: 47px;
  width: 90px;
  box-shadow: none;
  margin-top: 0;
}

.buttonRenewal:hover {
  cursor: pointer;
}
</style>
