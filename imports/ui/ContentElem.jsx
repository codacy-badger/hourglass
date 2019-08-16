import React from 'react';
import {Breadcrumb, Layout} from 'antd';
import ClockElem from './ClockElem.jsx';

const {Content} = Layout;

export default class ContentElem extends React.Component {

    render() {
        return (
            <Content style={{margin: '0 16px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    Bill is a cat.
                    <ClockElem/>
                </div>
            </Content>

        );
    }
}
