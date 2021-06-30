import { Table as AntdTable} from 'antd';

import Config from '../../Utils/Config';

const columns = [
    {
        title: 'Short Url',
        dataIndex: 'shortUrl',
        key: 'shortUrl',
        width: 300,
        ellipsis: true
    },
    {
        title: 'Actual Url',
        dataIndex: 'actualUrl',
        key: 'actualUrl',
        width: 600,
        ellipsis: true
    },
    {
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
        width: 100,
        align: 'center'
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

    return (
        <AntdTable  dataSource={rowData} columns={columns} />
    );
}

export default Table;