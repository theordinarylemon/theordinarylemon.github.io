<template>
  <div class="slider">
    <div class="slides"  
      :style="{ transform: `translateX(-${currentSlide * 33.333}%)` }">
      <div class="slide">
        <img :src="girl">
      </div>
      <div class="slide">
        <img :src="logo">
      </div>
      <div class="slide">
        <img :src="samon">
      </div>
    </div>

    <div class="slider-nav">
      <button
        v-for="(slide, index) in 3"
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
      ></button>
      
    </div>

  </div>
</template>

<script>
import girl from "../assets/happy-girl-kitting.png"
import logo from "../assets/logo.png"
import samon from "../assets/samon.jpeg"

export default{
   name: "SliderCom",

    data() {
        return {
            girl,
            logo,
            samon,
            currentSlide: 0,
            timer: null

        }
    },

    mounted() {
    this.startAutoSlide()
  },

  beforeUnmount() {
    clearInterval(this.timer)
  },
     
    methods: {

    startAutoSlide() {
      this.timer = setInterval(() => {

        if (this.currentSlide < 2) {
          this.currentSlide++
        } else {
          this.currentSlide = 0
        }

      }, 3000)
    },

    goToSlide(index) {
      this.currentSlide = index
    }
  }  
}
</script>

<style scoped>
.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.slider {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 600px;
    margin: 0 auto;
    overflow: hidden;
}

.slider input {
    display: none;
}

.slides {
    display: flex;
    width: 300%;
    height: 100%;
    transition: transform 0.5s ease;
    animation: slide 9s infinite;
}

.slide {
    width: 33.333%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Navigation */

.slider-nav {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}
.slider-nav button {
    width: 12px;
    height: 12px;
    padding: 0;

    border: none;
    border-radius: 50%;

    background: #aaa;
    cursor: pointer;
}

.slider-nav button.active {
    transform: scale(1.3);
}
</style>

