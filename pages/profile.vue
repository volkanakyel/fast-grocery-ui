<template>
  <div class="profile">
    <div class="profile__container">
      <div class="profile__header">
        <h1 class="profile__title">profile Us</h1>
      </div>
      <div class="profile__section"></div>
      <contact-form></contact-form>
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue';
export default { components: { ContactForm } };
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 3rem;
  &__container {
    width: $container;
    margin: 0 auto;
  }
  &__header {
  }
  &__title {
    text-align: center;
    font-size: 4.8rem;
    font-weight: 500;
  }
  &__section {
    margin-top: 5rem;
  }
}
</style>
