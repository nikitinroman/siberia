<template>
  <div class="mainDiv">
    <div class="centeringDiv">
      <p class="textClass" >Отзывы путешественников</p>
      <p class="textClass" style="margin-top: -107px; font-size: 36px">Отзывы путешественников</p>
    </div>
    <div class="middleDiv">
      <div class="middleInnerDiv">
        <div class="cardDiv" v-for="reviews in listOfReviews" :key="reviews.id">
          <div>
            <img style="border: 2px solid #2E595E" height="200px" width="220px" :src=reviews.img alt="photo">
          </div>
          <div>
            <p style="font-family: 'Streamster(RUS BY LYAJKA)'; font-size: 24px; margin: 0">{{reviews.name}}</p>
          </div>
          <div style="padding: 0 5px">
            <p style="font-family: archivo; font-size: 14px">{{reviews.content}}</p>
          </div>
          <div class="kekDiv">
            <p style="margin: 10px; font-family: 'Streamster(RUS BY LYAJKA)'; font-size: 25px">Наведите, чтобы посмотреть отзыв</p>
          </div>
        </div>
      </div>
    </div>
    <div class="centeringDiv" style="background-color: white">
      <button class="btn">
        <p>Все отзывы</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
name: "Reviews",
  data() {
  return{
    listOfReviews:[
      {
        id: 1,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 2,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 3,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
      {
        id: 4,
        name: 'СветОчка',
        img: 'https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque laudantium numquam perspiciatis, quidem totam.'
      },
    ]
  }
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
  background-color: white;
  width: 100%;
}
.middleInnerDiv{
  padding: 3% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, white, #031E26);
  flex-wrap: wrap;
}
.cardDiv{
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 250px;
  background-color: white;
  margin: 0 10px;
  padding: 10px 0;
  margin-bottom: 20px;
}
.kekDiv{
  position: absolute;
  height: 38%;
  width: 100%;
  background-color: white;
  top: 62%
}
.cardDiv:hover .kekDiv{
  z-index: -1;
}
</style>
