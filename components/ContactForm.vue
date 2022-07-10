<template>
  <form class="contact-form">
    <div class="contact-form__container">
      <div class="contact-form__item">
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
      </div>
      <div class="contact-form__item">
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
      </div>
      <div class="contact-form__item">
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
      </div>
      <div class="contact-form__item">
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
      </div>
      <div class="contact-form__item">
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-form {
  min-height: 50rem;
  margin: 0 auto;
  box-shadow: 1px 2px 10px -2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: $container/2;
  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
