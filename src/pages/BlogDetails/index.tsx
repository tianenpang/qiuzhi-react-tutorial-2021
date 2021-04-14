import React, { useEffect, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router-dom';
import { Card, Popconfirm, Col, Divider, Row, Space, Typography, Button, message } from 'antd';
import { useFetch } from '../../hooks';
import { fetchErrorHandler } from '../../utils';

const { Paragraph, Text, Link } = Typography;

const BlogDetails: React.FC = (): JSX.Element => {

  const history = useHistory();
  const { id } = useParams<IArticleParam>();
  const [ deleting, setDeleting ] = useState<boolean>(false);
  const article_api = `https://run.mocky.io/v3/d8150bb2-6fdb-4ffa-ae9b-fe858aa5759e?id=${ id }`;

  const [ data, loading, error ] = useFetch<IBlog>(article_api);

  useEffect(() => {
    error && fetchErrorHandler(error);
  }, [ error ]);

  const onArticleDeleteHandler = (id: number) => {
    setDeleting(true);
    fetch(`https://run.mocky.io/v3/53ad2462-f389-492a-b6ec-cca3fcac1e02?id=${ id }`)
      .then(response => {
        if (!response.ok) throw Error('Could not fetch to delete from the resource');
        return response.json();
      }).then(data => {
      setDeleting(false);
      if (data.success) {
        history.push('/');
        return message.success(`The article with id ${ id } is deleted successfully`);
      }
    }).catch(error => {
      setDeleting(false);
      fetchErrorHandler(error.message);
    });
  };

  const cardExtra = (
    <Popconfirm
      okText='Delete'
      cancelText='Cancel'
      placement='bottomRight'
      title='Please confirm to delete'
      onConfirm={ () => data && onArticleDeleteHandler(data.id) }
    >
      <Button icon={ <DeleteOutlined/> } loading={ deleting }>
        Delete
      </Button>
    </Popconfirm>
  );

  const ArticleTypography = () => (
    <Card title={ data?.title } loading={ loading } extra={ cardExtra }>
      <Typography>
        <Text>{ id } - { data?.author }</Text>
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
        style={ { width: '100%' } }
        xl={ { span: 16, offset: 4 } }
        lg={ { span: 18, offset: 3 } }
        md={ { span: 18, offset: 3 } }
      >
        <ArticleTypography/>
      </Col>
    </Row>
  );
};

export default BlogDetails;
