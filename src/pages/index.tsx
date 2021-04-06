import React from 'react';
import { Col, Layout, Row } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from './Home';

const Page: React.FC = (): JSX.Element => {

  return (
    <>
      <Router>
        <NavBar/>
        <Row align='middle'>
          <Col
            xl={ { span: 16, offset: 4 } }
            lg={ { span: 18, offset: 3 } }
            md={ { span: 18, offset: 3 } }
            sm={ { span: 20, offset: 2 } }
            xs={ { span: 22, offset: 1 } }
          >
            <Layout.Content
              style={ {
                margin: '50px auto',
                borderRadius: '2px',
                padding: '50px 24px',
                background: '#303030',
                border: '1px dashed rgb(48, 48, 48)'
              } }
            >
              <Switch>
                <Route path='/'>
                  <Home/>
                </Route>
              </Switch>
            </Layout.Content>
          </Col>
        </Row>
      </Router>
    </>
  );
};

export default Page;
