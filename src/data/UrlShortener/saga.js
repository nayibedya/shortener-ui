import { call , put, takeLatest } from 'redux-saga/effects';
import { GET_SHORT_URL } from './types';
import { postRequest } from '../../services/HttpServices';
import * as action from './action';
import { createUrl } from '../../Utils/CommonUtils';


export function* fetchShortUrl(longUrl) {
    try {
        const endPoint = 'generate';
        const url = createUrl(endPoint);
        const body = {
            url: longUrl.url
        }
        const response = yield call(postRequest, url, body);
        yield put(action.fetchShortUrlSuccess(response))
    }
    catch (error) {
        yield put(action.fetchShortUrlError(error));
    }
}

export default function* sagas() {
    yield takeLatest(GET_SHORT_URL, fetchShortUrl);
}