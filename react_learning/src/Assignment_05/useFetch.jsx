
import { useEffect, useState } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const controller = new AbortController();

    const fetchData = async () => {

      try {

        setIsLoading(true);
        setError(null);

        const response = await fetch(url, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();

        setData(result);

      } catch (error) {

        if (error.name !== 'AbortError') {
          setError(error.message);
        }

      } finally {

        if (!controller.signal.aborted) {
          setIsLoading(false);
        }

      }

    };

    fetchData();

    return () => {
      controller.abort();
    };

  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
