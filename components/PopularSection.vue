<template>
  <div class="popular-section">
    <div class="popular-section__head">
      <h2>Popular items</h2>
      <p>View all</p>
    </div>
    <div class="popular-section__list">
      <div
        class="popular-section__item"
        v-for="item in categoryList"
        :key="item.id"
      >
        <item-card :cardContent="item"></item-card>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
export default {
  components: { ItemCard },
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.popular-section {
  margin: 2rem auto;
  max-width: 1200px;
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffdf6;
    padding: 0 1rem 0 1rem;
  }
  &__head {
    font-size: 1.8rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 6rem;
  }
}
</style>
