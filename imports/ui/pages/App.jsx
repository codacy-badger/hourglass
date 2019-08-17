import React from 'react';
import ContentElem from '../layouts/ContentElem.jsx';
import SiderElem from '../layouts/SiderElem.jsx';
import HeaderElem from "../layouts/HeaderElem.jsx";
import FooterElem from "../layouts/FooterElem.jsx";
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
