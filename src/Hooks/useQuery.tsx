//libs
import { useEffect, useState } from 'react';

//type
type useQueryType = {
  queryFunction: (...args: any) => Promise<any>;
  enabled: any;
  updateFunction?: (...args: any) => any;
  refetchProps: any[];
};

const useQuery = ({
  queryFunction,
  updateFunction,
  enabled,
  refetchProps
}: useQueryType) => {
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
    if (enabled) {
      callQueryFunction(queryFunction);
    }
  }, [...refetchProps]);

  const updateData = async (newData: any, type: string) => {
    if (updateFunction) {
      setLoading(true);
      setData((data: any) => updateFunction(data, newData, type));
      setLoading(false);
    } else {
      throw Error('No Update Function Defined');
    }
  };

  return { loading, data, error, updateData };
};

export { useQuery };
