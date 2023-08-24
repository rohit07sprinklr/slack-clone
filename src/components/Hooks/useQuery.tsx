import { useEffect, useState } from 'react';

const useQuery = (queryFunction: any, skip?: boolean) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const callQueryFunction = async (queryFunction: any) => {
      try {
        setLoading(true);
        const res = await queryFunction();
        setData(res);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    if (skip) {
      callQueryFunction(queryFunction);
    }
  }, [skip]);

  return { loading, data, error };
};

export { useQuery };
