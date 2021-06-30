import { useState } from 'react';
import { connect } from 'react-redux';
import TextArea from '../../components/TextArea';
import Description from '../../components/Description';
import { actions as UrlShortnerAction } from '../../data/UrlShortener';


function UrlShortner(props) {
    const [displayDesc, setDisplayDesc] = useState(false);
    const [value, setValue] = useState('');

    const onSearch = async (value) => {
        setValue(value);
        setDisplayDesc(true);
        props.dispatch(UrlShortnerAction.fetchShortUrl(value))
    }


    return (
        <div>
            <TextArea onSearch={onSearch} loading={props.loading}/>
            <br />
            <br />
            <br />
            {displayDesc ? <Description textAreaValue={value} shortUrl={props.shortUrl} /> : <div></div>}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        shortUrl: state.UrlShortener.shortUrl,
        error: state.UrlShortener.error,
        loading: state.UrlShortener.loading
    }
}

export default connect (mapStateToProps)(UrlShortner);