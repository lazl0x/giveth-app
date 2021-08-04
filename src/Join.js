import React, { Component } from "react";
import { Layout, Breadcrumb, PageHeader, Input, Typography, Row, Col, Button } from 'antd';

function Join() {

     return (
         <Layout className="join-layout">
    <PageHeader
        className="site-page-header"
        onBack={()=>{}}
        title="Join Giveaway"
    />

    <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Input size='large' min={1} max={10} defaultValue={3} bordered={true} /> 
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Typography.Title level={4}>Giveaway ID</Typography.Title>
        </Col>
    </Row>
    <Row>
        <Button>Join Giveaway</Button>
        {/* <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <InputNumber size='large' min={1} max={10} defaultValue={3} bordered={true} /> 
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Typography.Title level={4}> ETH </Typography.Title>
        </Col> */}
    </Row>
    </Layout>
    )
    
  
}

export default Join;