import _ from 'lodash'
import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import {
  GET_CLASS_DATA_REQUEST,
  CLASS_CREATE_REQUEST,
  } from './Constants';

import { message } from '../../../components/notification/Message'
import * as notification from '../../../components/notification/Actions'
import client from '../../../services/api';
import * as actions from './Actions'

const API_CLASS = '/api/classes'

function* getData(params) {
  try {
    const { data } = yield call(client().get, API_CLASS)
    if (!_.isEmpty(data)) {
      yield put(actions.getDataSuccess(data))
    }
  } catch (e) {
    yield put(notification.error(
      message({
        title: 'get class',
        content: 'get class failed'
      })
    ))
  }
}

function* create(params) {
  try {
    const { data } = yield call(client().post, API_CLASS, params.payload.params, {});
    yield put(actions.createSuccess(data))
    yield put(push('/admin/class'))
    yield put(notification.success(
      message({
        title: 'Class',
        content: 'Create success'
      })
    ))
  } catch (e) {
    console.log(`Create class server Error: ${e}`)
  }
}

function* watchFetchDataRequest() {
  yield takeEvery(GET_CLASS_DATA_REQUEST, getData)
}

function* watchCreateClass() {
  yield takeEvery(CLASS_CREATE_REQUEST, create)
}

export const sagasClass = [
  fork(watchFetchDataRequest),
  fork(watchCreateClass),
]
