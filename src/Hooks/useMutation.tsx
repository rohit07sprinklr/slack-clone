import { useState } from 'react';

const useMutation = (mutationFunction: (...args: any) => Promise<any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const mutate = async ({ onSuccess }: any, ...args: any): Promise<any> => {
    try {
      setLoading(true);
      const res = await mutationFunction(...args);
      onSuccess(res);
      setData(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  return { loading, data, error, mutate };
};

export { useMutation };
