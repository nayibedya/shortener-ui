import { call , put, takeLatest } from 'redux-saga/effects';
import { GET_LIST_URL } from './types';
import { getRequest } from '../../services/HttpServices';
import * as action from './action';
import { createUrl } from '../../Utils/CommonUtils';


export function* fetchListtUrl() {
    try {
        const endPoint = 'getAll';
        const url = createUrl(endPoint);
        const response = yield call(getRequest, url);
        yield put(action.fetchListUrlSuccess(response))
    }
    catch (error) {
        yield put(action.fetchListUrlError(error));
    }
}

export default function* sagas() {
    yield takeLatest(GET_LIST_URL, fetchListtUrl);
}