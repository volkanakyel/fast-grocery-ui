<template>
  <nav class="header">
    <div class="navbar">
      <div class="navbar__logo">
        <img class="logo" src="~/assets/img/app-logo.png" alt="" />
      </div>
      <div class="navbar__items">
        <ul class="navbar__items__list">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
      <div class="navbar__actions-list">
        <img class="navbar__icon" src="~/assets/img/svg/search.svg" alt="" />
        <NuxtLink to="/cart"
          ><img class="navbar__icon" src="~/assets/img/svg/cart.svg" alt=""
        /></NuxtLink>
        <NuxtLink to="/profile"
          ><img class="navbar__icon" src="~/assets/img/svg/profile.svg" alt=""
        /></NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
}
.logo {
  width: 100%;
}
.navbar {
  max-width: $container;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__logo {
    width: 70px;
    object-fit: cover;
    object-position: bottom;
  }
  &__items__list {
    display: flex;
    list-style-type: none;
    gap: 3rem;
    a {
      text-decoration: none;
    }
  }
  &__actions-list {
    display: flex;
    align-items: baseline;
    gap: 2rem;
  }
  &__icon:hover {
    fill: #00b108;
  }
}
</style>
