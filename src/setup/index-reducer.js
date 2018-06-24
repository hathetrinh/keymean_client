import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { resolveBrowserLocale as langBrowser }  from 'i18n/TranslationUtils';
import localeReducer from 'i18n/Reducers';
import student from '../feature/Admin/Students/Reducer'
import notifications from '../components/notification/Reducer'
import loading from '../loading/Reducer'
import course from '../feature/Admin/Courses/Reducer'


let locale = (langBrowser === 'en' || langBrowser === 'jp') ? langBrowser : 'jp'

const IndexReducer = combineReducers({
  locale: localeReducer(locale),
  form,
  notifications,
  loading,
  student,
  course,
});

export default IndexReducer;
