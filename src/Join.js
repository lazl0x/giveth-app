import React, { Component } from "react";
import { Layout, Breadcrumb, PageHeader } from 'antd';

class Join extends Component {

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
        title="Join Giveaway"
    />
    )
  }
}

export default Join;