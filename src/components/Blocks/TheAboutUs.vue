<template>
  <div>
    <div class="mainDiv">
      <div class="headerInnerDiv">
        <div class="textDouble">
          <div class="textBack">
            Добро пожаловать!
          </div>
          <div class="textFront">
            Добро пожаловать!
          </div>
        </div>
        <div style="color: white">
          <p>
            Сибирь- это страна, в которой ещё осталось много настоящего. Есть и
            гигантские просторы, высокие горы, настоящие морозы, Байкал и море
            тайги. Есть люди, ходящие на волков, есть исследователи таёжных
            лесов, проложившие тысячи километров просек, есть
            староверы-отшельники.
          </p>
        </div>
        <div class="divJournal">
          Журнал "Неизвестная Сибирь"
        </div>
      </div>
    </div>
    <div class="contentDiv">
      <div class="topDiv">
        <img
          class="bluredImg"
          :src="leftpic"
          width="100%"
          height="100%"
          alt="blured image"
        />
      </div>
      <div class="overflowDiv">
        <div style="max-width: 80%;">
          <p class="about-us-phrase">
            О нас
          </p>
        </div>
        <div style="max-width: 80%">
          <p class="infoaboutus">
            Мы проводим туры в красивейшие места Сибири. Предлагаем большое
            количество активных программ с открытым набором в группы -
            присоединиться можно как одному участнику, так и с друзьями. Для
            организованных групп от 10 человек мы готовы предложить поход по
            любому из имеющихся у нас на сайте маршрутов в отдельные удобные
            сроки.<br /><br />
            Инструкторы, с которыми вы можете отправиться в путешествие, прошли
            множество походов и специальную подготовку. Это опытные
            путешественники, увлеченные и творческие люди, для которых походы
            любого типа, в горы и не только, являются любимым делом и важной
            частью жизни. Они познакомят вас с секретами туристского быта,
            расскажут о природе и достопримечательностях маршрута, окажут
            поддержку и всю необходимую помощь, помогут организовать в группе
            комфортную психологическую обстановку.
          </p>
        </div>
        <div class="buttonPodr">
          <button class="btnClass">
            Подробнее
          </button>
        </div>
      </div>
      <div class="middlerightDiv">
        <img class="rightimg" :src="rightpic" alt="right img" />
      </div>
    </div>
  </div>
</template>

<script>
import leftpic from "../../../public/leftpic.jpg";
import rightpic from "../../../public/rightpic.jpg";

export default {
  name: "",

  data() {
    return {
      leftpic,
      rightpic
    };
  }
};
</script>

<style scoped>
.textDouble {
  width: 100%;
  font-size: 50px;
  font-weight: 900;
  color: white;
  text-align: center;
}

.textBack {
  font-size: 63px;
  opacity: 0.5;
  font-family: streamster, sans-serif;
}

.textFront {
  margin-top: -35px;
  font-family: streamster, sans-serif;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
}

.btnClass {
  width: 264px;
  height: 43px;
  background-color: white;
  border: 1px solid black;
  transition: 0.5s;
}

.btnClass:hover {
  background-color: #777;
  cursor: pointer;
}

.mainDiv {
  height: auto;
  background-color: rgb(3, 30, 38);
}

.headerInnerDiv {
  display: flex;
  height: 40vh;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
  justify-content: space-around;
}

.divJournal {
  text-align: right;
  font-size: 25px;
  color: white;
  margin-right: 20px;
  font-family: streamster, sans-serif;
}

.bluredImg {
  filter: blur(2px) grayscale(100%);
}

.contentDiv {
  display: flex;
  height: 60vh;
}

.topDiv {
  height: auto;
  max-width: 20%;
}

.middleDiv {
  border: 1px solid cornflowerblue;
  top: -13px;
  min-height: 53vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overflowDiv {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: content-box;
}

.infoaboutus {
  font-family: archivo, sans-serif;
  font-size: 14px;
  line-height: 15px;
  vertical-align: top;
}

.buttonPodr {
  max-width: 80%;
  margin-top: 20px;
}

.middlerightDiv {
  height: auto;
  max-width: 20%;
  overflow: hidden;
}

.rightimg {
  filter: blur(2px) grayscale(100%);
  margin-left: -78px;
  margin-top: -180px;
}
.about-us-phrase{
  font-family: streamster,
  sans-serif;
  font-size: 70px
}

@media screen and (max-width: 700px) {
  .textBack {
    display: none;
    margin: 0;
  }
  .textFront{
    margin: 0;
    font-size: 28px;
  }
  .overflowDiv{
    height: max-content;
    padding: 10px 0;
    box-sizing: border-box;
  }
}
@media screen and (max-width:540px) {
  .topDiv{
    display: none;
  }
  .middlerightDiv{
    display: none;
  }
  .about-us-phrase{
    font-size: 32px;
  }
}
</style>
