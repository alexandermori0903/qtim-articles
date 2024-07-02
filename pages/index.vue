<script setup lang="ts">
interface IArticle {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

const config = useRuntimeConfig();
const { data: articles } = await useFetch(
  `${config.public.apiBase}/qtim-test-work/posts/`
);
const currentPage = ref<number>(1);
const pageCount = ref<number>(
  Math.ceil(articles.value.length / config.public.articlesCountPerPage)
);
const showArticles = ref<IArticle[]>(
  articles.value.slice(0, config.public.articlesCountPerPage)
);
watch(currentPage, (newCurrentPage) => {
  showArticles.value = articles.value.slice(
    (newCurrentPage - 1) * config.public.articlesCountPerPage,
    newCurrentPage * config.public.articlesCountPerPage
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
