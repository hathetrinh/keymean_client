import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from 'helpers/route/PrivateRoute';
import TranslationProvider from 'i18n/TranslationProvider';
import translations from 'i18n/language';
import Home from 'feature/Home'
import Admin from 'feature/Admin'


const App = props => (
  <div>
    <Routing />
  </div>
);

const Routing = () => (
  <TranslationProvider messages={translations}>
    <Switch>
      <PrivateRoute exact={true} path='/' component={Home} />
      <PrivateRoute path='/admin' component={Admin} />
      <Redirect to="/" />
    </Switch>
  </TranslationProvider>
);

App.propTypes = {
}
export default App;
