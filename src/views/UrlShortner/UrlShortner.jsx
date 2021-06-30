import { useState } from 'react';
import { connect } from 'react-redux';
import TextArea from '../../components/TextArea';
import Description from '../../components/Description';
import { actions as UrlShortnerAction } from '../../data/UrlShortener';


function UrlShortner(props) {
    const [displayDesc, setDisplayDesc] = useState(false);
    const [value, setValue] = useState('');

    const onSearch = (value) => {
        setValue(value);
        setDisplayDesc(true);
        props.dispatch(UrlShortnerAction.fetchShortUrl(value))
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

const mapStateToProps = (state) => {
    return {
        UrlShortnerData: state.UrlShortener
    }
}

export default connect (mapStateToProps)(UrlShortner);