import { fork, all } from 'redux-saga/effects';
import { watcher as UrlShortenerWatcher } from './UrlShortener';

// eslint-disable-next-line
export default function* () {
    yield all([
        fork(UrlShortenerWatcher)
    ]);
}