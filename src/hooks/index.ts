import { useEffect, useState } from 'react';

export const useFetch = <D>(url: string): [ data: D | undefined, loading: boolean, error: string ] => {

  const [ data, setData ] = useState<D>();
  const [ error, setError ] = useState<string>('');
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {
    let isUnmounted = false;
    fetch(url)
      .then(response => {
        if (!isUnmounted) {
          if (!response.ok) throw Error('Could not fetch the data from the resource');
          return response.json();
        }
      })
      .then(data => {
        if (!isUnmounted) {
          setData(data);
          setLoading(false);
        }
      })
      .catch(error => setError(error.message));
    return () => {
      isUnmounted = true;
    };
  }, [ url ]);

  return [ data, loading, error ];
};
