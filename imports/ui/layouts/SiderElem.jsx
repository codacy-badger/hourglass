import React from 'react';
import {Icon, Layout, Menu} from 'antd';

const {Sider} = Layout;
const {SubMenu} = Menu;

export default class SiderElem extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        if (!this.state.collapsed) {
            document.getElementById("notSider").style.marginLeft = "80px";
        }
        else{
            document.getElementById("notSider").style.marginLeft = "200px";
        }
        console.log(collapsed);
        this.setState({collapsed});

    };

    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
                breakpoint="lg"
                collapsedWidth="80px"
            >
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart"/>
                        <span>Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop"/>
                        <span>Horas</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                  <Icon type="user"/>
                  <span>Férias</span>
                </span>
                        }
                    >
                        <Menu.Item key="3">Resumo</Menu.Item>
                        <Menu.Item key="4">Pedir Férias</Menu.Item>
                        <Menu.Item key="5">Aprovar Férias</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                  <Icon type="team"/>
                  <span>Relatórios</span>
                </span>
                        }
                    >
                        <Menu.Item key="6">Horas</Menu.Item>
                        <Menu.Item key="8">Projectos</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file"/>
                        <span>Phonebook</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
