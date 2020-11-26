<template>
  <div class="mainDiv">
    <div class="absDiv"></div>
    <div class="contentDiv">
      <div style="text-align: center;">
        <p class="bigP">Маршруты</p>
        <p class="smallP">Маршруты</p>
      </div>
      <Slider :slider-items="sliderItems" :transform="25">
        <template v-slot="{ item }">
          <div class="innerSliderDiv">
            <router-link
                :to="'/AboutTour/' + item.id + '/' + item.title"
                :key="item.id"
                class="imgDiv"
                tag="div"
            >
              <img height="260px" class="imgSlider" :src="item.img" alt="cat"/>
            </router-link>
            <div>
              <p class="sliderItemTitle">{{ item.title }}</p>
            </div>
            <div style="width: 100%">
              <p class="sliderItemContent">{{ item.content }}</p>
            </div>
            <div class="blueline"></div>
            <div>
              <p>Сложность</p>
            </div>
            <div class="duckDiv">
              <div v-for="val in 5" :key="val">
                <img
                    v-if="val <= item.level"
                    src="/images/icons/blackDuck.svg"
                    alt="Иконка Черной утки"
                />
                <img
                    v-else
                    src="/images/icons/greyDuck.svg"
                    alt="Иконка Серой утки"
                />
              </div>
            </div>
          </div>
        </template>
      </Slider>
      <div>
        <button class="btnClass" style="width: 220px; height: 37px;">
          Все маршруты
        </button>
      </div>
      <div
          style="display: flex; justify-content: space-around; width: 70%; align-items: center"
      >
        <div>
          <label for="select1">Желаемая дата</label>
          <div id="select1" class="listRoads">
            <select v-model="chosenDate">
              <option
                  selected="datesList[1]"
                  v-for="item in datesList"
                  :key="item"
              >{{ item }}
              </option
              >
            </select>
          </div>
        </div>
        <div>
          <label for="select2">Количество дней</label>
          <div id="select2" class="listRoads">
            <select v-model="chosenDate">
              <option v-for="item in daysList" :key="item">{{ item }}</option>
            </select>
          </div>
        </div>
        <div>
          <label for="select3">Тип маршрута</label>
          <div id="select3" class="listRoads">
            <select v-model="chosenDate">
              <option v-for="item in typesList" :key="item">{{ item }}</option>
            </select>
          </div>
        </div>
        <div>
          <button
              class="btnClass"
              style="background-color: #777777; color: white; height: 62px; margin-top: 18px"
          >
            Подобрать тур
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";

export default {
  name: "RoadsPromo",
  data() {
    return {
      transform: 0,
      transition: false,
      chosenDate: 0,
      chosenDays: 0,
      chosenType: 0,
      datesList: [
        "15.11.2020",
        "16.11.2020",
        "17.11.2020",
        "18.11.2020",
        "19.11.2020"
      ],
      daysList: [
        "1 день",
        "2 дня",
        "3 дня",
        "4 дня",
        "5 дней",
        "6 дней",
        "7 дней"
      ],
      typesList: ["Наземный", "Водный", "Смешанный", "Пеший"],
      sliderItems: [
        {
          id: 1,
          order: 0,
          img:
              "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
          title: "Плато Путорана",
          content: "Под полярным небом",
          level: 4
        },
        {
          id: 2,
          order: 0,
          img:
              "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
          title: "Байкал",
          content: "Пять дней по льду Байкала (с размещением на базах)",
          level: 2
        },
        {
          id: 3,
          order: 0,
          img:
              "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
          title: "Ленские столбы",
          content: "Путешествие к Ленским и Синским столбам в Якутии",
          level: 3
        },
        {
          id: 4,
          order: 0,
          img:
              "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
          title: "Плато Путорана",
          content: "Под полярным небом",
          level: 4
        },
        {
          id: 5,
          order: 0,
          img:
              "https://topspb.tv/768x432/uploaded/news_covers/ermit_eu41VUl.jpg",
          title: "Байкал",
          content: "Пять дней по льду Байкала (с размещением на базах)",
          level: 2
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
  height: 100vh;
}

.absDiv {
  position: absolute;
  width: 100%;
  height: 45%;
  background-color: rgb(3, 30, 38);
}

.contentDiv {
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.bigP {
  color: white;
  opacity: 0.15;
  font-size: 96px;
  margin: 0;
}

.smallP {
  color: white;
  font-size: 40px;
  margin-top: -60px;
  margin-bottom: 0;
}

.btnClass {
  width: 217px;
  height: 52px;
  background-color: white;
  border: 1px solid #2e595e;
  transition: 0.5s;
  font-size: 18px;
}

.listRoads {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid #2e595e;
  width: 217px;
  height: 45px;
}

.btnClass:hover {
  background-color: #777777;
}

select {
  border: none;
  width: 80%;
}

select:focus {
  outline: none;
  width: 100%;
  height: 100%;
  background-color: #2e595e;
  color: white;
}

.imgSlider {
  width: 100%;
  transition: 0.5s;
}

.imgSlider:hover {
  transform: scale(1.15);
}

.innerSliderDiv {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: white;
  height: 100%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.55);
}

.sliderItemTitle {
  font-family: streamster, archivo, sans-serif;
  text-align: center;
  font-size: 27px;
  margin-top: 15px;
}

.sliderItemContent {
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
}

.duckDiv {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 8px;
}

.imgDiv {
  margin-top: 18px;
  width: 85%;
  height: 260px;
  overflow: hidden;
}

.blueline {
  height: 1px;
  width: 58%;
  border-top: 1px solid rgba(124, 165, 202, 1);
}
</style>
