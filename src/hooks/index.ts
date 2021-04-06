import { useEffect, useState } from 'react';

export const useFetch = <D>(url: string, { onError }: { onError: (message: string) => void }): [ data: D | undefined, loading: boolean ] => {

  const [ data, setData ] = useState<D>();
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw Error('Could not fetch the data from the resource');
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => onError(error.message));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [ data, loading ];
};
