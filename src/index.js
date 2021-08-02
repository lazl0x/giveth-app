import Web3 from 'web3';
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { render } from "react-dom";
import  About from "./About"
import Join from "./Join";
import Give from "./Give";
import { Layout, Breadcrumb, Button, Affix, Space, Typography, Divider, Menu, PageHeader } from 'antd';
import "antd/dist/antd.css";
import "./index.css";

const { Header, Content, Footer } = Layout;

class App extends Component {

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {

    return (
      <Layout className="layout">

        <PageHeader
          className="site-page-header"
          backIcon='false'
          title="🎀 giveth.me"
          subTitle="v1.0"
          extra={[
            <Typography.Text>Your account: {this.state.account}</Typography.Text>,
            <Button key="1" type="primary">
              + Connect
            </Button>
          ]}>
        </PageHeader>

        <Space className='menubar' size='large' split={<Divider type="vertical" />}>

          <Link to="/"><Typography.Link>About</Typography.Link></Link>
          <Link to="/join"><Typography.Link>Join</Typography.Link></Link>
          <Link to="/give"><Typography.Link>Give</Typography.Link></Link>

        </Space>

        <Content style={{ padding: '0 100px' }}>

          <Switch>

            <div className="site-layout-content">
              <Route exact path="/" component={About} />
              <Route path="/join" component={Join} />
              <Route path="/give" component={Give} />

            </div>
          </Switch>

        </Content>

        <Footer style={{ textAlign: 'center' }}>made with ❤️</Footer>

      </Layout>
    );
  }

}

render(
  <Router>
    <App />
  </Router>, 
  document.getElementById("root")
);