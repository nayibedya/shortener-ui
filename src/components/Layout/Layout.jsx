import { Layout as AntdLayout, Affix } from 'antd';
import TopBar from '../TopBar';
import SideBar from '../SideBar';
import './Layout.css';

const { Content } = AntdLayout;

function Layout ({children}) {
    return (
        <AntdLayout>
            <Affix offsetTop={0}>
                <TopBar/>
            </Affix>
            <AntdLayout className='main-layout__page-sider'>
                <SideBar />
                <Content className="main-layout__page-content">{children}</Content>
            </AntdLayout>
        </AntdLayout>
    );
}

export default Layout;