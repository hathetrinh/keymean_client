import _ from 'lodash'
import { call, fork, put, takeEvery } from 'redux-saga/effects'

import { GET_COURSE_DATA_REQUEST } from './Constants';

import { message } from '../../../components/notification/Message'
import * as notification from '../../../components/notification/Actions'
import client from '../../../services/api';
import * as actions from './Actions'

const API_GET_DATA = '/api/courses'

function* getData(params) {
  try {
    const { data }  = yield call(client().get, API_GET_DATA)
    if (!_.isEmpty(data)) {
      yield put(actions.getDataSuccess(data))
    }
  } catch (e) {
    yield put(notification.error(
      message({
        title: 'get Course',
        content: 'get Course failed'
      })
    ))
  }
}

function* watchFetchDataRequest() {
  yield takeEvery(GET_COURSE_DATA_REQUEST, getData)
}

export const sagasCourse = [
  fork(watchFetchDataRequest),
]
