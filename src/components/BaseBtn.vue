<template>
  <button
    class="b-btn"
    :class="bntClasses"
    @click="$emit('click')"
  >
    <img
      v-if="isIconBtn"
      :src="require('@/assets/img/' + icon)"
      class="b-btn__icon"
      alt="icon"
    >
    <span v-else class="b-btn__text">
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    isIconBtn() {
      return !!this.icon
    },
    bntClasses() {
      return this.isIconBtn ? 'icon-btn' : 'text-btn'
    }
  }
}
</script>

<style lang="scss" scoped>
.b-btn {
  cursor: pointer;

  &.icon-btn {
    width: 42px;
    height: 42px;
    background: #282828;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #505050;
    }

    img {
      max-width: 22px;
    }
  }

  &.text-btn {
    font-size: 15px;
    line-height: 23px;
    color: #639EFF;

    &:hover {
      color: #c4dbff;
    }
  }
}
</style>
