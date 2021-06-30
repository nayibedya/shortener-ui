import { Descriptions } from 'antd';

function Description(props) {

    return (
        <Descriptions title="Shot URL:">
            <Descriptions.Item label="Long URL">{props.textAreaValue}</Descriptions.Item>
        </Descriptions>
    );
}

export default Description;