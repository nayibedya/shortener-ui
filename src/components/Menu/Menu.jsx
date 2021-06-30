import { Menu as AntdMenu } from 'antd';
import { Link } from 'react-router-dom';
import { Html5Outlined, BarChartOutlined } from '@ant-design/icons';

function Menu() {
    return (
        <AntdMenu theme='dark' mode="inline" defaultSelectedKeys={['1']}>
            <AntdMenu.Item key='1' icon={<Html5Outlined />}>
                <Link to='/' > 
                <span>URL Shortener</span> 
                </Link>
            </AntdMenu.Item>
            <AntdMenu.Item key='2' icon={<BarChartOutlined />}>
                <Link to='/list' > 
                <span>List Shortener</span> 
                </Link>
            </AntdMenu.Item>
        </AntdMenu>
    );
}

export default Menu;