<template>
  <footer class="footer">
    <section class="footer__main">
      <div class="footer__follow">
        <h2>Follow Us:</h2>
        <div class="footer__icons">
          <img src="~/assets/img/svg/twitter.svg" alt="" />
          <img src="~/assets/img/svg/facebook.svg" alt="" />
          <img src="~/assets/img/svg/twitter.svg" alt="" />
        </div>
      </div>
      <div class="footer__categorie">
        <ul class="footer__item">
          <li><a href="#">Intro</a></li>
          <li><a href="#">Feature</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div>
        <ul class="footer__item">
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Our Partner</a></li>
        </ul>
      </div>
      <div>
        <ul class="footer__item">
          <li><a href="#">Services</a></li>
          <li><a href="#">Faq</a></li>
        </ul>
      </div>
      <div>
        <ul class="footer__item">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Sales</a></li>
        </ul>
      </div>
    </section>
    <div class="footer__contact">
      <div class="footer__newsletter-description">
        <h2>Get in touch</h2>
        <p>
          Nemo enim ipsam boluptatem quia voluptas sit aspernatur aut aut fugit,
          sed quia consequuntur magni dolires eos qui ratione.
        </p>
      </div>
      <div class="footer__newsletter-input">
        <input type="text" placeholder="Enter your adress email" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 20rem;
  background-color: #405449;
  color: #ffff;
  position: relative;
  &__contact {
    width: $container;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f5fcf5;
    padding: 5rem;
    color: #333333;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__newsletter-description {
    max-width: 50%;
    p {
      color: #666666;
    }
  }
  &__main {
    max-width: $container;
    margin: 0 auto;
    padding-top: 12rem;
    padding-bottom: 12rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__categorie {
    display: flex;
    flex-direction: column;
  }
  &__item {
    list-style-type: none;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  &__follow {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }
}
</style>
