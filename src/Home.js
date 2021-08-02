import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


class Home extends Component {

  constructor() {
    super();
    this.state = {
      name: "React"
    };

  }

  render() {
     return (
     <div className="site-layer-content">
      <h2>Home</h2>
      <div>Yo</div>
      <Button>Sup</Button>
    </div> 
     )
  }
     
}

export default Home;