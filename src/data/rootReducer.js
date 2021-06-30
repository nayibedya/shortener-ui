import { combineReducers } from 'redux';
import { reducers as UrlShortnerReducer } from './UrlShortener';

export default combineReducers({
    UrlShortener: UrlShortnerReducer
});