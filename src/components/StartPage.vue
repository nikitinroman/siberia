<template>
  <div style="background-image: url('/siberia.jpg'); background-size: cover; background-position: center;">
    <div class="pictureDiv">
      <div style="display: flex; justify-content: space-around;">
        <div style="color: white; text-decoration: underline">Russian</div>
        <div></div>
        <div></div>
        <div><Burger></Burger></div>
      </div>
      <div style="display: flex; justify-content: center;"><p style="color: white; font-family: grey; font-weight: 400; font-size: 152px"></p></div>
      <div style="display: flex; justify-content: space-around;">
        <div style="display: flex; justify-content: space-between; width: 8.5%">
          <div ><Facebook></Facebook></div>
          <div ><Twitter></Twitter></div>
          <div ><Vkpic></Vkpic></div>
          <div><Instagram></Instagram></div>
        </div>
        <div></div>
        <div style="display: flex; justify-content: space-between; width: 24%">
          <a href="#Маршруты"><div>Маршруты</div></a>
          <a href="#Фото"><div>Фото</div></a>
          <a href=""><div>Контакты</div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../../public/siberia.jpg"
import Burger from './svgComponents/Burgerpic'
import Facebook from './svgComponents/Facebookpic'
import Twitter from './svgComponents/Twitterpic'
import Instagram from './svgComponents/Instagrampic'
import Vkpic from "./svgComponents/Vkpic";

export default {
  data(){
    return{
      image: image
    }
  },
  components: {
    Burger,
    Facebook,
    Twitter,
    Instagram,
    Vkpic,
  }
}
</script>

<style scoped>
@import "../assets/css/fonts.css";
.pictureDiv {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
}
a{
  text-decoration: none;
  color: white;
}
.innerMarginR{
  margin-right: 80%
}
.innerMarginL{
  margin-left: 20%
}
</style>
