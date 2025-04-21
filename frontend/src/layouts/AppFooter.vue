<template>
  <footer class="footer">
    <p>© {{ currentYear }} Email Signature Generator. All rights reserved.</p>
  </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.footer {
    background: map.get($colors, 'primary');
    margin-top: auto;
    color: map.get($colors, 'text-primary-reverse');
    padding: map.get($spacing, 'md');
    box-shadow: map.get($box-shadows, 'md');
  }
</style>