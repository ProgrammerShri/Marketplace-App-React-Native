import { useState } from "react";

export default useApi = (apiFunction) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);
    const response = await apiFunction(...args);
    setIsLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };

  return {
    data,
    isLoading,
    error,
    request,
  };
};
