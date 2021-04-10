import React, { useEffect } from 'react';
import { notification } from 'antd';
import { useFetch } from '../../hooks';
import BlogList from '../../components/BlogList';
import './index.css';


const Home: React.FC = (): JSX.Element => {

  const blogs_api = 'https://run.mocky.io/v3/6802ea8b-eba8-4e4d-bac1-ff468802981a';

  const [ data, loading, error ] = useFetch<{ blogs: IBlog[] }>(blogs_api);

  useEffect(() => {
    error && notification.warning({
      placement: 'bottomRight',
      message: 'Data Fetching Error',
      description: <span>description: { error }.</span>
    });
  }, [ error ]);

  return (
    <div className='home'>
      <BlogList
        title='All Blogs'
        loading={ loading }
        data={ data?.blogs }
      />
    </div>
  );
};

export default Home;
