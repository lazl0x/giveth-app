import React, { Component } from "react";
import { Layout, Breadcrumb, PageHeader, InputNumber, Typography, Row, Col, Button } from 'antd';

function Give() {



           return (
    <Layout className="give-layout">
    <PageHeader
        className="site-page-header"
        onBack={()=>{}}
        title="Create Giveaway"
    />

    <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <InputNumber size='large' min={1} max={10} defaultValue={3} bordered={true} /> 
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Typography.Title level={4}> ETH </Typography.Title>
        </Col>
    </Row>
    <Row>
        <Button>Create Giveaway</Button>
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

export default Give;