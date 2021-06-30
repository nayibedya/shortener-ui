import { useState } from 'react';
import TextArea from '../../components/TextArea';
import Description from '../../components/Description';



function UrlShortner() {
    const [displayDesc, setDisplayDesc] = useState(false);
    const [value, setValue] = useState('');

    const onSearch = (value) => {
        setValue(value);
        setDisplayDesc(true);
    }

    return (
        <div>
            <TextArea onSearch={onSearch}/>
            <br />
            <br />
            <br />
            {displayDesc ? <Description textAreaValue={value} /> : <div></div>}
        </div>

    )
}

export default UrlShortner;