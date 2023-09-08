//libs
import { useEffect, useRef, useState } from 'react';

//type
type useInfiniteQueryType = {
  queryFunction: (...args: any) => Promise<any>;
  page: number;
  enabled?: any;
  refreshInterval?: number;
  refreshFunction?: (...args: any) => boolean;
};

const useInfiniteQuery = ({
  queryFunction,
  page,
  refreshInterval,
  refreshFunction
}: useInfiniteQueryType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const callQueryFunction = async () => {
      try {
        setLoading(true);
        const res = await queryFunction();
        setData(res.data);
        setTotalCount(res.pageLimit);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    callQueryFunction();
  }, [page, queryFunction]);

  useEffect(() => {
    const refetchQueryFunction = async () => {
      const res = await queryFunction();
      if (refreshFunction && refreshFunction(data, res.data)) {
        setData(res.data);
        setTotalCount(res.pageLimit);
      }
    };
    let intervalRef: any = null;
    if (refreshInterval) {
      intervalRef = setInterval(refetchQueryFunction, refreshInterval);
    }
    return () => {
      intervalRef ? clearInterval(intervalRef) : {};
    };
  }, [page, data, refreshInterval, queryFunction]);

  const updateData = async (newData: any) => {
    setData(newData);
  };

  return { loading, data, error, updateData, totalCount };
};

export { useInfiniteQuery };
