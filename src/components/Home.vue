<template>
  <div>
    <StartPage></StartPage>
    <AboutUs id="О нас"></AboutUs>
    <Roads id="Типы маршрутов"></Roads>
    <RoadsPromo id="Маршруты"></RoadsPromo>
    <Reviews id="Отзывы"></Reviews>
    <PhotoVideo id="Фото"></PhotoVideo>
    <AsksAnswers id="Вопросы и ответы"></AsksAnswers>
    <Footer id="Контакты"></Footer>
  </div>
</template>

<script>

import StartPage from "@/components/StartPage";
import AboutUs from "@/components/AboutUs";
import Roads from "@/components/Roads";
import RoadsPromo from "@/components/RoadsPromo";
import Reviews from "@/components/Reviews";
import PhotoVideo from "@/components/PhotoVideo";
import AsksAnswers from "@/components/AsksAnswers";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
    StartPage,
    AboutUs,
    Roads,
    RoadsPromo,
    Reviews,
    PhotoVideo,
    AsksAnswers,
    Footer,

  }
}
</script>

<style>
body{
  margin: 0;
}
</style>
