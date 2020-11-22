<template>
  <div class="mainDiv">
    <div class="centeringDiv">
      <p class="textClass" >Отзывы путешественников</p>
      <p class="textClass" style="margin-top: -107px; font-size: 36px">Отзывы путешественников</p>
    </div>
    <div class="middleDiv">
        <Slider :slider-items="listOfReviews" :transform="25">
          <template v-slot="{item}">
            <div class="innerSliderDiv">
            <div class="imgDiv">
              <img height="200px" class="imgSlider" :src=item.img alt="photo">
            </div>
            <div>
              <p class="sliderItemTitle" style="font-family: 'Streamster(RUS BY LYAJKA)'; font-size: 24px; margin: 0">{{item.id}}{{item.name}}</p>
            </div>
            <div >
              <p class="sliderItemContent" style="font-family: archivo; font-size: 14px; margin: 14px">{{item.content}}</p>
            </div>
            </div>
          </template>
        </Slider>
    </div>
    <div class="centeringDiv" style="background-color: white">
      <button class="btn">
        <p>Все отзывы</p>
      </button>
      <p style="font-family: archivo; font-size: 18px; margin: 0">Получи скидку 20% на свой первый тур прямо сейчас!</p>
      <div class="formDiv">
        <input style="height: 40px; width: 285px;" type="text" placeholder="E-mail">
        <button class="submitButton">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";

export default {
name: "Reviews",
  data() {
  return{
    listOfReviews:[
      {
        id: 1,
        order: 0,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 2,
        order: 0,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 3,
        order: 0,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 4,
        order: 0,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 5,
        order: 0,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 6,
        order: 0,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 7,
        order: 0,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
    ]
  }
  },
  components:{
    Slider,

  }
}
</script>

<style scoped>
.mainDiv{
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: #031E26;
}
.centeringDiv{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 142.5px;
}
.innerSliderDiv{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: white;
  height: 100%;
  box-shadow: 0 5px 5px rgba(0,0,0,0.55)
}
.btn{
  background: #FFFFFF;
  border: 1px solid #2E595E;
  width: 264px;
  height: 43px;
}
.textClass{
  font-family: archivo;
  font-size: 64px;
  color: rgba(255, 255, 255, 0.15);
}
.middleDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
}
.imgDiv{
  margin-top: 18px;
  width: 85%;
  overflow: hidden;
}
.imgSlider{
  height: 300px;
  width: 100%;
  transition: 0.5s;
}
.sliderItemTitle{
  margin: 5px 0 0 0;
  text-align: center;
  font-size: 27px;
}
.sliderItemContent{
  text-align: center;
}
.formDiv{
  display: flex;
  justify-content: center;
  align-items: center;
}
.submitButton{
  height: 46px;
  width: 90px;
  background: #777777;
}
.imgSlider{
  width: 100%;
  transition: 0.5s;
}
.imgSlider:hover{
  transform: scale(1.15);
}
</style>
