import { create } from "apisauce";
import { getCache, storeCache } from "../utility/cache";

const apiClient = create({
  baseURL: "https://node-marketplace-app.herokuapp.com/api/",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    storeCache(url, response.data);
    return response;
  }

  const data = await getCache(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
