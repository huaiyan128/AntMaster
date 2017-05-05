import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from '../../css/main.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// const MainLayout = React.createClass({
class MainLayout extends React.Component {
   
  render() {
     
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} 
          style={{ lineHeight: '64px' }}  selectedKeys={[this.props.location.pathname]}>
            <Menu.Item key="/usermanage"><Link to='/usermanage'>用户管理</Link></Menu.Item>
            <Menu.Item key="/lottery"><Link to='/lottery'>彩种</Link></Menu.Item>
            <Menu.Item key="10">帮助</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu  mode="inline" defaultSelectedKeys={['1']} 
            defaultOpenKeys={['sub1']} selectedKeys={[this.props.location.pathname]}
              style={{ height: '100%',display:this.props.children.props.route.state==0?'block':'none' }} >
              <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>}>
                <Menu.Item key="/usermanage"><Link to='/usermanage'>用户</Link></Menu.Item>
                <Menu.Item key="2">会员中心</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
              style={{ height: '100%',display:this.props.children.props.route.state==1?'block':'none' }} selectedKeys={[this.props.location.pathname]}>
              <SubMenu key="sub3" title={<span><Icon type="notification" />彩种</span>}>
                <Menu.Item key="/lottery"><Link to='/lottery'>彩票种类</Link></Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
              {
                React.Children.map(this.props.children, function (child) {
                  return <div>{child}</div>;
                })
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
