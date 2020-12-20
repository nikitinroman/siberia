<template>
  <div
    class="mainDiv3"
  >
    <button class="btnClass" :style="{left: leftPos}" @click="moveLeft">
      &lt;
    </button>
    <div class="ownerDiv">
      <ul
        class="mainSliderUl3"
        :class="{
          mainSliderUl1: quantity === 1,
          mainSliderUl2: quantity === 2,
          transDiv: transition
        }"
        :style="{ transform: 'translateX(' + startTrans + '%)' }"
      >
        <li
          v-for="item in sliderItems"
          :key="item.id"
          class="innerSliderLi3"
          :class="{
            innerSliderLi1: quantity === 1,
            innerSliderLi2: quantity === 2
          }"
          :style="{ order: item.order }"
        >
          <slot v-bind:item="item"></slot>
        </li>
      </ul>
    </div>
    <button class="btnClass" style="right: 1%" @click="moveRight">
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  props: ["sliderItems", "photoVideo"],
  name: "Slider",

  data() {
    return {
      leftPos: '-1%',
      quantity: 3,
      transform: 33.33,
      transition: false,
      currentId: 0,
      startTrans: 0
    };
  },

  methods: {
    async moveLeft() {
      this.startTrans = this.transform;
      this.transition = true;
      await new Promise(resolve => setTimeout(resolve, 500));
      this.currentId--;
      if (this.currentId < 0) {
        this.currentId = this.sliderItems.length - 1;
      }
      this.sliderItems[this.currentId].order -= 1;
      this.startTrans = 0;
      this.transition = false;
    },
    async moveRight() {
      this.startTrans = -this.transform;
      this.transition = true;
      await new Promise(resolve => setTimeout(resolve, 500));
      this.sliderItems[this.currentId].order += 1;
      this.currentId++;
      if (this.currentId > this.sliderItems.length - 1) {
        this.currentId = 0;
      }
      this.startTrans = 0;
      this.transition = false;
    },
    handleResize() {
      if (window.innerWidth < 1000) {
        this.quantity = 2;
        this.transform = 50;
      } else {
        this.quantity = 3;
        this.transform = 33.333;
      }
      if (window.innerWidth < 720) {
        this.quantity = 1;
        this.transform = 100;
      }
      if (this.photoVideo){
        this.quantity = 1;
        this.transform = 100;
        this.leftPos = '1.3%';
      }
  },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped>
.ownerDiv {
  overflow: hidden;
  display: flex;
  margin: auto;
}

.mainSliderUl3 {
  display: flex;
  margin-left: -33.333%;
  width: 100%;
}
.mainSliderUl2 {
  display: flex;
  margin-left: -50%;
}
.mainSliderUl1 {
  display: flex;
  margin-left: -100%;
}

.innerSliderLi3 {
  height: 99%;
  width: 33.33%;
  padding: 0 5px;
  box-sizing: border-box;
}
.innerSliderLi2 {
  width: 50%;
}
.innerSliderLi1 {
  width: 100%;
}

li {
  list-style: none;
  flex: none;
}

ul {
  padding: 0;
}

.btnClass {
  position: absolute;
  height: 20px;
  width: 20px;
  top: 50%;
  z-index: 1;
  background-color: transparent;
  border: none;
  font-size: 40px;
}

.btnClass:hover {
  cursor: pointer;
}

.transDiv {
  transition: 0.5s;
}

.mainDiv3 {
  align-self: center;
  position: relative;
  width: 70%;
}
</style>
