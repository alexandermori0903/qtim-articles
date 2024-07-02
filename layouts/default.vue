<template>
  <AppHeader />
  <main>
    <slot />
  </main>
  <AppFooter />
</template>
<style>
main {
  @apply container mx-auto max-w-[1360px] px-[72px];
}
</style>
