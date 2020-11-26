<template>
  <div class="mainDiv">
    <div class="backgroundDiv">
      <div style="text-align: center;">
        <p class="pBig">Типы маршрутов</p>
        <p class="pSmall">Типы маршрутов</p>
      </div>
      <div class="pictureDiv">
        <img width="100%" class="imgStyle" :src="forestpic" alt="Picture">
      </div>
      <div class="botDiv">
        <div></div>
        <div>
          <p class="botP">То, что ты не увидишь в городе!</p></div>
        <div></div>
      </div>
    </div>
    <div class="absDiv">
      <div class="innerDiv">
        <p class="marshType">Пешие</p>
        <div class="marshList" v-for="row in listOfGround" v-bind:key="row">
          <img style="margin-right: 5px" src="/images/icons/dog.svg" alt="Иконка Лапки"/>
          <p class="pTypes">{{ row }}</p>
        </div>
      </div>
    </div>
    <div class="absDiv addDivClass">
      <div class="innerDiv">
        <p class="marshType">Водные</p>
        <div class="marshList" v-for="row in listOfWater" v-bind:key="row">
          <img style="margin-right: 5px" src="/images/icons/duck.svg" alt="Иконка Утки"/>
          <p class="pTypes">{{ row }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import forestpic from "../../../public/forest.jpg"

export default {
  data() {
    return {
      forestpic,
      listOfGround: ['Восхождение', 'Скалолазанье', 'Переходы налегке', 'Переходы с рюкзаками', 'Горный лагерь'],
      listOfWater: ['Сплав', 'На байдарках', 'На морских каяках', 'На лодках', 'Рыбалка']
    }
  },
  components: {
  }
}
</script>
<style scoped>
.mainDiv {
  position: relative
}

.backgroundDiv {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center
}

.pBig {
  font-size: 64px;
  opacity: 0.2;
  font-family: archivo, sans-serif;
}

.pSmall {
  font-size: 36px;
  margin-top: -100px;
  font-family: archivo, sans-serif;
}

.pictureDiv {
  overflow: hidden;
  width: 100%;
  height: 25%
}

.imgStyle {
  filter: blur(4px) grayscale(100%);
}

.botDiv {
  display: flex;
  justify-content: space-around
}

.botP {
  font-family: streamster, sans-serif;
  font-size: 48px
}

.absDiv {
  position: absolute;
  width: 20%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.55);
  top: 30%;
  left: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center
}

.addDivClass {
  top: 35%;
  left: 47%;
}

.innerDiv {
  width: 90%;
  height: 90%;
  background-color: #777777;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
}

.marshType {
  font-family: streamster;
  font-size: 48px;
  margin: 0;
  color: white;
  margin-bottom: 8px;
}

.marshList {
  width: 70%;
  display: flex
}

.pTypes {
  margin: 0 0 12px 0;
  text-align: start;
  color: white
}
</style>
