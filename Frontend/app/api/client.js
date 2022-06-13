import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://node-marketplace-app.herokuapp.com/api/",
});

export default apiClient;
