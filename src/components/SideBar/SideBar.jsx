import React, { useState } from 'react';
import { Layout as AntdLayout } from 'antd';
import Menu from '../Menu';

const { Sider } = AntdLayout;



function SideBar () {
const  [collapsed, setCollapsed] = useState(false);

const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
}
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className='main-layout__page-sider'>
            <Menu/>
        </Sider>
    );
}


export default SideBar;