<template>
  <div>
    <StartPage></StartPage>
    <AboutUs></AboutUs>
    <Roads></Roads>
    <RoadsPromo id="Маршруты"></RoadsPromo>
    <Reviews></Reviews>
    <PhotoVideo id="Фото"></PhotoVideo>
    <AsksAnswers></AsksAnswers>
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

  }
}
</script>

<style>
body{
  margin: 0;
}
</style>
