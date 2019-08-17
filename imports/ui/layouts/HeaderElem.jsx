import React from 'react';
import {Layout} from 'antd';
import AccountsUIWrapper from "../components/AccountsUIWrapper";
import {Accounts} from "meteor/accounts-base";

const {Header} = Layout;

Accounts.ui.config({
    requestPermissions: {
        // TODO: Add permissions necessary
        rocketchat: []
    }
});

export default class HeaderElem extends React.Component {



    render() {
        return (
            <Header style={{background: '#fff', padding: 0}}>
                <h3 style={{
                    float: "left",
                    paddingLeft: "20px"
                }}>Dashboard</h3>

                <div style={{
                    float: "right",
                    paddingRight: "20px"
                }}>
                    <AccountsUIWrapper/>
                </div>
            </Header>

        );
    }
}