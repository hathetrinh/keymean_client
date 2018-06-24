import { all } from 'redux-saga/effects'

import { sagasStudent } from '../feature/Admin/Students/Sagas';
import { sagasCourse } from '../feature/Admin/Courses/Sagas';


export default function* IndexSaga() {
  yield all([
    ...sagasStudent,
    ...sagasCourse,
  ])
};
