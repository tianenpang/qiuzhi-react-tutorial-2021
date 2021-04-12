import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, message, Row, Select, Space } from 'antd';
import { fetchErrorHandler } from '../../utils';

const form_layout = {
  input: {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  },
  action: {
    wrapperCol: { offset: 4, span: 20 }
  }
};

const Create: React.FC = (): JSX.Element => {

  const [ form ] = Form.useForm();
  const [ loading, setLoading ] = useState<boolean>(false);

  const formSubmitHandler = (fields: IBlogForm): void => {
    setLoading(true);
    fetch('https://run.mocky.io/v3/0d15d190-8d6c-45cc-b017-9d2b9092b79c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
    }).then(response => {
      if (!response.ok) throw Error('Could not fetch the data from the resource');
      return response.json();
    }).then(data => {
      setLoading(false);
      if (data.success) {
        formResetHandler();
        return message.success('A New Blog Post Success');
      }
    }).catch(error => {
      setLoading(false);
      fetchErrorHandler(error.message);
    });
  };

  const formResetHandler = (): void => form.resetFields();

  return (
    <>
      <Row>
        <Col
          style={ { width: '100%' } }
          xl={ { span: 16, offset: 4 } }
          lg={ { span: 18, offset: 3 } }
          md={ { span: 18, offset: 3 } }
        >
          <Card title='Post New Blog'>
            <Form<IBlogForm>
              name='blog'
              form={ form }
              { ...form_layout.input }
              onFinish={ values => formSubmitHandler(values) }
            >
              <Form.Item
                name='title'
                label='Title'
                rules={ [ { required: true, message: 'Please input blog title!' } ] }
              >
                <Input allowClear placeholder='blog title'/>
              </Form.Item>
              <Form.Item
                name='author'
                label='Author'
                initialValue='admin'
                rules={ [ { required: true, message: 'Please select author!' } ] }
              >
                <Select>
                  <Select.Option value='admin'>admin</Select.Option>
                  <Select.Option value='test'>test</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name='content'
                label='Content'
                rules={ [ { required: true, message: 'Please input blog content!' } ] }
              >
                <Input.TextArea allowClear showCount maxLength={ 1000 } autoSize={ { minRows: 5, maxRows: 20 } } placeholder='blog content'/>
              </Form.Item>
              <Form.Item { ...form_layout.action }>
                <Space size='large'>
                  <Button htmlType='button' onClick={ () => formResetHandler() }>
                    Reset
                  </Button>
                  <Button type='primary' htmlType='submit' loading={ loading }>
                    POST
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Create;
