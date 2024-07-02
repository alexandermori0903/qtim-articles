<script setup lang="ts">
const props = defineProps({
  currentPage: Number,
  pageCount: Number,
});
const emit = defineEmits(["onClickPage", "onClickNext"]);
</script>

<template>
  <div class="flex gap-2">
    <div v-for="(_, i) in Array.from({ length: pageCount }).fill(0)" :key="i">
      <div
        class="paginator-item"
        :class="currentPage === i + 1 ? 'active' : ''"
        @click="() => emit('onClickPage', i + 1)"
      >
        <span>{{ i + 1 }}</span>
      </div>
    </div>
    <div
      class="paginator-item next"
      :class="currentPage === pageCount ? 'disable' : ''"
      @click="() => emit('onClickNext')"
    >
      <span>></span>
    </div>
  </div>
</template>

<style>
.paginator-item {
  @apply rounded-xl h-11 w-11 flex items-center justify-center transition-all text-dark-500 cursor-pointer bg-dark-200;
}
.paginator-item.active,
.paginator-item:not(.disable):hover {
  @apply text-white bg-dark-500;
}
.paginator-item.next {
  @apply bg-white border border-dark-200;
}
.paginator-item.next:not(.disable):hover {
  @apply bg-dark-500 border border-dark-200;
}
.paginator-item.disable {
  @apply cursor-not-allowed;
}
</style>
