import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Card, Col, Divider, Row, Space, Typography } from 'antd';
import Loading from '../Loading';
import { useFetch } from '../../hooks';
import { fetchErrorHandler } from '../../utils';

const { Title, Paragraph, Text, Link } = Typography;

const BlogDetails: React.FC = (): JSX.Element => {

  const history = useHistory();
  const { id } = useParams<IArticleParam>();
  const article_api = `https://run.mocky.io/v3/d8150bb2-6fdb-4ffa-ae9b-fe858aa5759e?id=${ id }`;

  const [ data, loading, error ] = useFetch<IBlog>(article_api);

  useEffect(() => {
    error && fetchErrorHandler(error);
  }, [ error ]);

  const ArticleTypography = () => (
    <Card>
      <Typography>
        <Title level={ 2 }>{ data?.title }</Title>
        <Space direction='vertical' size='small'>
          <Text>ID - { id }</Text>
          <Text>Author - { data?.author }</Text>
        </Space>
        <Divider/>
        <Paragraph>{ data?.body }</Paragraph>
        <Text>Just Mock Data!!!</Text>
        <Divider/>
        <Space>
          <Link onClick={ () => history.goBack() }>Go Back</Link>
        </Space>
      </Typography>
    </Card>
  );

  return (
    <Row>
      <Col
        xl={ { span: 16, offset: 4 } }
        lg={ { span: 18, offset: 3 } }
        md={ { span: 18, offset: 3 } }
      >
        { loading ? <Loading/> : <ArticleTypography/> }
      </Col>
    </Row>
  );
};

export default BlogDetails;
