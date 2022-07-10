<template>
  <div class="low-card">
    <img
      class="low-card__image-cover"
      src="http://www.freefoodphotos.com/imagelibrary/herbs/slides/chilis.jpg"
    />
    <div class="low-card__content">
      <div class="low-card__title">{{ cardContent.name }}</div>
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
  }
};
</script>

<style lang="scss">
.low-card {
  background-color: #fff;
  overflow: hidden;
  width: 15rem;
  max-height: 20rem;
  // box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.48);
  padding: 0;
  text-align: center;
  border-radius: 1rem;

  &__image-cover {
    max-width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 80%);
  }
  &__content {
    position: relative;
    z-index: 1;
  }
  &__buy {
    display: block;
    top: -80px;
    right: 20px;
    z-index: 2;
    width: 70px;
    height: 70px;
    position: absolute;
  }
  &__icon-circle {
    width: 60px;
    height: 60px;
    background-color: #06d6a0;
    display: block;
    border-radius: 50%;
    position: absolute;
    font-size: 36px;
    color: #fff;
    transition: all 0.3s ease;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  &__icon {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    height: 3.5rem;
    width: 3.5rem;
  }

  &__whichlist {
    display: block;
    top: -45px;
    left: 20px;
    z-index: 2;
    width: 70px;
    height: 70px;
    position: absolute;
  }

  &__star {
    margin: 0.4rem;
    height: 2rem;
    width: 2rem;
  }

  &__review {
    list-style: none;
    padding: 0;
    margin: 1em 0;
    display: flex;
    justify-content: center;
  }
  &__description {
    font-family: 'Satisfy', cursive;
    font-size: 1.2em;
  }
  &__title {
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    font-family: 'Acme', sans-serif;
  }
  &__price {
    font-size: 2em;
    font-weight: 900;
    display: block;
    width: 100px;
    margin: 20px auto 0;
    position: relative;
    font-family: 'Satisfy', cursive;

    &:after,
    &:before {
      content: '';
      height: 1px;
      width: 50px;
      display: block;
      position: absolute;
      background-color: #ddd;
      top: 18px;
    }

    &:before {
      left: -50px;
    }

    &:after {
      right: -50px;
    }
  }
}
</style>
