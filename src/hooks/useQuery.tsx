//libs
import { useEffect, useState } from 'react';

//type
type useQueryType = {
  queryFunction: (...args: any) => Promise<any>;
  skip?: any;
};

const useQuery = ({ queryFunction, skip = false }: useQueryType) => {
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
        setLoading(false);
        setError(true);
      }
    };
    if (!skip) {
      callQueryFunction(queryFunction);
    }
  }, [skip, queryFunction]);

  const updateData = async (newData: any) => {
    setData(newData);
  };

  return { loading, data, error, updateData };
};

export { useQuery };
