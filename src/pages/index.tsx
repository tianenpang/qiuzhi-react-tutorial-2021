import React from 'react';
import { Col, Layout, Row } from 'antd';
import NavBar from '../components/NavBar';
import Home from './Home';

const Page: React.FC = (): JSX.Element => {

  return (
    <>
      <NavBar/>
      <Row align='middle'>
        <Col
          xs={ { span: 22, offset: 1 } }
          sm={ { span: 20, offset: 2 } }
          md={ { span: 18, offset: 3 } }
          lg={ { span: 18, offset: 3 } }
          xl={ { span: 16, offset: 4 } }
        >
          <Layout.Content style={ { margin: '50px auto', padding: '50px 24px', border: '1px dashed rgb(48, 48, 48)' } }>
            <Home/>
          </Layout.Content>
        </Col>
      </Row>
    </>
  );
};

export default Page;
