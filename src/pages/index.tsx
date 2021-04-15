import React from 'react';
import { Col, Layout, Row } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NavBar from '../components/NavBar';
import NotFound from './Exception/NotFound';

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
                <Route exact path='/'>
                  <Home/>
                </Route>
                <Route exact path='/create'>
                  <Create/>
                </Route>
                <Route exact path='/article/:id'>
                  <BlogDetails/>
                </Route>
                <Route path='*'>
                  <NotFound/>
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
