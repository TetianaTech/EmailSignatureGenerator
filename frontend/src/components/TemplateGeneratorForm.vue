<template>
  <form class="template-generator-form" @submit.prevent="submitForm">
    <div 
      v-for="field in formFields" 
      :key="field.id" 
      class="template-generator-form__field"
    >
      <label :for="field.id" class="template-generator-form__label">{{ field.label }}</label>
      <input
        :id="field.id"
        v-model="formData[field.id]"
        :type="field.type"
        class="template-generator-form__input"
        :placeholder="field.placeholder"
        :required="field.required"
      />
    </div>
    <button type="submit" class="btn btn-primary">Generate</button>
  </form>
</template>

<script setup lang="ts">
import type { TemplateData } from '@signature-generator/shared';
import { reactive } from 'vue';
import type { FormField } from '@/types/form';

const props = defineProps<{
  generateSignature: (data: TemplateData) => void;
}>();

const initialFormData: TemplateData = {
  fullName: '',
  phone: '',
  email: '',
  logoUrl: ''
};

const formData = reactive<TemplateData & Record<string, string>>({...initialFormData});

const formFields: FormField[] = [
  {
    id: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true
  },
  {
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'Enter your phone number',
    required: true
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email address',
    required: true
  },
  {
    id: 'logoUrl',
    label: 'Logo URL',
    type: 'url',
    placeholder: 'Enter your logo URL',
    required: false,
  }
];

const submitForm = () => {
  props.generateSignature(formData);
}
</script>

<style lang="scss" scoped>
.template-generator-form {
  display: flex;
  flex-direction: column;
  gap: map.get($spacing, 'md');
  
  &__field {
    display: grid;
    grid-template-columns: 8rem 1fr;
  }
}
</style>