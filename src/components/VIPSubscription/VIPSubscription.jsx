import React from 'react';
import { Card, Button, Typography, List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './VIPSubscription.scss';

const VIPSubscription = () => {
  const benefits = [
    'Free nationwide shipping for the month',
    'Exclusive discounts on new products',
    '24/7 customer support',
    'Additional 5% discount on every order',
  ];

  return (
    <Card className="vip-subscription-card" bordered={false} hoverable>
      <Typography.Title level={3} className="title">
        Join the VIP Membership!
      </Typography.Title>
      <Typography.Text className="description">
        Enjoy free shipping and other exclusive benefits as a VIP member.
      </Typography.Text>
      <List
        dataSource={benefits}
        renderItem={(benefit) => (
          <List.Item>
            <CheckCircleOutlined style={{ color: 'green', marginRight: '8px' }} />
            {benefit}
          </List.Item>
        )}
        className="benefits-list"
      />
      <Button type="primary" size="large" className="subscribe-button">
        Subscribe Now
      </Button>
    </Card>
  );
};

export default VIPSubscription;

