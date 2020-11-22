<template>
  <div class="mainDiv">
    <div class="contentDiv">
      <div class="innerDiv">
        <p style="font-family: 'Streamster(RUS BY LYAJKA)'; font-size: 40px">Сибирь есть. Она неизвестная. Она настоящая!</p>
        <button>Подобрать тур</button>
      </div>
      <div class="linksDiv">
        <div class="smallDiv">
          <a href="#О нас">О нас</a>
          <a href="#Контакты">Контакты</a>
        </div>
        <div class="smallDiv">
          <a href="#Маршруты">Маршруты</a>
          <a href="#Фото">Фото</a>
        </div>
        <div class="smallDiv">
          <a href="#Отзывы">Отзывы</a>
          <a style="width: 130px" href="#Вопросы и ответы">Вопросы и ответы</a>
        </div>
        <div class="smallDiv" style="margin-top: -18px">
          <p style="margin: 0; color: #FFFFFF">Подпишитесь на наши обновления</p>
          <div>
            <input type="text" placeholder="Email">
            <button style="height: 47px;width: 90px; box-shadow: none; margin-top: 0px">Клац :)</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
.mainDiv{
  background-image: url("/FooterForest.jpg");
  height: 60vh;
  background-size: cover;
  background-position: center;
}
.contentDiv{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
button{
  width: 258px;
  height: 47px;
  background: #777777;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.25);
  color: #FFFFFF;
  font-size: 18px;
}
.innerDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
a{
  text-decoration: none;
  color: #FFFFFF;
  width: 100px
}
.linksDiv{
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  margin-top: 30px;
  justify-content: space-around;
}
.smallDiv{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
input{
  height: 41px;
  width: 285px;
}
</style>
