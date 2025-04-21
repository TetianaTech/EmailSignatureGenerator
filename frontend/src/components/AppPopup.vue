<template>
  <div v-if="isOpen" class="app-popup">
    <div class="app-popup__overlay" @click="$emit('close')"></div>
    <div class="app-popup__content">
      <h2 class="app-popup__title">{{ title }}</h2>
      <div class="app-popup__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  isOpen: boolean;
  title?: string;
  showCloseButton?: boolean;
}>();

defineEmits(['close']);
</script>

<style lang="scss" scoped>
.app-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: map.get($colors, 'overlay-bg');
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: map.get($spacing, 'md');
    position: relative;
    background-color: map.get($colors, 'container-bg');
    padding: map.get($spacing, 'md');
    border-radius: map.get($radius, 'lg');
    max-width: 50rem;
    width: 90%;
    box-shadow: map.get($box-shadows, 'sm');
    z-index: 101;
  }

  &__title {
    font-size: map.get($font-sizes, 'accent');
    font-weight: map.get($font-weights, 'bold');
  }
}
</style>