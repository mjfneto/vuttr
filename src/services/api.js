import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/tools",
});

export async function getTools({ query, tagsOnly }) {
  const globalQueryParam = "?q=";
  const tagsOnlyParam = "?tags_like=";
  const requestParams = `/${
    query && (!tagsOnly ? globalQueryParam : tagsOnlyParam) + query
  }`;

  const { data } = await api.get(requestParams);

  return data;
}

export default api;
