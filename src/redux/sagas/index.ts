import { all } from 'redux-saga/effects';
import Jobs from './jobs';


export default function* rootSaga() {
    yield all([...Jobs]);
}