<template>
  <div class="mainDiv">
    <div class="pDiv">
      <p class="pBig">Фото и видео</p>
      <p class="pSmall">Фото и видео</p>
    </div>
    <div class="underSliderGrid">
      <Slider :slider-items="sliderItems" :photo-video="true">
        <template v-slot="{ item }">
          <div class="gridDiv">
            <div class="picorvid">
              <img :src="item.content[0]" alt="photo" />
            </div>
            <div class="picorvid">
              <iframe
                width="100%"
                height="100%"
                :src="item.content[1]"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div class="picorvid">
              <img :src="item.content[2]" alt="photo" />
            </div>
            <div class="picorvid">
              <img :src="item.content[3]" alt="photo" />
            </div>
          </div>
        </template>
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";

export default {
  name: "PhotoVideo",
  data() {
    return {
      quantity: 1,
      sliderItems: [
        {
          id: 1,
          order: 0,
          content: [
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://www.youtube.com/embed/Ei1z8tt3zPQ",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg"
          ]
        },
        {
          id: 2,
          order: 0,
          content: [
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://www.youtube.com/embed/Ei1z8tt3zPQ",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg"
          ]
        },
        {
          id: 3,
          order: 0,
          content: [
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://www.youtube.com/embed/Ei1z8tt3zPQ",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg"
          ]
        },
        {
          id: 4,
          order: 0,
          content: [
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://www.youtube.com/embed/Ei1z8tt3zPQ",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg"
          ]
        },
        {
          id: 5,
          order: 0,
          content: [
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://www.youtube.com/embed/Ei1z8tt3zPQ",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
            "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg"
          ]
        }
      ]
    };
  },
  components: {
    Slider
  }
};
</script>

<style scoped>
.mainDiv {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-image: url("/Baikal.jpg");
  background-position: 0 73%;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 20px;
}

.pDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
}

.gridDiv {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  height: 50vh;
  width: 100%;
  margin-left: -100%;
}

img {
  width: 100%;
  height: 100%;
}

.underSliderGrid {
  display: flex;
  justify-content: center;
  width: 100%;
}

.pBig {
  color: rgba(46, 89, 94, 0.15);
  font-size: 64px;
  margin: 0;
  font-family: archivo, sans-serif;
}

.pSmall {
  color: rgba(46, 89, 94, 1);
  margin-top: -40px;
  font-size: 36px;
  font-family: archivo, sans-serif;
}

.picorvid {
  background-color: #ffffff;
  margin: 5px;
}
@media screen and (max-width: 500px) {
  .pBig{
    display: none;
  }
  .pSmall{
    margin: 0;
  }
}
</style>
