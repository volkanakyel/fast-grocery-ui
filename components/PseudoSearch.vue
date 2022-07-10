<template>
  <div class="pseudo-search">
    <input type="text" placeholder="Search..." autofocus required />
    <button type="submit">
      <img src="~/assets/img/svg/search.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pseudo-search {
  display: inline;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
  transition: background-color 0.5 ease-in-out;

  input {
    border: 0;
    background-color: transparent;
    max-width: 200px;

    &:focus {
      // Unsure how to fix this...
      outline: none;
    }
  }

  button,
  i {
    border: none;
    background: none;
    cursor: pointer;
  }

  select {
    border: none;
  }
}
</style>
