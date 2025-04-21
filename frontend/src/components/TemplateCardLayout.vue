<template>
  <div class="template-card-layout">
    <img :src="previewUrl" class="template-card-layout__image">
    <div class="template-card-layout__content">
      <p class="template-card-layout__title">{{ template.name }}</p>
      <p class="template-card__description">{{ template.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Template } from '@signature-generator/shared';
import { computed } from 'vue';

const props = defineProps<{
  template: Template;
}>();

const apiBaseUrl = computed<string>(() => import.meta.env.VITE_API_BASE_URL);
const previewUrl = computed<string>(() => `${apiBaseUrl.value}/${props.template.previewUrl}`);
</script>


<style lang="scss" scoped>
.template-card-layout {
  border: 1px solid map.get($colors, 'border');
  border-radius: map.get($radius, 'md');
  overflow: hidden;
  background-color: map.get($colors, 'container-bg');

  img {
    width: 100%;
    height: 10rem;
    object-fit: contain;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: map.get($spacing, 'md');
  }

  &__title {
    font-size: map.get($font-sizes, 'accent');
    font-weight: map.get($font-weights, 'semibold');
  }

}
</style>