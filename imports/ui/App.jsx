import React from 'react';
import ContentElem from './ContentElem.jsx';
import SiderElem from './SiderElem.jsx';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Layout} from 'antd';

const {Header, Footer} = Layout;

const App = () => (
    <Layout style={{minHeight: '100vh'}}>
        <SiderElem/>
        <Layout>
            <Header style={{background: '#fff', padding: 0}}/>
            <ContentElem/>
            <Footer style={{textAlign: 'center'}}>João Catarino ©2019</Footer>
        </Layout>
    </Layout>
);

export default App;
