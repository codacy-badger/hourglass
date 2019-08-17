import React from 'react';
import {Breadcrumb, Layout, Button} from 'antd';
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
                    <Button>Clock in</Button>
                    <Button>Clock out</Button>
                    <Button>Pause</Button>
                    <Button>Resume</Button>

                    <ClockElem/>
                </div>
            </Content>

        );
    }
}
