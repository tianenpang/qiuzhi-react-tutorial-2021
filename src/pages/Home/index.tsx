import React, { useState } from 'react';
import { Button } from 'antd';
import './index.css';

const Home: React.FC = (): JSX.Element => {

  const [ name, setName ] = useState<string>('...');

  const buttonClickHandler: Function = (): void => {
    setName('Hello');
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <h3>name: { name }</h3>
      <Button type='dashed' onClick={ () => buttonClickHandler() }>Change Name</Button>
    </div>
  );
};

export default Home;
