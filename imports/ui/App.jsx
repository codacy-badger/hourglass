import React from 'react';
import ContentElem from './ContentElem.jsx';
import SiderElem from './SiderElem.jsx';
import HeaderElem from "./HeaderElem.jsx";
import FooterElem from "./FooterElem.jsx";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Layout} from 'antd';

const App = () => (
    <Layout id={"notSider"} style={{
        minHeight: '100vh',
        marginLeft: 200
    }}>
        <SiderElem/>
        <Layout>
            <HeaderElem/>
            <ContentElem/>
            <FooterElem/>
        </Layout>
    </Layout>
);

export default App;
