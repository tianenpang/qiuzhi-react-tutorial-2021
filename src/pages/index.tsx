import React from 'react';
import { Layout } from 'antd';
import NavBar from '../components/NavBar';
import Home from './Home';

const Page: React.FC = (): JSX.Element => {

  return (
    <>
      <NavBar/>
      <Layout.Content style={ { margin: '50px auto', padding: '50px 24px', border: '1px solid rgb(48, 48, 48)', maxWidth: '1440px' } }>
        <Home/>
      </Layout.Content>
    </>
  );
};

export default Page;
