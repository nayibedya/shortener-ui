import { Descriptions } from 'antd';

function Description(props) {

    const link = <a target="_blank" rel='noreferrer' href={props.shortUrl}>{props.shortUrl}</a>;
    return (
        <Descriptions title="URL's">
            <Descriptions.Item label="Short URL"><b>{link}</b></Descriptions.Item>
            <Descriptions.Item label="Long URL">{props.textAreaValue}</Descriptions.Item>
        </Descriptions>
    );
}

export default Description;