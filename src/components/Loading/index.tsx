import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading: React.FC = (): JSX.Element => {

  return (
    <>
      <Spin style={ { margin: '0 auto', padding: '50px 0' } } indicator={ <LoadingOutlined style={ { fontSize: 24 } } spin/> }/>
    </>
  );
};

export default Loading;
