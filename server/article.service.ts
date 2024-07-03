import api from './api';

export const getArticles = async () => {
  return await api.get(`/qtim-test-work/posts`);
};


export const getArticleById = async (id: string) => {
  return await api.get(`/qtim-test-work/posts/${id}`);
};
