<template>
  <header class="header">
    <img class="header__logo" src="@/assets/logo.svg" alt="Logo" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: map.get($colors, 'primary');
  box-shadow: map.get($box-shadows, 'md');
  position: sticky;
  top: 0;
  z-index: 100;
  color: map.get($colors, 'text-primary-reverse');
  padding: 0 map.get($spacing, 'md');
  display: flex;
  align-items: center;
  gap: map.get($spacing, 'md');

  &__logo {
    width: 7rem;
    height: 7rem;
  }
}
</style>
