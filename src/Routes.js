import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { history, store } from './Store'
import PrivateRoute from 'helpers/route/PrivateRoute';
import TranslationProvider from 'i18n/TranslationProvider';
import translations from 'i18n/language';
import Home from 'feature/Home'
import Admin from 'feature/Admin'
import StudentCreate from 'feature/Admin/Students/Create'
import CourseCreate from 'feature/Admin/Courses/CreateCourse'
import ClassCreate from 'feature/Admin/Class/Create'

const routes = (
  <Provider store={store}>
    <TranslationProvider messages={translations}>
      <ConnectedRouter history={history}>
        <Switch>
          <PrivateRoute exact={true} path='/' component={Home} />
          <PrivateRoute exact={true} path='/admin/students/create' component={StudentCreate} />
          <PrivateRoute exact={true} path='/admin/courses/create' component={CourseCreate} />
          <PrivateRoute exact={true} path='/admin/class/create' component={ClassCreate} />
          <PrivateRoute path='/admin' component={Admin} />
          <Redirect to="/" />
          <Route component={Admin} />
        </Switch>
      </ConnectedRouter>
    </TranslationProvider>
  </Provider>
)

export default routes;
