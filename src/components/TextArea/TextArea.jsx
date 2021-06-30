import { Input } from 'antd';

const { Search } = Input;

function TextArea (props) {

    function onSearch (value, event) {
        if(props.onSearch){
            props.onSearch(value)
        }
    }

    return (
        <Search 
            placeholder="Enter Link Here" 
            enterButton="Shorten URL" 
            size="large" 
            loading={props.loading}
            allowClear
            onSearch={onSearch}
         />
    );
}

export default TextArea;