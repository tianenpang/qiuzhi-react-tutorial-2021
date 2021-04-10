import React from 'react';
import { notification } from 'antd';

export const fetchErrorHandler = (error: string) => {
  notification.warning({
    placement: 'bottomRight',
    message: 'Data Fetching Error',
    description: <span>error details: { error }.</span>
  });
};
