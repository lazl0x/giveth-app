import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Breadcrumb, PageHeader } from 'antd';

const { Header, Content, Footer } = Layout;


class About extends Component {

  constructor() {
    super();
    this.state = {
      name: "React"
    };

  }

  render() {
     return (
    <PageHeader
        className="site-page-header"
        backIcon="false"
        title="About"
    />)
  }
     
}

export default About;