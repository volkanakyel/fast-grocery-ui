<template>
  <div class="card-carousel-wrapper">
    <div
      class="card-carousel--nav__left"
      :disabled="atHeadOfList"
      @click="moveCarousel(-1)"
    ></div>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div
          class="card-carousel-cards"
          :style="{
            transform: 'translateX' + '(' + currentOffset + 'px' + ')'
          }"
        >
          <div v-for="(item, index) in categoryList" :key="index">
            <CategoryCard
              :cardContent="item"
              class="card-carousel--card"
              ref="cardItem"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="card-carousel--nav__right"
      @click="moveCarousel(1)"
      :disabled="atEndOfList"
    ></div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue';
export default {
  components: { CategoryCard },
  props: {
    categoryList: {
      type: Array,
      default: () => []
    },
    cardNumber: {
      type: Number,
      default: () => 0
    }
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 180 // size of the card
    };
  },
  computed: {
    // atEndOfList() {
    //   return (
    //     this.currentOffset <=
    //     this.paginationFactor *
    //       -1 *
    //       (this.categoryList.length - this.windowSize)
    //   );
    // },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
    atEndOfList() {
      return this.currentOffset === -720;
    }
  },
  methods: {
    moveCarousel(direction) {
      console.log(this.$refs.cardItem);
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$vue-navy: #2c3e50;
$vue-navy-light: #3a5169;
$vue-teal: #42b883;
$vue-teal-light: #42b983;
$gray: #666a73;
$light-gray: #f8f8f8;

body {
  background: #f8f8f8;
  color: #2c3e50;
  font-family: 'Source Sans Pro', sans-serif;
}

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  max-width: 900px;
  overflow: hidden;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
  &--overflow-container {
    overflow: auto;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid #42b883;
    border-right: 2px solid #42b883;
    cursor: pointer;
    margin: 0 20px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

.card-carousel--card {
  margin-right: 30px;

  &--footer {
    border-top: 0;
    padding: 7px 15px;
  }
}
h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}
</style>
