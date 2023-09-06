//libs
import { useEffect, useRef, useState } from 'react';

//type
type useInfiniteQueryType = {
  queryFunction: (...args: any) => Promise<any>;
  page: number;
  updateFunction?: (...args: any) => any;
  enabled?: any;
  refetchProps: any[];
  refreshInterval?: number;
  refreshFunction?: (...args: any) => boolean;
};

const useInfiniteQuery = ({
  queryFunction,
  page,
  updateFunction,
  refetchProps,
  refreshInterval,
  refreshFunction
}: useInfiniteQueryType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  //totalCount
  const [pageLimit, setPageLimit] = useState<number>(0);

  // const dataRef = useRef(null);
  // dataRef.current = data;
  // const intervalRef = useRef(null);

  useEffect(() => {
    const callQueryFunction = async () => {
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
    callQueryFunction();
  }, [page, ...refetchProps]);

  useEffect(() => {
    const refetchQueryFunction = async () => {
      const res = await queryFunction();
      if (refreshFunction && refreshFunction(data, res.data)) {
        setData(res.data);
        setPageLimit(res.pageLimit);
      }
    };
    let intervalRef: any = null;
    if (refreshInterval) {
      intervalRef = setInterval(refetchQueryFunction, refreshInterval);
    }
    return () => {
      intervalRef ? clearInterval(intervalRef) : {};
    };
  }, [page, data, refreshInterval, ...refetchProps]);


  const updateData = async (newData: any) => {
      //remove
      setData(newData);
  };

  return { loading, data, error, updateData, pageLimit };
};

export { useInfiniteQuery };
