import { fork, all } from 'redux-saga/effects';
import { watcher as UrlShortenerWatcher } from './UrlShortener';
import { watcher as ListWatcher } from './List';

// eslint-disable-next-line
export default function* () {
    yield all([
        fork(UrlShortenerWatcher),
        fork(ListWatcher)
    ]);
}