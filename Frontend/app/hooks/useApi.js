import { useState } from "react";

export default useApi = (apiFunction) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);
    const response = await apiFunction(...args);
    setIsLoading(false);
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return {
    data,
    isLoading,
    error,
    request,
  };
};
