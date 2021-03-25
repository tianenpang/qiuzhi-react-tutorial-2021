import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import GithubCorner from 'react-github-corner';
import './index.css';

const NavBar: React.FC = (): JSX.Element => {

  return (
    <Layout.Header className='header'>
      <Row className='header-row' align='middle'>
        <Col span='4'>
          <span className='brand-title'>Brand Title</span>
        </Col>
        <Col span='20'>
          <Row>
            <Col span='24'>
              <Menu className='header-menu' mode="horizontal">
                <Menu.Item className='header-menu-item'>Home</Menu.Item>
                <Menu.Item className='header-menu-item'>New Blog</Menu.Item>
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
        href="https://github.com/TianenPang/qiuzhi-react-tutorial-2021"
      />
    </Layout.Header>
  );
};

export default NavBar;
