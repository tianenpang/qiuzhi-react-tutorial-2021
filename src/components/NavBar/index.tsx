import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import GithubCorner from 'react-github-corner';
import { useHistory, useLocation } from 'react-router-dom';
import './index.css';

const NavBar: React.FC = (): JSX.Element => {

  const history = useHistory();
  const pathname = useLocation().pathname;

  return (
    <Layout.Header className='header'>
      <Row className='header-row' align='middle'>
        <Col xl={ 4 } lg={ 4 } md={ 4 } sm={ 6 } xs={ 10 }>
          <span className='brand-title' onClick={ () => history.push('/') }>
            Brand title
          </span>
        </Col>
        <Col xl={ 20 } lg={ 20 } md={ 20 } sm={ 18 } xs={ 14 }>
          <Row>
            <Col span={ 24 }>
              <Menu className='header-menu' mode='horizontal' defaultSelectedKeys={ [ 'nav-' + pathname ] } selectedKeys={ [ 'nav-' + pathname ] }>
                <Menu.Item
                  key='nav-/'
                  className='header-menu-item'
                  active={ pathname === '/' }
                  onClick={ () => history.push('/') }
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  key='nav-/create'
                  className='header-menu-item'
                  active={ pathname === '/create' }
                  onClick={ () => history.push('/create') }
                >
                  New Blog
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
      </Row>
      <GithubCorner
        size='64px'
        target='_blank'
        bannerColor='#000000'
        ariaLabel='Fork me on GitHub'
        href='https://github.com/TianenPang/qiuzhi-react-tutorial-2021'
      />
    </Layout.Header>
  );
};

export default NavBar;
