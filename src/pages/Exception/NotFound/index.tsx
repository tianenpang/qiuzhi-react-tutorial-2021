import React from 'react';
import { Button, Result } from 'antd';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = (): JSX.Element => {

  const history = useHistory();

  const backHomeHandler = (): void => {
    history.push('/');
  };

  return (
    <>
      <Result
        title='404'
        status='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={ <Button type='primary' onClick={ () => backHomeHandler() }>Back Home</Button> }
      />
    </>
  );
};

export default NotFound;
