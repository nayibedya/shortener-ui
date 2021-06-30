import { Table as AntdTable} from 'antd';

import Config from '../../Utils/Config';

const columns = [
    {
        title: 'Short Url',
        dataIndex: 'shortUrl',
        key: 'shortUrl',
        render: text => <a href={text} target="_blank" rel='noreferrer'>{text}</a>,
    },
    {
        title: 'Actual Url',
        dataIndex: 'actualUrl',
        key: 'actualUrl',
    },
    {
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
    },
]

function Table (props) {
    
    let rowData = [];
        let obj = {};
        if(props.data){
            props.data.map((item, index) => {
                obj = {
                    key: index,
                    shortUrl: `${Config.getHostName()}/${item.shortenerKey}`,
                    actualUrl: item.actualUrl,
                    count: item.counter
                }
                rowData.push(obj);
            });
        }
console.log(props.data);
    return (
        <AntdTable dataSource={rowData} columns={columns} />
    );
}

export default Table;