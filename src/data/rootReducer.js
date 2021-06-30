import { combineReducers } from 'redux';
import { reducers as UrlShortnerReducer } from './UrlShortener';
import { reducers as ListReducer } from './List';

export default combineReducers({
    UrlShortener: UrlShortnerReducer,
    List: ListReducer
});