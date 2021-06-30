import { Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;

function TextArea () {
    const [loading, setLoading] = useState(false);

    return (
        <Search placeholder="Enter Link Here" enterButton="Shorten URL" size="large" loading={loading} />
    );
}

export default TextArea;