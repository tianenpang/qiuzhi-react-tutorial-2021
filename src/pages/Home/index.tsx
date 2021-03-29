import React, { useState } from 'react';
import BlogList from '../../components/BlogList';
import './index.css';

const Home: React.FC = (): JSX.Element => {

  const [ blogs ] = useState<IBlog[]>([
    {
      id: 1,
      author: 'admin',
      title: 'vivamus arcu',
      body: 'egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu'
    }, {
      id: 2,
      author: 'admin',
      title: 'nisl vel',
      body: 'id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada'
    }, {
      id: 3,
      author: 'admin',
      title: 'posuere urna',
      body: 'sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi'
    }, {
      id: 4,
      author: 'admin',
      title: 'aliquam sem',
      body: 'purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst'
    }, {
      id: 5,
      author: 'admin',
      title: 'in cursus',
      body: 'ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat'
    }, {
      id: 6,
      author: 'admin',
      title: 'viverra nibh',
      body: 'et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum'
    }
  ]);

  return (
    <div className='home'>
      <BlogList title='All Blogs' data={ blogs }/>
    </div>
  );
};

export default Home;
