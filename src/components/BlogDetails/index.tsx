import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails: React.FC = (): JSX.Element => {

  const { id } = useParams<IArticleParam>();

  return (
    <>
      <h2>Blog Detail - { id }</h2>
    </>
  );
};

export default BlogDetails;
