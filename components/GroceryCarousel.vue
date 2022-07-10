<template>
  <div class="carousel">
    <div class="carousel__banner">
      <img
        class="carousel__image"
        :src="carouselImages[currentSlide].link"
        alt=""
        width="1100"
        height="400"
      />
    </div>
    <div class="carousel__nav">
      <div
        class="carousel__nav--item"
        v-for="slide in carouselImages"
        :key="slide.id"
        @click="selectSlide(slide.id)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideInterval: 2000,
      carouselImages: [
        {
          link: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1723&q=80',
          id: 0
        },
        {
          link: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
          id: 1
        },
        {
          link: 'https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1396&q=80',
          id: 2
        },
        {
          link: 'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyb2Nlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          id: 3
        }
      ],
      currentSlide: 0
    };
  },
  methods: {
    selectSlide(selectedSlide) {
      this.currentSlide = selectedSlide;
      this.slideInterval = 0;
    },
    sliderInterval() {
      setInterval(() => {
        this.currentSlide = this.currentSlide + 1;

        if (this.currentSlide > 3) {
          this.currentSlide = 0;
        }
      }, this.slideInterval);
    }
  },
  beforeDestroy() {
    clearInterval(this.sliderInterval);
  },
  mounted() {
    this.sliderInterval();
  }
  // watch: {
  //   currentSlide(slide) {
  //     if (this.currentSlide + 1 >= this.carouselImages.length) {
  //       this.currentSlide = 0;
  //     } else {
  //       this.currentSlide++;
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.carousel {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 7rem;
  position: relative;
  &__banner {
    margin: 0 auto;
    border-radius: 1rem;
    cursor: move;
  }
  &__image {
    border-radius: 1rem;
  }
  &__nav {
    display: flex;
    gap: 10px;
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    &--item {
      width: 0.6rem;
      height: 0.6rem;
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid green;
      background-color: #ffff;
    }
    &--item-active {
      background-color: green;
    }
  }
}
</style>
