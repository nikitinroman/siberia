<template>
  <div class="mainDiv">
    <div class="pDiv">
      <p style="color: rgba(46, 89, 94, 0.15); font-size: 64px; margin: 0; font-family: archivo">Фото и видео</p>
      <p style="color: rgba(46, 89, 94, 1); margin-top: -40px; font-size: 36px; font-family: archivo">Фото и видео</p>
    </div>
    <div class="underSliderGrid">
      <div></div>
      <Slider :slider-items="sliderItems" :quantity="quantity" :transform="100">
        <template v-slot="{item}">
          <div class="gridDiv">
            <div>
              <img :src="item.content[0]" alt="photo">
            </div>
            <div>
              <iframe width="100%" height="100%" :src="item.content[1]" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
              <img :src="item.content[2]" alt="photo">
            </div>
            <div>
              <img :src="item.content[3]" alt="photo">
            </div>
          </div>
        </template>
      </Slider>
      <div></div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
export default {
name: "PhotoVideo",
  data(){
  return{
    quantity: 1,
    sliderItems: [
      {
        id: 1,
        order: 0,
        content: [
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://www.youtube.com/embed/xFa2_PVMeDQ',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        ]
      },
      {
        id: 2,
        order: 0,
        content: [
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://www.youtube.com/embed/xFa2_PVMeDQ',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        ]
      },
      {
        id: 3,
        order: 0,
        content: [
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://www.youtube.com/embed/xFa2_PVMeDQ',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        ]
      },
      {
        id: 4,
        order: 0,
        content: [
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://www.youtube.com/embed/xFa2_PVMeDQ',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        ]
      },
      {
        id: 5,
        order: 0,
        content: [
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://www.youtube.com/embed/xFa2_PVMeDQ',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
          'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        ]
      },
    ]
  }
  },
  components:{
  Slider
  }
}
</script>

<style scoped>
.mainDiv{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-image: url("/Baikal.jpg");
  background-position: left center;
  background-repeat: no-repeat;
  filter: blur(2.5px);
}
.pDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.gridDiv{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  height: 50vh;
  width: 100%;
  margin-left: -100%;
}
img{
  width: 100%;
  height: 100%;
}
.underSliderGrid{
  display: grid;
  grid-template-columns: 25% 50% 25%;
}
</style>
