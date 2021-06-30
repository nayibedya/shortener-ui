import * as types from './types';

export const fetchShortUrl = (url) => ({
    type: types.GET_SHORT_URL,
    url
}); 

export const fetchShortUrlSuccess = (response) => ({
    type: types.GET_SHORT_URL_SUCCESS,
    payload: response.data
});

export const fetchShortUrlError = (error) => ({
    type: types.GET_SHORT_URL_FAILURE,
    payload: error
});