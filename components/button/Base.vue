<script setup lang="ts">
defineProps({
  label: String,
});
const emit = defineEmits(["onClickEvent"]);
</script>

<template>
  <div class="btn-base" @click="() => emit('onClickEvent')">
    <span>{{ label }}</span>
  </div>
</template>

<style scoped>
.btn-base {
  @apply text-white text-xl h-[52px] px-8 flex items-center bg-dark-500 cursor-pointer rounded-[999px] hover:bg-dark-300 transition-all;
}
</style>
