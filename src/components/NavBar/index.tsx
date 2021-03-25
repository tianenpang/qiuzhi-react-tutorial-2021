import React from 'react';
import './index.css';

const NavBar: React.FC = (): JSX.Element => {

  return (
    <div className='navbar'>
      <h1>The Dojo Blog</h1>
      <div className='links'>
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
};

export default NavBar;
