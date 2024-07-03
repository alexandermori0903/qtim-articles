<script setup lang="ts">
interface IMenu {
  title: string;
  url: string;
}
const menus = ref<IMenu[]>([
  { title: "Facebook", url: "/" },
  { title: "Instagram", url: "/" },
  { title: "Telegram", url: "/" },
  { title: "Behance", url: "/" },
  { title: "Linkedn", url: "/" },
  { title: "Privacy Policy", url: "/" },
]);
</script>

<template>
  <footer>
    <div class="footer-main">
      <p>Is there a project?</p>
      <div class="grid grid-cols-1 md:grid-cols-2 mt-14">
        <p class="text-[112px] leading-[112px]">Let's work together</p>
        <div class="flex items-center flex-col gap-9">
          <div>
            <p class="mb-3">For all questions</p>
            <p>+7 (920) 278—00—68</p>
            <p>qtim@agency.com</p>
          </div>
          <div>
            <p class="mb-3">Office in Russia</p>
            <p>139 Ruben Station Lake</p>
            <p>Drew, NM 52678</p>
            <NuxtLink to="/" class="mt-2 block"
              ><NuxtImg
                src="/images/icon-tg.png"
                width="32"
                height="32"
                alt="icon-tg"
              />
            </NuxtLink>
          </div>
          <div>
            <p class="mb-3">Office in Russia</p>
            <p>139 Ruben Station Lake</p>
            <p>Drew, NM 52678</p>
            <NuxtLink to="/" class="mt-2 block"
              ><NuxtImg
                src="/images/icon-tg.png"
                width="32"
                height="32"
                alt="icon-tg"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="menu-container">
        <div class="flex gap-8">
          <div v-for="menu in menus.slice(0, 3)">
            <NuxtLink to="menu.url" class="menu">{{ menu.title }}</NuxtLink>
          </div>
        </div>
        <div class="flex gap-8">
          <div v-for="menu in menus.slice(3, 6)">
            <NuxtLink to="menu.url" class="menu">{{ menu.title }}</NuxtLink>
          </div>
        </div>
      </div>
      <NuxtLink to="/">
        <div class="btn-go"><span>Go</span></div>
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply bg-main-300 overflow-hidden;
}
.footer-main {
  @apply container mx-auto max-w-[1360px] px-[72px] pt-[140px] pb-[322px] relative;
}
.menu-container {
  @apply absolute bottom-[30px] flex justify-between;
  width: calc(100% - 144px);
}
.menu {
  @apply border-b-[1px] border-b-dark-500 hover:border-b-dark-300 transition-all pb-1;
}
.btn-go {
  @apply w-[358px] h-[358px] bg-dark-500 rounded-full text-white absolute cursor-pointer;
  left: 50%;
  transform: translate(-179px, 140px);
}
.btn-go span {
  @apply absolute text-[32px];
  left: 50%;
  bottom: 200px;
  transform: translateX(-12px);
}
</style>
