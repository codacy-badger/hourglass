import React from 'react';
import {Layout} from 'antd';

const {Header} = Layout;

export default class HeaderElem extends React.Component {

    render() {
        return (
            <Header style={{background: '#fff', padding: 0}}>
                <p>This</p>
            </Header>

        );
    }
}