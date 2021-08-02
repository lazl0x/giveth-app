import Web3 from 'web3';
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { render } from "react-dom";
import Home from "./Home";
import Join from "./Join";
import Give from "./Give";
import { Layout, Breadcrumb, Button, Affix } from 'antd';
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

  const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="join">
        <Link to="/join">Join Giveaway</Link>
      </Breadcrumb.Item>, 
      <Breadcrumb.Item key="give">
        <Link to="/give">Create Giveaway</Link>
      </Breadcrumb.Item>
    ]

    return (
      <Layout className="layout">
        <Header>
          🎀 giveth.me
          <Button>Connect</Button>
          Your account: {this.state.account}
        </Header>
        
        <Content style={{ padding: '0 100px' }}>
          <Breadcrumb>{breadcrumbItems}</Breadcrumb>
          <Switch>
            <div className="site-layout-content">
              <Route exact path="/" component={Home} />
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