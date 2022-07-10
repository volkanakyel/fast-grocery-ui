<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__header">
        <h1 class="contact__title">Contact Us</h1>
      </div>
      <div class="contact__section"></div>
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
