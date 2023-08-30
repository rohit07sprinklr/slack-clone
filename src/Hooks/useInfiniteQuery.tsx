//libs
import { useEffect, useState } from 'react';

//type
type useInfiniteQueryType = {
  queryFunction: (...args: any) => Promise<any>;
  page: number;
  updateFunction?: (...args: any) => any;
  enabled?: any;
  refetchProps: any[];
};

const useInfiniteQuery = ({
  queryFunction,
  page,
  updateFunction,
  refetchProps
}: useInfiniteQueryType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [pageLimit, setPageLimit] = useState<number>(0);

  useEffect(() => {
    const callQueryFunction = async (queryFunction: any) => {
      try {
        setLoading(true);
        const res = await queryFunction();
        setData(res.data);
        setPageLimit(res.pageLimit);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    callQueryFunction(queryFunction);
  }, [page, ...refetchProps]);

  const updateData = async (newData: any) => {
    if (updateFunction) {
      setLoading(true);
      setData((data: any) => updateFunction(data, newData));
      setLoading(false);
    } else {
      throw Error('No Update Function Defined');
    }
  };

  return { loading, data, error, updateData, pageLimit };
};

export { useInfiniteQuery };
