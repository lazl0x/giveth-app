import Web3 from 'web3';
import { useWeb3 } from '@openzeppelin/network/react';
import React, { Component, useCallback, useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from "react-dom";
import About from "./About"
import Join from "./Join";
import Give from "./Give";
import { Layout, Breadcrumb, Button, Affix, Space, Typography, Divider, Menu, PageHeader, Row  } from 'antd';
import "antd/dist/antd.css";
import "./index.css";
import Web3Data from './Web3Data';

const { Header, Content, Footer } = Layout;

const PROJECT_ID = '05a15c24209448c38795eb02cbb6ed33';

function App() {

  const web3Context = useWeb3(`wss://rinkeby.infura.io/ws/v3/${PROJECT_ID}`);
  const { networkId, networkName, providerName, accounts, lib } = web3Context;

  const [connected, setConnected] = useState(false);
  const [buttonText, setButtonText] = useState("+ Connect")
  const [buttonColor, setButtonColor] = useState("primary")

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const [balance, setBalance] = useState(0);
  const [accountAddress, setAccountAddress] = useState('')
  
  const getEthInfo = useCallback(async () => {
    let account = await accounts[0]
    let balance = accounts && accounts.length > 0 ? lib.utils.fromWei(await lib.eth.getBalance(accounts[0]), 'ether') : 'Unknown';
      setBalance(balance);
      setAccountAddress(account)
      
  }, [accounts, lib.eth, lib.utils]);
        
  useEffect(() => {getEthInfo()}, [accounts, getEthInfo, networkId]);


  const requestAuth = async web3Context => {
    try {
      await web3Context.requestAuth()
      setConnected(true)
      setButtonColor("default")

    } catch (e) {
      console.error(e);
      setConnected(false)
      setButtonText("+ Connect")
    }
    
  };
  
  const connectDisconnect = async () => {
    if (connected) {
      setConnected(false)
      setButtonText(" + Connect ")
      setButtonColor("primary")
    } else {
    setButtonText("Connecting...")
    await requestAuth(web3Context)

    setButtonText("🔸 " + "CONNECTD")
    }
    console.log(balance)
  }


  return (
    <Layout className="layout">

      <PageHeader
        className="site-page-header"
        backIcon='false'
        title="🎀 giveth.me"
        subTitle="v1.0"
        extra={[
          <Typography.Text>
            {connected && accounts && accounts.length ? balance : ''}
          </Typography.Text>,
          <Button id="connectButton" key="1" type={buttonColor} onClick={connectDisconnect}>
            {buttonText}
          </Button>
        ]}>
  
      </PageHeader>

      {/* <Web3Data title="Web3 Data" web3Context={web3Context} /> */}
      <Space className='menubar' style={{padding: '16px'}}size='large' split={<Divider type="vertical" />}>

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
export default App;

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);