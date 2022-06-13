import apiClient from "./client";
const endPoint = "/listings";

const getListings = () => apiClient.get(endPoint);
const addListing = async (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.id);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpg",
      uri: image,
    });
  });

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  return await apiClient.post(endPoint, data);
};

export default {
  getListings,
  addListing,
};
