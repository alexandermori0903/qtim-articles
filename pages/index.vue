<script setup lang="ts">
import { getArticles } from "../server/article.service";
import type { IArticle } from "../interfaces";

interface IArticle {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

const COUNT_PER_PAGE = 8;

const articles = ref<IArticle[]>([]);
const showArticles = ref<IArticle[]>([]);
const pageCount = ref<number>(0);

onMounted(() => {
  getArticles().then(({ data }) => {
    articles.value = data;
    showArticles.value = data.slice(0, COUNT_PER_PAGE);
    pageCount.value = Math.ceil(articles.value.length / COUNT_PER_PAGE);
  }).catch(() => {
    window.alert('API error')
  });
});

const currentPage = ref<number>(1);
watch(currentPage, (newCurrentPage) => {
  showArticles.value = articles.value.slice(
    (newCurrentPage - 1) * COUNT_PER_PAGE,
    newCurrentPage * COUNT_PER_PAGE
  );
});
</script>
<template>
  <div class="pt-[120px] pb-[140px]">
    <p class="text-[84px] leading-[84px]">Articles</p>
    <div
      class="pt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-[60px]"
    >
      <div v-for="article in showArticles" :key="article.id">
        <ArticleCard
          :id="article.id"
          :preview="article.preview"
          :image="article.image"
        />
      </div>
    </div>
    <div v-if="pageCount > 0" class="mt-[68px]">
      <Paginator
        :current-page="currentPage"
        :page-count="pageCount"
        @on-click-page="(val) => (currentPage = val)"
        @on-click-next="() => currentPage++"
      />
    </div>
  </div>
</template>
