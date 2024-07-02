<script setup lang="ts">
interface IMenu {
  title: string;
  url: string;
}
const menus = ref<IMenu[]>([
  { title: "Works", url: "/" },
  { title: "About", url: "/" },
]);
</script>
<template>
  <header>
    <NuxtLink to="/">
      <NuxtImg src="/images/logo.png" width="84" height="25" alt="qtim logo" />
    </NuxtLink>
    <div class="flex items-center">
      <div class="menus">
        <div v-for="menu in menus" :key="menu.title">
          <NuxtLink :to="menu.url"
            ><div>{{ menu.title }}</div></NuxtLink
          >
        </div>
      </div>
      <div class="flag-container ml-[91px]">
        <NuxtImg
          src="/images/flag-uk.png"
          width="24"
          height="24"
          alt="flag-uk"
        />
      </div>
      <div class="ml-4">
        <ButtonBase label="Let's work" @onClickEvent="() => {}" />
      </div>
    </div>
  </header>
</template>

<style>
header {
  @apply container mx-auto max-w-[1440px] flex items-center justify-between h-[121px] px-10;
}
.menus {
  @apply flex gap-[58px] text-xl;
}
.flag-container {
  @apply h-[52px] w-[52px] rounded-full border-[2px] border-dark-300 flex items-center justify-center border-opacity-10 cursor-pointer;
}
</style>
