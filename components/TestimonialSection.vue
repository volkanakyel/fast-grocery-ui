<template>
  <div class="testimonial">
    <div class="testimonial__header">
      <h2 class="testimonial__title">Testimonials</h2>
      <p class="testimonial__subtitle">
        See what our customers say for Delicious...
      </p>
    </div>
    <div class="testimonial__list">
      <div class="testimonial-card">
        <div class="testimonial-card__header">
          <div class="testimonial-card__image">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div class="testimonial-card__person">
            <div class="testimonial-card__name">Esther Howard</div>
            <div class="testimonial-card__role">La pasteria</div>
          </div>
        </div>
        <div class="testimonial-card__review">
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
        </div>
        <div class="testimonial-card__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
            venenatis in accumsan diam vel pretium, amet, consectetur. Elit
            commodo, dignissim curabitur id.
          </p>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-card__header">
          <div class="testimonial-card__image">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div class="testimonial-card__person">
            <div class="testimonial-card__name">Esther Howard</div>
            <div class="testimonial-card__role">La pasteria</div>
          </div>
        </div>
        <div class="testimonial-card__review">
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
        </div>
        <div class="testimonial-card__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
            venenatis in accumsan diam vel pretium, amet, consectetur. Elit
            commodo, dignissim curabitur id.
          </p>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-card__header">
          <div class="testimonial-card__image">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div class="testimonial-card__person">
            <div class="testimonial-card__name">Esther Howard</div>
            <div class="testimonial-card__role">La pasteria</div>
          </div>
        </div>
        <div class="testimonial-card__review">
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
          <img src="~/assets/img/svg/dark-star.svg" alt="" />
        </div>
        <div class="testimonial-card__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
            venenatis in accumsan diam vel pretium, amet, consectetur. Elit
            commodo, dignissim curabitur id.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.testimonial-card {
  display: flex;
  flex-direction: column;
  flex: 1 370px;
  max-width: 370px;
  border-radius: 10px;
  background-color: #f5fcf5;
  padding: 2rem 4rem 2rem 2rem;
  &__header {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  &__image {
    width: 70px;
    height: 70px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &__review {
    margin-top: 3rem;
  }
  &__name {
    font-size: 2.4rem;
  }
  &__role {
    color: #666666;
  }
  &__description {
    color: #6e5d51;
  }
  &__description {
    margin-top: 1rem;
    line-height: 2.6rem;
    font-size: 1.5rem;
    color: #666666;
  }
}

.testimonial {
  max-width: $container;
  margin: 0 auto;
  &__header {
    text-align: center;
  }
  &__title {
    font-size: 4.8rem;
    font-weight: 500;
  }
  &__subtitle {
    color: #666666;
    font-size: 1.6rem;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
  }
}
</style>
