<template>
  <div class="control-panel">
    <BaseBtn class="control-panel__item" icon="1.svg" @click="$emit('go-to', 'prev')" />
    <BaseBtn class="control-panel__item" icon="2.svg" @click="$emit('go-to', 'next')" />
    <BaseBtn class="control-panel__item" icon="3.svg" @click="$emit('make-title')" />
    <BaseBtn class="control-panel__item" icon="4.svg" @click="$emit('make-paragraph')" />
    <BaseBtn class="control-panel__item" icon="5.svg" @click="$emit('paste-img')" />
    <BaseBtn class="control-panel__item" text="Скопировать HTML" @click="$emit('copy-html')" />
  </div>
</template>

<script>
import BaseBtn from './BaseBtn'

export default {
  name: 'ControlPanel',
  components: {
    BaseBtn
  }
}
</script>

<style lang="scss" scoped>
.control-panel {
  display: flex;
  align-items: center;
  color: #639EFF;

  &__item {
    cursor: pointer;
    margin-right: 12px;
    user-select: none;    
  }
}
</style>