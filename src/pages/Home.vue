<template>
  <div>
    <StartPage id="Start" />
    <AboutUs id="About us" />
    <Roads id="Road types" />
    <RoadsPromo id="Roads" />
    <Reviews id="Reviews" />
    <PhotoVideo id="Photo" />
    <AsksAnswers id="Asks answers" />
    <Footer id="Footer" />
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
