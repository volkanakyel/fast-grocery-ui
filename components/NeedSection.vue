<template>
  <div class="need-section">
    <div class="need-section__head">
      <h2>Daily Needs</h2>
      <p>View all</p>
    </div>
    <div class="need-section__list">
      <div
        class="need-section__item"
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
.need-section {
  margin: 2rem auto;
  max-width: 1200px;
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffdf6;
    padding: 0 1rem 0 1rem;
    font-size: 1.8rem;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 6rem;
  }
}
</style>
