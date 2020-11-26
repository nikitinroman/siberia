<template>
  <div>
    <StartPage />
    <AboutUs id="О нас" />
    <Roads id="Типы маршрутов" />
    <RoadsPromo id="Маршруты" />
    <Reviews id="Отзывы" />
    <PhotoVideo id="Фото" />
    <AsksAnswers id="Вопросы и ответы" />
    <Footer id="Контакты" />
  </div>
</template>

<script>
import AsksAnswers from "@/components/Blocks/TheAsksAnswers";
import PhotoVideo from "@/components/Blocks/ThePhotoVideo";
import RoadsPromo from "@/components/Blocks/TheRoadsPromo";
import StartPage from "@/components/Blocks/TheStartPage";
import Reviews from "@/components/Blocks/TheReviews";
import AboutUs from "@/components/Blocks/TheAboutUs";
import Footer from "@/components/Blocks/TheFooter";
import Roads from "@/components/Blocks/TheRoads";

export default {
  name: "App",

  components: {
    StartPage,
    AboutUs,
    Roads,
    RoadsPromo,
    Reviews,
    PhotoVideo,
    AsksAnswers,
    Footer
  }
};
</script>
