<template>
  <div class="mainDiv3" :class="{ mainDiv1 : quantity === 1}">
    <button class="btnClass" style="left:-1%" @click="moveLeft">
      &lt;
    </button>
    <div class="ownerDiv">
      <ul class="mainSliderUl3" :class="{mainSliderUl1: quantity === 1, transDiv : transition}"
          :style="{transform: 'translateX(' + startTrans + '%)'}">
        <li v-for="item in sliderItems" :key="item.id" class="innerSliderLi3" :class="{innerSliderLi1: quantity === 1}"
            :style="{'order': item.order}">
          <slot v-bind:item="item"></slot>
        </li>
      </ul>
    </div>
    <button class="btnClass" style="right: 0.5%" @click="moveRight">
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  props: ['sliderItems', 'quantity', 'transform'],
  name: "Slider",

  methods: {
    async moveLeft() {
      this.startTrans = this.trans
      this.transition = true
      await new Promise(resolve => setTimeout(resolve, 500))
      this.currentId--
      if (this.currentId < 0) {
        this.currentId = this.sliderItems.length - 1
      }
      this.sliderItems[this.currentId].order -= 1
      this.startTrans = 0
      this.transition = false
    },
    async moveRight() {
      this.startTrans = -this.trans
      this.transition = true
      await new Promise(resolve => setTimeout(resolve, 500))
      this.sliderItems[this.currentId].order += 1
      this.currentId++
      if (this.currentId > this.sliderItems.length - 1) {
        this.currentId = 0
      }
      this.startTrans = 0
      this.transition = false
    }
  },
  data() {
    return {
      transition: false,
      currentId: 0,
      trans: this.transform,
      startTrans: 0,
    }
  }
}
</script>

<style scoped>
.ownerDiv {
  overflow: hidden;
  display: flex;
  max-width: 100%;
  margin: auto;
}

.mainSliderUl3 {
  display: flex;
  margin-left: -33.333%;
}
.mainSliderUl1 {
  display: flex;
  margin-left: 0;
}

.innerSliderLi3 {
  height: 99%;
  width: 25%;
  padding: 0 5px;
  box-sizing: border-box;
}
.innerSliderLi1 {
  height: 100%;
  width: 100%;
  padding: 0 0px;
  box-sizing: border-box;
}

li {
  list-style: none;
  flex: none;
}

ul {
  padding: 0
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

.transDiv {
  transition: 0.5s;
}

.mainDiv3 {
  align-self: center;
  position: relative;
  max-width: 70%;
}

.mainDiv1 {
  max-width: 100%;
}
</style>
