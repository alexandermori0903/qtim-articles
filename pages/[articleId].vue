<script setup lang="ts">
import { getArticleById } from "../server/article.service";
import type { IArticle } from "../interfaces";

const route = useRoute();
const articleId = ref<string>(route.params.articleId);

const article = ref<IArticle>();

onMounted(() => {
  getArticleById(articleId.value).then(({ data }) => {
    article.value = data;
  }).catch(() => {
    window.alert('API Error');
  })
});

const onError = (event) => {
  event.target.src = "/images/no_img.png";
};

</script>
<template>
  <div class="pt-[120px] pb-[80px]">
    <div v-if="article">
      <p class="text-[84px] leading-[84px]">{{ article.title }}</p>
      <img
        class="mt-[73px] w-full h-auto"
        :src="article.image"
        @error="onError"
        :alt="article.id"
      />
      <p class="mt-20 leading-4">About</p>
      <div class="w-full max-w-[695px]">
        <p class="mt-8 text-4xl leading-[44px]">{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>
