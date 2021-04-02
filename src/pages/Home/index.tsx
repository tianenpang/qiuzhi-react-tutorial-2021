import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import BlogList from '../../components/BlogList';
import './index.css';


const Home: React.FC = (): JSX.Element => {

  const [ blogs, setBlogs ] = useState<IBlog[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true);

  const deleteBlogHandler: Function = (id: number): void => {
    setBlogs([ ...blogs.filter(blog => blog.id !== id) ]);
  };

  useEffect(() => {
    fetch('https://run.mocky.io/v3/6802ea8b-eba8-4e4d-bac1-ff468802981a')
      .then(response => response.json())
      .then(data => {
        setBlogs(data.blogs);
        setLoading(false);
      }).catch(() => message.warning('get some error on fetch data.'));
  }, []);

  return (
    <div className='home'>
      <BlogList title='All Blogs' data={ blogs } loading={ loading } onDelete={ id => deleteBlogHandler(id) }/>
    </div>
  );
};

export default Home;
