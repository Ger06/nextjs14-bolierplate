import {  delay, put, takeLatest } from 'redux-saga/effects';
import { INCREMENT, START_TIMER } from './action-types';
import { increment, incrementAsync, startTimer } from './action';

function* incrementAsyncSaga({payload: count}: ReturnType<typeof increment>) {
  console.log('saga: incrementAsyncSaga', count);
  yield put(incrementAsync(count)); // Simula lógica asincrónica despachando la acción increment
}

function* startTimerAsyncSaga({payload: {delayMs, callback}}: ReturnType<typeof startTimer>) {
  yield delay(delayMs);
  callback({ok: true, data: 'bhablah', message: 'timer stopped'});
}

export function* watchCounter() {
  yield takeLatest(INCREMENT, incrementAsyncSaga); // Escucha la acción `increment`
}

export function* watchStartTimer() {
  yield takeLatest(START_TIMER, startTimerAsyncSaga);
}
