import { Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;

function TextArea (props) {
    const [loading, setLoading] = useState(false);

    function onSearch (value, event) {
        setLoading(true)
        setTimeout(function(){ setLoading(false) }, 3000);
        if(props.onSearch){
            props.onSearch(value)
        }
    }

    return (
        <Search 
            placeholder="Enter Link Here" 
            enterButton="Shorten URL" 
            size="large" 
            loading={loading}
            allowClear
            onSearch={onSearch}
         />
    );
}

export default TextArea;