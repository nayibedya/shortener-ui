import { Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;

function TextArea () {
    const [loading, setLoading] = useState(false);

    function onSearch (e) {
        setLoading(true)
        setTimeout(function(){ setLoading(false) }, 3000);
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