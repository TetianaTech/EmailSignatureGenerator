<template>
  <div class="template-gallery">
    <h1 class="template-gallery__title">Choose Your Template</h1>
    <div class="template-gallery__grid">
      <TemplateCard 
        v-for="template in templates" 
        :key="template.fileName"
        :template="template" 
        :select-template="selectTemplate"
      />
    </div>
  </div>
  <TemplateGenerator 
    :selected-template="selectedTemplate" 
    :reset-selected-template="resetSelectedTemplate"
  />
</template>

<script lang="ts" setup>
import api from '../api';
import { ref, onMounted } from 'vue'
import type { Template } from '@signature-generator/shared';
import TemplateCard from '@/components/TemplateCard.vue';
import TemplateGenerator from '@/components/TemplateGenerator.vue';

const templates = ref<Template[]>([]);
const isLoading = ref(false);
const errorMessage = ref<string | null>('null');
const selectedTemplate = ref<Template | null>(null);

const selectTemplate = (template: Template) => {
  selectedTemplate.value = template;
}

const resetSelectedTemplate = () => {
  selectedTemplate.value = null;
}

const fetchTemplates = async () => {
  isLoading.value = true
  errorMessage.value = null

  try {
    templates.value = await api.templates.getTemplates()
  } catch (error) {
    errorMessage.value = 'Failed to load templates. Please try again.'
    console.error('Error fetching templates:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchTemplates()
})
</script>


<style lang="scss" scoped>
.template-gallery {
  display: flex;
  flex-direction: column;
  gap: map.get($spacing, 'md');

  &__title {
    font-size: map.get($font-sizes, 'title');
    font-weight: map.get($font-weights, 'bold');
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: map.get($spacing, 'md');

    @include respond-down(tablet) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    @include respond-down(mobile) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
}
</style>