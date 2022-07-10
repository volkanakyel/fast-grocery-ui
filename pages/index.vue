<template>
  <div class="grocery">
    <div class="hero">
      <div class="hero__container">
        <div class="hero__content">
          <h2 class="hero__info">Sale Up <b>20% OFF</b></h2>
          <h1 class="hero__title">Buy fresh Groceries & Organic food.</h1>
          <p class="hero__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nullam
            vulputate consectetur eget. Morbi donec
          </p>
          <button class="base-button">
            Shop New <img src="~/assets/img/svg/button-arrow.svg" alt="" />
          </button>
        </div>
        <div class="hero__image-box">
          <img
            class="hero__image"
            src="~/assets/img/svg/fruits-bag.svg"
            alt=""
          />
        </div>
      </div>
      <div class="hero__services">
        <div class="hero__service-item">
          <img src="~/assets/img/svg/shipping.svg" alt="" />
          <div class="hero__service-content">
            <p><b>Support 24/7</b></p>
            <p>Support 24 hours a day</p>
          </div>
        </div>
        <div class="hero__service-item">
          <img src="~/assets/img/svg/support.svg" alt="" />
          <div class="hero__service-content">
            <p><b>Free Shipping</b></p>
            <p>Free Shipping on All orders</p>
          </div>
        </div>
        <div class="hero__service-item">
          <img src="~/assets/img/svg/secure.svg" alt="" />
          <div class="hero__service-content">
            <p><b> 100% Secure Payment</b></p>
            <p>Back guarantee under 5 days</p>
          </div>
        </div>
        <div class="hero__service-item">
          <img src="~/assets/img/svg/return.svg" alt="" />
          <div class="hero__service-content">
            <p><b>Money Return</b></p>
            <p>On every order over $150</p>
          </div>
        </div>
      </div>
    </div>
    <div class="categories-section">
      <categoryList></categoryList>
    </div>
    <div class="product-section">
      <product-section></product-section>
    </div>
    <div class="banner-section">
      <discount-banner></discount-banner>
    </div>
    <div class="mobile-section">
      <div class="mobile-section__image">
        <img class="mobile-first" src="~/assets/img/mobile.png" alt="" />
      </div>
      <div class="mobile-section__details">
        <h2>Simple Way to order Your food Faster</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nulla
          enim magna eget scelerisque arcu, a, lacinia blandit. Auctor eu
          fermentum.
        </p>
        <div class="mobile-section__devices">
          <img src="~/assets/img/svg/android.svg" alt="" />
          <img src="~/assets/img/svg/ios.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="testimonials-section">
      <testimonial-section></testimonial-section>
    </div>
  </div>
</template>

<script>
import ProductSection from '~/components/ProductSection.vue';
import TestimonialSection from '~/components/TestimonialSection.vue';
import category from '~/data/category.json';
export default {
  components: {
    ProductSection,
    TestimonialSection
  },
  data() {
    return {
      category: category
    };
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background-color: $green-light;
  padding: 6rem 2rem 9rem 2rem;
  width: 100%;
  position: relative;
  &__services {
    font-size: 1.4rem;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: $container;
    margin: 0 auto;
    padding: 2rem 4rem;
    background-color: #ffff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 1rem;
    box-shadow: 1px 3px 16px -2px rgba(0, 0, 0, 0.2);
  }
  &__service-item {
    display: flex;
    gap: 2rem;
    flex: 1 100px;
  }
  &__service-content {
    font-size: 1.2rem;
    b {
      font-size: 1.4rem;
    }
  }
  &__container {
    max-width: $container;
    margin: 0 auto;
    font-size: 1.8rem;
    position: relative;
  }
  &__image-box {
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(0%, -50%);
  }
  &__image {
    width: 100%;
    height: 420px;
    object-fit: cover;
    object-position: bottom;
  }
  &__content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__info {
    font-size: 2.4;
    font-weight: 400;
    b {
      font-weight: 400;
      color: #f35b05;
    }
  }
  &__title {
    font-size: 4.4rem;
    line-height: 6rem;
    letter-spacing: 1px;
  }
  &__description {
    color: $light-secondary;
    margin: 2rem 0 4rem 0;
  }
}

.categories-section {
  margin-top: 12rem;
}

.product-section {
  margin-top: 8rem;
}

.banner-section {
  margin-top: 5rem;
}

.mobile-section {
  margin: 12rem auto;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &__image {
    position: relative;
  }
  &__details {
    max-width: 498px;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    h2 {
      font-size: 4.8rem;
      font-weight: 500;
      line-height: 1.4;
    }
    p {
      font-size: 1.8rem;
      color: #666666;
    }
  }
  &__devices {
    img {
      margin-right: 2rem;
    }
  }
}
.testimonials-section {
  margin-top: 5rem;
}

.grocery__category-section {
  margin-top: 100rem;
}
</style>
