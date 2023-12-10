import axios from "axios";

const BASE_URL = "https://65705f9f09586eff66413f33.mockapi.io"
const $instance = axios.create({ baseURL: BASE_URL });

export const fetchCatalog = async (page, limit = 12) => {
  const { data } = await $instance.get("/adverts", {
    params: {
      page: page,
      limit: limit,
    },
  });
  return data;
};

export const fetchAllCatalog = async () => {
  const { data } = await $instance.get("/adverts");
  return data;
};

export const getCarById = async (id) => {
  const { data } = await $instance.get(`/adverts/${id}`);
  return data;
};