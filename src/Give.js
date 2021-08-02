import React, { Component } from "react";
import { Layout, Breadcrumb, PageHeader } from 'antd';

class Give extends Component {

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
        onBack={()=>{}}
        title="Create Giveaway"
    />
    )
  }
}

export default Give;