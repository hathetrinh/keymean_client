import _ from 'lodash'
import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import {
  GET_STUDENT_DATA_REQUEST,
  STUDENT_CREATE_REQUEST,
  } from './Constants';

import { message } from '../../../components/notification/Message'
import * as notification from '../../../components/notification/Actions'
import client from '../../../services/api';
import * as actions from './Actions'

const API_GET_DATA = '/api/users'
const API_CREATE = '/api/users'

function* getData(params) {
  try {
    const { data }  = yield call(client().get, API_GET_DATA)
    if (!_.isEmpty(data)) {
      yield put(actions.getDataSuccess(data))
    }
  } catch (e) {
    yield put(notification.error(
      message({
        title: 'get Student',
        content: 'get Student failed'
      })
    ))
  }
}

function* create(params) {
  debugger
  try {
    const { data } = yield call(client().post, API_CREATE, params, {});

    yield put(actions.createSuccess(data))
    yield put(push('/traffic'))
    yield put(notification.success(
      message({
        title: 'User',
        content: 'Create success'
      })
    ))

  } catch (e) {
    yield put(notification.error(
      message({
        title: 'User',
        content: 'User create failed'
      })
    ))
  }
}

function* watchFetchDataRequest() {
  yield takeEvery(GET_STUDENT_DATA_REQUEST, getData)
}

function* watchCreateStudent() {
  yield takeEvery(STUDENT_CREATE_REQUEST, create)
}


export const sagasStudent = [
  fork(watchFetchDataRequest),
  fork(watchCreateStudent),
]
