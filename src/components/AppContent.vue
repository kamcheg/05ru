<template>
  <div
    class="content"
    contenteditable
    @input="$emit('upd-content', $event.target.innerHTML)"
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt fuga maxime quaerat deleniti sapiente accusantium voluptatum praesentium deserunt minima ullam possimus quo dolores
  </div>
</template>

<script>
export default {
  name: 'AppContent',
}
</script>

<style lang="scss">
.content {
  font-size: 15px;
  margin-top: 20px;

  img {
    display: block;
    margin: 20px 0px;
    max-width: 100%;
  }

  span[data-title] {
    display: block;
    font-size: 31px;
    margin: 10px 0px;
  }
}
</style>