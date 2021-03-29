import React from 'react';
import { Row, Col, Card } from 'antd';

const BlogList: React.FC<IBlogListProps> = (props: IBlogListProps): JSX.Element => {

  const { title, data }: IBlogListProps = props;

  return (
    <>
      <h2 style={ { textAlign: 'center' } }>
        { title }
      </h2>
      <Row wrap gutter={ [ 12, 24 ] }>
        { data.map(blog => (
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
              extra={ blog.author }
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
  data: IBlog[];
}

export default BlogList;
