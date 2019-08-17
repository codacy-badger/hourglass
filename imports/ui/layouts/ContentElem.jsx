import React from 'react';
import {Layout, Button} from 'antd';
import ClockElem from '../components/ClockElem.jsx';
import {SignIn, SignOut} from 'styled-icons/octicons'


const {Content} = Layout;

export default class ContentElem extends React.Component {



    render() {

        const button_check_in = {
            height: "100px",
            width: "230px",
            backgroundColor: "#54B948"
        };
        const button_check_out = {
            height: "100px",
            width: "230px",
            backgroundColor: "#FA3E3E"
        };

        return (
            <Content style={{margin: '0 16px', paddingTop: "30px"}}>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <ClockElem/>
                    <Button size={"large"} style={button_check_in}><SignIn size="45"/><br/>Clock in</Button>
                    <Button size={"large"} style={button_check_out}><SignOut size="45"/><br/>Clock out</Button>
                </div>
            </Content>

        );
    }
}
