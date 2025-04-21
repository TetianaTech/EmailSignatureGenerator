<template>
  <AppPopup 
    :is-open="!!selectedTemplate" 
    title="Generate Signature"
    @close="closePopup"
  >
    <div v-if="selectedTemplate" class="template-generator">
      <div class="template-generator__form">
        <TemplateCardLayout :template="selectedTemplate" />
        <TemplateGeneratorForm :generate-signature="generateSignature" />
      </div>
      <div v-if="generatedSignatures" class="template-generator__preview">
       <div class="template-generator__preview-item">
        <p>Generated Signature:</p>
          <div v-html="generatedSignatures.html" />
        </div>
        <div class="template-generator__preview-item">
          <p>Plain Text Signature:</p>
          <div v-html="generatedSignatures.plainText.replace(/\n/g, '<br>')" />
        </div>
      </div>
    </div>
  </AppPopup>
</template>

<script setup lang="ts"> 
import { ref } from 'vue';
import type { Template } from '@signature-generator/shared';
import AppPopup from '@/components/AppPopup.vue';
import TemplateCardLayout from '@/components/TemplateCardLayout.vue';
import TemplateGeneratorForm from '@/components/TemplateGeneratorForm.vue';
import type { GenerateSignatureResponse, TemplateData } from '@signature-generator/shared';
import api from '@/api';

const props = defineProps<{
  selectedTemplate: Template | null;
  resetSelectedTemplate: () => void;
}>();

const generatedSignatures = ref<GenerateSignatureResponse | null>(null);

const generateSignature = async (data: TemplateData) => {
  if (props.selectedTemplate) {
    const fileName = props.selectedTemplate.fileName;
    const signatures = await api.signatures.generateSignature(fileName, data);
    generatedSignatures.value = signatures;
  }
};

const closePopup = () => {
  props.resetSelectedTemplate();
  generatedSignatures.value = null;
}
</script>

<style lang="scss" scoped>
.template-generator {
  display: flex;
  flex-direction: column;
  gap: map.get($spacing, 'md');

  &__form {
    display: flex;
    gap: map.get($spacing, 'md');
  }

  &__preview {
    display: flex;
    gap: map.get($spacing, 'lg');
  }

  &__preview-item {
    display: flex;
    flex-direction: column;
    gap: map.get($spacing, 'md');
  }
}
</style>