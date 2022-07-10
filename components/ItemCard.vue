<template>
  <div class="card">
    <img :src="imageSrc" height="200" alt="" />
    <div class="card__content">
      <div class="card__header">
        <h4 class="card__title">Ham Sandwich</h4>
        <span class="card__price">$10.50</span>
      </div>
      <p class="card__text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardContent: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    imageSrc() {
      return require(`~/assets/img/category/${this.cardContent.name}.png`);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 280px;
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 10px 15px 50px 0 rgba(0, 0, 0, 0.09);
}

.card__image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  object-position: center;
}

.card__content {
  padding: 2em 1.4em;
  background-color: #fff;
}

.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
}

.card__price {
  font-size: 2.5rem;
  color: green;
}
.card__text {
  font-size: 1.4rem;
}
</style>
