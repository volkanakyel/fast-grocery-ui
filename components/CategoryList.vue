<template>
  <div class="categories">
    <h1 class="categories__title">Top Categories</h1>
    <div class="separator"></div>
    <div class="categories__list">
      <div class="categories__card">
        <div class="categories__card__header">
          <img src="~/assets/img/svg/vegetables.svg" alt="" />
        </div>
        <div class="categories__card__title">Vegetables</div>
        <div class="categories__card__footer">240 items</div>
      </div>
      <div class="categories__card">
        <div class="categories__card__header">
          <img src="~/assets/img/svg/meats.svg" alt="" />
        </div>
        <div class="categories__card__title">Raw Meats</div>
        <div class="categories__card__footer">240 items</div>
      </div>
      <div class="categories__card">
        <div class="categories__card__header">
          <img src="~/assets/img/svg/fruits.svg" alt="" />
        </div>
        <div class="categories__card__title">Fruits</div>
        <div class="categories__card__footer">240 items</div>
      </div>
      <div class="categories__card">
        <div class="categories__card__header">
          <img src="~/assets/img/svg/fish.svg" alt="" />
        </div>
        <div class="categories__card__title">River Fish</div>
        <div class="categories__card__footer">240 items</div>
      </div>
      <div class="categories__card">
        <div class="categories__card__header">
          <img src="~/assets/img/svg/drinks.svg" alt="" />
        </div>
        <div class="categories__card__title">Water and Drinks</div>
        <div class="categories__card__footer">240 items</div>
      </div>
      <div class="categories__card">
        <div class="categories__card__header">
          <img src="~/assets/img/svg/snacks.svg" alt="" />
        </div>
        <div class="categories__card__title">Snacks</div>
        <div class="categories__card__footer">240 items</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.categories {
  max-width: $container;
  margin: 0 auto;
  &__title {
    text-align: center;
    font-size: 4.8rem;
    font-weight: 500;
  }

  &__list {
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__card {
    width: 170px;
    background-color: #f3fff2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    padding: 2rem;
    border-radius: 2rem;
    // flex-basis: 16.6666%;
  }
}
</style>
