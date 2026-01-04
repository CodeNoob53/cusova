import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getQuote = async () => {
  const { data } = await api.get('/quote');
  return data;
};

export const getFilters = async ({ filter, page = 1, limit = 12 }) => {
  const { data } = await api.get('/filters', {
    params: { filter, page, limit },
  });
  return data;
};

export const getExercises = async ({
  bodypart,
  muscles,
  equipment,
  keyword,
  page = 1,
  limit = 10,
}) => {
  const params = { page, limit };
  if (bodypart) params.bodypart = bodypart;
  if (muscles) params.muscles = muscles;
  if (equipment) params.equipment = equipment;
  if (keyword) params.keyword = keyword;

  const { data } = await api.get('/exercises', { params });
  return data;
};

export const getExerciseById = async id => {
  const { data } = await api.get(`/exercises/${id}`);
  return data;
};

export const updateRating = async (id, rating, email, review = '') => {
  const body = { rate: rating, email };
  if (review) {
    body.review = review;
  }
  const { data } = await api.patch(`/exercises/${id}/rating`, body);
  return data;
};

export const subscribe = async email => {
  const { data } = await api.post('/subscription', { email });
  return data;
};
