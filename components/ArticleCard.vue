<script setup lang="ts">
defineProps({
  id: String,
  preview: String,
  image: String,
});
const onError = (event) => {
  event.target.src = "/images/no_img.png";
};
</script>

<template>
  <NuxtLink :to="'/' + id">
    <div class="group">
      <div class="card-container group-hover:-translate-y-9">
        <div>
          <img :src="image" :alt="id" class="w-full h-auto" @error="onError" />
        </div>
        <div class="mt-6 line-clamp-3 text-xl leading-6">{{ preview }}</div>
        <div
          class="read-more text-xl leading-6 text-main-300 opacity-0 group-hover:opacity-100"
        >
          Read more
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style>
.card-container {
  @apply relative transition-all;
}
.read-more {
  @apply absolute transition-all;
  top: calc(100% + 12px);
}
</style>
