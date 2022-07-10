<template>
  <div class="banner">
    <div class="banner__description">
      <p class="banner__title">Summer Sale</p>
      <h2 class="banner__sale">30% OFF</h2>
      <p class="banner__content">
        Free on all your order. Free Shipping and 30 days money-back guarantee.
      </p>
      <button class="base-button">
        Shop New <img src="~/assets/img/svg/button-arrow.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 40rem;
  background-image: url(https://images.unsplash.com/photo-1457347876270-97799484c564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80);
  background-position: center center;
  background-size: cover;
  position: relative;
  &__description {
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 30px;
    flex-direction: column;
  }
}
</style>
