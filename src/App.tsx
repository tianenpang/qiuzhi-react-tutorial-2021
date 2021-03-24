import React from 'react';
import './App.css';

const App: React.FC = (): JSX.Element => {

  const title: string = 'Hello world!';

  return (
    <div className="app">
      { title }
    </div>
  );
};

export default App;
