import React from 'react';
import { Row, Col, Card } from 'antd';
import Loading from '../Loading';

const BlogList: React.FC<IBlogListProps> = (props: IBlogListProps): JSX.Element => {

  const { title, data, loading }: IBlogListProps = props;

  return (
    <>
      <h2 style={ {
        textAlign: 'center',
        marginBottom: '24px'
      } }>
        { title } - { data?.length }
      </h2>
      <Row wrap gutter={ [ 12, 24 ] }>
        { loading
          ? <Loading/>
          : data?.map(blog => (
            <Col
              xl={ 8 }
              lg={ 8 }
              md={ 12 }
              sm={ 24 }
              xs={ 24 }
              key={ blog.id }
            >
              <Card
                bordered
                hoverable
                title={ blog.title }
                extra={ `by - ${ blog.author }` }
              >
                { blog.body }
              </Card>
            </Col>
          )) }
      </Row>
    </>
  );
};

interface IBlogListProps {
  title: string;
  loading: boolean;
  data: IBlog[] | undefined;
}

export default BlogList;
