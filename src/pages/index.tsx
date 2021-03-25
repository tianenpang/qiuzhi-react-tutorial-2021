import React from 'react';
import Home from './Home';
import NavBar from '../components/NavBar';

const Page: React.FC = (): JSX.Element => {

  return (
    <>
      <NavBar/>
      <Home/>
    </>
  );
};

export default Page;
