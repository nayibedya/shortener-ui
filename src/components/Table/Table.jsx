import { Table as AntdTable} from 'antd';

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

const dataSource = [
    {
        key: '1',
        shortUrl: 'http://localhost:8085/30NLFY',
        actualUrl: 'http://www.google.com',
        count: 3,
    },
    {
        key: '2',
        shortUrl: 'http://localhost:8085/30NLTR',
        actualUrl: 'http://www.facebook.com',
        count: 30,
    },
];

function Table (props) {

    return (
        <AntdTable dataSource={dataSource} columns={columns} />
    );
}

export default Table;