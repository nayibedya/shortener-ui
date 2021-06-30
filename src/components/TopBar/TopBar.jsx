import { Layout } from 'antd';
import './TopBar.css'

const { Header } = Layout;

function TopBar () {

    return (
        <Header className='top-bar'>
            <div className='top-bar__app-name' style={{color:'white'}}>Shortener</div>
        </Header>
    );
}

export default TopBar;