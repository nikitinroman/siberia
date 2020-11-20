<template>
  <div style="position: relative">
    <div style="height: 100vh; width: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: center">
      <div style="text-align: center;">
        <p style="font-size: 64px; opacity: 0.2">Типы маршрутов</p>
        <p style="font-size: 36px; margin-top: -100px">Типы маршрутов</p>
      </div>
      <div style="overflow: hidden; width: 100%; height: 25%">
        <img width="100%" style="filter: blur(4px) grayscale(100%);" :src="forestpic">
      </div>
      <div style="display: flex; justify-content: space-around">
        <div></div>
        <div>
          <p style="font-family: streamster; font-size: 48px">То, что ты не увидишь в городе!</p></div>
        <div></div>
      </div>
    </div>
    <div style="position: absolute; width: 20%; height: 40%; background-color: rgba(255,255,255,0.5);box-shadow: 0 5px 5px rgba(0,0,0,0.55); top: 30%; left: 30%; display: flex; justify-content: space-around; align-items: center">
      <div style="width: 90%; height: 90%; background-color: #777777; box-shadow: 0 5px 5px rgba(0,0,0,0.55); display: flex; justify-content: start; align-items: center; flex-direction: column">
        <p style="font-family: streamster; font-size: 48px; margin: 0; color: white">Пешие</p>
        <div style="width: 70%; display: flex" v-for="row in listOfGround" v-bind:key="row">
          <dog style="margin-right: 5px"></dog>
          <p style="margin: 0 0 12px 0; text-align: start; color: white">{{row}}</p>
        </div>
      </div>
    </div>
    <div style="position: absolute; width: 20%; height: 40%; background-color: rgba(255,255,255,0.5);box-shadow: 0 5px 5px rgba(0,0,0,0.55); top: 35%; left: 47%; display: flex; justify-content: space-around; align-items: center">
      <div style="width: 90%; height: 90%; background-color: #777777; box-shadow: 0 5px 5px rgba(0,0,0,0.55); display: flex; justify-content: start; align-items: center; flex-direction: column">
        <p style="font-family: streamster; font-size: 48px; margin: 0; color: white">Водные</p>
        <div style="width: 70%; display: flex" v-for="row in listOfWater" v-bind:key="row">
          <duck style="margin-right: 5px"></duck>
          <p style="margin: 0 0 12px 0; text-align: start; color: white">{{row}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import forestpic from "../../public/forest.jpg"
import duck from "./svgComponents/Duck"
import dog from "./svgComponents/Dog"

export default {
  data() {
    return{
      forestpic,
      listOfGround: ['Восхождение', 'Скалолазанье', 'Переходы налегке', 'Переходы с рюкзаками', 'Горный лагерь'],
      listOfWater: ['Сплав', 'На байдарках', 'На морских каяках', 'На лодках', 'Рыбалка']
    }
  },
  components: {
    duck,
    dog
  }
}
</script>
@import "../assets/css/fontstream.css";
<style scoped>

</style>
