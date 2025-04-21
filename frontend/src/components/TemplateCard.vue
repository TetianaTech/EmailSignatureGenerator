<template>
  <button class="template-card" @click="() => selectTemplate(template)">
    <TemplateCardLayout :template="template" />
  </button> 
</template>

<script lang="ts" setup>
import type { Template } from '@signature-generator/shared';
import TemplateCardLayout from '@/components/TemplateCardLayout.vue';
defineProps<{
  template: Template;
  selectTemplate: (template: Template) => void;
}>();

</script>


<style lang="scss" scoped>
.template-card {
  cursor: pointer;
  transition: all map.get($transitions, 'slow') ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: map.get($box-shadows, 'md');
  }
}
</style>